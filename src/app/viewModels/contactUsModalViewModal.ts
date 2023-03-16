export class ContactUsModalViewModal {
  logoImgUri: string;
  header: string;
  nameInputLabel: string;
  emailInputLabel: string;
  phoneInputLabel: string;
  messageInputLabel: string;
  buttonText: string;
  footerText: string;

  constructor() {
    (this.logoImgUri = '../../../../assets/Images/headerLogoBlack.svg'),
      (this.header = 'Let us take care of your project!');
    this.nameInputLabel = 'Full name';
    this.emailInputLabel = 'Email';
    this.phoneInputLabel = 'Phone number';
    this.messageInputLabel = 'Message';
    this.buttonText = 'SEND';
    this.footerText =
      'Stay ahead of the competition by collaborating with our software development company.';
  }

  Initialize(vm: ContactUsModalViewModal) {
    this.logoImgUri = vm.logoImgUri;
    this.header = vm.header;
    this.nameInputLabel = vm.nameInputLabel;
    this.emailInputLabel = vm.emailInputLabel;
    this.phoneInputLabel = vm.phoneInputLabel;
    this.messageInputLabel = vm.messageInputLabel;
    this.buttonText = vm.buttonText;
    this.footerText = vm.footerText;
  }
}
