export class DialogPassphraseViewModel {
  constructor() {
    this.passphrase = '';
    this.target = null;
  }

  target: DialogPassphraseEnum;
  data: any;

  passphrase: string;
}

export enum DialogPassphraseEnum {
  switchAccount,
  addAccount
}
