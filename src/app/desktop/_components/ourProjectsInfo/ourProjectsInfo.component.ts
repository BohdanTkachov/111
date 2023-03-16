import { Component, Input } from '@angular/core';
import { OurProjectsInfoViewModel } from 'src/app/viewModels/ourProjectsInfoViewModel';

@Component({
  selector: 'ourProjectsInfo',
  templateUrl: './ourProjectsInfo.component.html',
  styleUrls: ['./ourProjectsInfo.component.css'],
})
export class OurProjectsInfoComponent {
  @Input() vm!: OurProjectsInfoViewModel;

  currantCaseIndex = 0;

  nextCase() {
    if (this.currantCaseIndex == this.vm.content.length - 1) {
      this.currantCaseIndex = 0;
    } else {
      this.currantCaseIndex++;
    }
  }

  prevCase() {
    if (this.currantCaseIndex == 0) {
      this.currantCaseIndex = this.vm.content.length - 1;
    } else {
      this.currantCaseIndex--;
    }
  }

  constructor() {}
}
