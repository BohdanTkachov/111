export class CaseResultViewModel {
  title: string;
  descriptionLeft: string;
  descriptionRight: string;
  iconArrowUrl: string;
  iconStarUrl: string;
  imgUrlDesctop: string;
  imgUrlMobile: string;
  constructor() {
    this.title = 'RESULT';
    this.descriptionLeft =
      "Spotr entrusted the development<br> of the product during the essential <br>period — the MVP stage.<p> Except for initial requirements,<br> the client wanted our team<br> to create a <span style='color: #38BC64;'><span>high-quality, user-friendly<br> and easy-to-use app.</span></span></p>";
    this.descriptionRight =
      "<span style='font-weight:bold;'><span>The 111 Minutes team managed to build a strong,<br> <span style='color: #38BC64;'><span>competitive iOS application that</span></span> allows customers<br> to plan trips for a variety of needs simply and intuitively.</span></span><p>Accessible and convenient features will let Spotr<br> win the market and deliver value to its customers.</p><p> Our experts did their best to provide positive experiences to travelers and reach an incomparable level of loyalty and satisfaction.</p>";
    this.iconArrowUrl = '../../../../assets/Images/caseResultArrow.svg';
    this.iconStarUrl = '../../../../assets/Images/caseResultIcon.svg';
    this.imgUrlDesctop = '../../../../assets/Images/caseResult.png';
    this.imgUrlMobile = '../../../../assets/Images/caseResult2.png';
  }
}
