export class ShareDetailsInfoViewModel {
  header!: string;
  descrption!: string;
  buttonText!: string;
  background?: string;
  linkAddress!: string;

  constructor() {
    this.header =
      'We know what apps and platforms work <span style="color: #38BC64;">best for your industry</span>.';
    this.descrption =
      'We are always ready to share these valuable insights with you. Let’s find your company’s growth points together!';
    this.buttonText = 'Book a call';
    this.linkAddress = '#';
  }
}
