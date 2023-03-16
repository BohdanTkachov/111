export class ContactFormViewModal {
  header: string;
  nameInputLabel: string;
  emailInputLabel: string;
  phoneInputLabel: string;
  messageInputLabel: string;
  buttonText: string;
  footerText: string;
  iconUrl: string;

  constructor() {
    this.header = 'Let us take care of your project!';
    this.nameInputLabel = 'Full name';
    this.emailInputLabel = 'Email';
    this.phoneInputLabel = 'Phone number';
    this.messageInputLabel = 'Message';
    this.buttonText = 'SEND';
    this.footerText =
      'Stay ahead of the competition by collaborating with our software development company.';
      this.iconUrl = '../../../../assets/Images/ContactFormIcon.svg'
  }
}
