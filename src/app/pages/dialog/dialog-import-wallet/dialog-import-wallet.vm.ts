import { DropDownItem } from '../../../api-clients/_index';

export class DialogImportWalletViewModel {
  constructor() {
    this.networks = new Array();
    this.securities = new Array();
  }

  mnemonic: string;

  security: string;

  network: string;
  passphrase: string;

  selectedNetwork: string;
  networks: DropDownItem[];

  selectedSecurity: string;
  securities: DropDownItem[];
}
