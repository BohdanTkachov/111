export class MissionInfoWithOneImageViewModel {
  header: string;
  image: string;
  background?: string;
  content: string[];

  constructor() {
    this.header = 'Our mission';
    this.image = 'missionInfoWithOneImage.png';
    this.content = [
      "<p><span style='color: #38BC64;'>With our 17 years of experience in the field</span>, we aim to relieve companies of development tasks by building dedicated IT departments and organizing all technical workflow.</p><p>Our world-class software engineering team allows our clients to focus on other important aspects, such as making money and growing their businesses.</p>",
      "<p>Because we specialize <span style='color: #38BC64;'> providing long-term support</span>, 111 Minutes professionals dive deep into each brand’s problems and needs, creating customized solutions.</p> <p style='font-weight: 700'>That benefit both companies and their customers.</p>",
    ];
  }
}
