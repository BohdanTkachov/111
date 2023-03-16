export class GreetingWithTextViewModel {
  public header: string;
  public headerPreview: string;
  public description: string;
  public buttonText: string;
  public background?: string;
  public link: string;

  constructor() {
    this.header =
      'Reduce costs and stop staff turnover with <u style="text-decoration-color:#38BC64;">Dedicated Software Team</u>';
    this.headerPreview =
      'Save costs and don’t care about bureaucracy with our offshore development company';
    this.description =
      'Apply cost-effective solutions while collaborating with<br>a highly-experienced IT department.<br><br>Get a caring and committed dedicated development team to solve your tech tasks right away and build industry-tailored solutions on a long-term basis.';
    this.buttonText = 'GET A QUOTE';
    this.link = '#';
  }
}
