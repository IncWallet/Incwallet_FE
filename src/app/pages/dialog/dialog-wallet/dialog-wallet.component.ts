import { Component, OnInit, TemplateRef } from '@angular/core';
import { DialogWalletViewModel } from './dialog-wallet.vm';
import { NbDialogRef } from '@nebular/theme';
import { WalletClient } from '../../../api-clients/wallet.client';
import { SharedService } from '../../../infrastructure/_index';
import { OnDialogAction } from '../../../infrastructure/ui-helper';
import { IsResponseError, GetViewableError } from '../../../infrastructure/common-helper';
import { DropDownItem } from '../../../api-clients/_index';
import { ToastrService } from 'ngx-toastr';
import { NbDialogService } from '@nebular/theme';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'ngx-dialog-wallet',
  templateUrl: './dialog-wallet.component.html',
  styleUrls: ['./dialog-wallet.component.scss'],
})
export class DialogWalletComponent implements OnInit, OnDialogAction {
  @ViewChild('dialog') public templateref: TemplateRef<any>;
  title: String;
  vm: DialogWalletViewModel;
  constructor(
    protected ref: NbDialogRef<DialogWalletComponent>,
    protected walletClient: WalletClient,
    protected sharedService: SharedService,
    protected toast: ToastrService,
    protected dialogService: NbDialogService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.vm.networks.push(new DropDownItem('testnet', 'testnet'));
    this.vm.networks.push(new DropDownItem('mainnet', 'mainnet'));
    this.vm.networks.push(new DropDownItem('local', 'local'));

    this.vm.securities.push(new DropDownItem('256', '256'));
    this.vm.securities.push(new DropDownItem('128', '128'));
  }

  onCancel(event: any): void {
    this.ref.close();
  }

  async onSubmit(event: any) {
    this.sharedService.showSpinner();
    const res = await this.walletClient
    .create(
      {
        security: parseInt(this.vm.selectedSecurity, 10) || 0,
        network: this.vm.selectedNetwork,
        passphrase: this.vm.passphrase,
      }
    )
    .toPromise()
    .catch(err => err);
    this.sharedService.hideSpinner();


    if (IsResponseError(res)) {
      this.toast.error(GetViewableError(res));
    } else {
      let seeds = '';
      seeds = res.Msg.toString().split(' ');
      this.dialogService.open(this.templateref, {context: seeds, hasBackdrop: false, closeOnBackdropClick: false, hasScroll: true});
    }

    this.ref.close(!IsResponseError(res));
  }

  finish() {
    this.router.navigate(['pages/account']);
  }
}
