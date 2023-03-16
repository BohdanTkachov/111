import { Component, Input } from '@angular/core';
import { SketchesViewModel } from 'src/app/viewModels/sketchesviewModel';

@Component({
  selector: 'sketches',
  templateUrl: './sketches.component.html',
  styleUrls: ['./sketches.component.css'],
})
export class SketchesComponent {
@Input()vm:SketchesViewModel=new SketchesViewModel();
  constructor(){}

  GetUrl(){
    return window.screen.width < 1130
    ? this.vm.imgUrlMobile
    : this.vm.imgUrlDesctop;
  }
}
