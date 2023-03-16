export class CaseIconsSetViewModel {
  title: string;
  description: string;
  imgMobileUrl: string;
  imgDesctopUrl: string;
  constructor() {
    this.title = 'Icons';
    this.description =
      "<p>We created icons specially for Spotr to complete its <span style='color:#38BC64'><span>unique style</span></span>. Thus, now users notice<br> the high quality of the product and <span style='color:#38BC64'><span>clean, friendly UI</span></span> while interacting with the app.</p> <p>Later on, our experienced specialists paid lots of attention to the design<br> of the product at the MVP stage.</p>";
    this.imgMobileUrl = '../../../../assets/Images/caseIconsSet1.svg';
    this.imgDesctopUrl = '../../../../assets/Images/caseIconsSet2.svg';
  }
}
