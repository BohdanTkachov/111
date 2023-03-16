import { Component, Input, OnInit } from '@angular/core';
import { ProcessInfoViewModel } from 'src/app/viewModels/processInfo';

@Component({
  selector: 'processInfo',
  templateUrl: './processInfo.component.html',
  styleUrls: ['./processInfo.component.css'],
})
export class ProcessInfoComponent {
  @Input() vm!: ProcessInfoViewModel;
  constructor() {}

  stagesWithoutLastChild() {
    const res = this.vm.stages.slice(0, -1);
    return res;
  }
}
