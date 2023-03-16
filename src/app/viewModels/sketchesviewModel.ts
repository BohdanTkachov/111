export class SketchesViewModel {
  firstTitle: string;
  secondTitle: string;
  description: string;
  imgUrlDesctop: string;
  imgUrlMobile: string;
  constructor() {
    this.firstTitle = 'DESIGN';
    this.secondTitle = 'Sketches';
    this.description =
      '<p>To find out the best ways to achieve the product’s<br>  goals and avoid mistakes in app architecture, our<br>  team focused on UX analysis.<br><br></p>We created sketches to reflect<br> the whole functionality of Spotr.<br><br><h1></h1> This allowed 111 Minutes specialists to streamline<br>  their work and build a user-friendly app.';
    this.imgUrlDesctop = '../../../../assets/Images/sketches.png';
    this.imgUrlMobile = '../../../../assets/Images/sketches2.png';
  }
}
