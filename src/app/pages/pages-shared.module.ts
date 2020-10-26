import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import {
  NbCheckboxModule,
  NbIconModule,
  NbButtonModule,
  NbInputModule,
  NbRadioModule,
  NbCardModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbListModule,
  NbUserModule,
  NbDialogModule,
  NbSelectModule,
  NbFormFieldModule,
} from '@nebular/theme';
import { ValidationMessageComponent } from './_shared/validation-message/validation-message.component';
import { StatusCardComponent } from './_shared/status-card/status-card.component';
import { KittenComponent } from './_shared/kitten/kitten.component';
import { ContactsComponent } from './_shared/contacts/contacts.component';
import { TranslateModule } from '@ngx-translate/core';
import { QRCodeModule } from 'angularx-qrcode';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { DialogPromptComponent } from './_shared/dialog-prompt/dialog-prompt.component';
import { MashComponent } from './_shared/mash/mash.component';

@NgModule({
  declarations: [
    ValidationMessageComponent,
    StatusCardComponent,
    KittenComponent,
    ContactsComponent,
    DialogPromptComponent,
    MashComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NbCheckboxModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbCardModule,
    NbSpinnerModule,
    NbTabsetModule,
    NbListModule,
    NbUserModule,
    NbSelectModule,
    NbDialogModule.forRoot(),
    TranslateModule,
    QRCodeModule,
    NbFormFieldModule,
    ClipboardModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NbCheckboxModule,
    NbIconModule,
    NbButtonModule,
    NbInputModule,
    NbRadioModule,
    NbCardModule,
    NbTabsetModule,
    NbListModule,
    NbUserModule,
    NbSelectModule,
    TranslateModule,
    QRCodeModule,
    NbFormFieldModule,
    ClipboardModule,

    ValidationMessageComponent,
    StatusCardComponent,
    KittenComponent,
    ContactsComponent,
    DialogPromptComponent,
    MashComponent,


  ],
  entryComponents: [
    ValidationMessageComponent,
    StatusCardComponent,
    KittenComponent,
    ContactsComponent,
    DialogPromptComponent,
    MashComponent,

  ],
})
export class PagesSharedModule {}
