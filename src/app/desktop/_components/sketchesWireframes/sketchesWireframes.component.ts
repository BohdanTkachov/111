import { Component, Input } from '@angular/core';
import { SketchesWireframesViewModel } from 'src/app/viewModels/sketchesWireframesViewModel';

@Component({
  selector: 'sketcheswireframes',
  templateUrl: './sketchesWireframes.component.html',
  styleUrls: ['./sketchesWireframes.component.css'],
})
export class SketchesWireframesComponent {
  @Input() vm: SketchesWireframesViewModel;
  constructor() {}

  GetUrl() {
    return window.screen.width < 1130
      ? this.vm.imgUrlMobile
      : this.vm.imgUrlDesctop;
  }
}
