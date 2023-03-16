export class SketchesWireframesViewModel {
  firstTitle: string;
  secondTitle: string;
  description1: string;
  description2: string;

  imgUrlDesctop: string;
  imgUrlMobile: string;
  constructor() {
    this.firstTitle = 'DESIGN';
    this.secondTitle = 'Sketches';
    this.description1 =
      '<p>We started working on this project by creating sketches that were aimed to become a basis for a simple and useful app.</p><p> Once the client approved our design at this stage, the 111 Minutes team focused on <span style="color:#38BC64">developing wireframes.</span></p>';
    this.description2 =
      "<p>This step helped our specialists to incorporate all ideas, improve developments and provide visual concepts of the app. </p><p> Once we analyzed the usability of the created design and ensured that it would enable smooth interaction, our experts started the screens' creation.</p>";
    this.imgUrlDesctop = '../../../../assets/Images/sketches.png';
    this.imgUrlMobile = '../../../../assets/Images/sketches2.png';
  }
}
