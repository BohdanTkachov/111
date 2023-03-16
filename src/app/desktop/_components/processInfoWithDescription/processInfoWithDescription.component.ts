import { Component, Input, OnInit } from '@angular/core';
import { ProcessInfoWithDescriptionViewModel } from 'src/app/viewModels/processInfoWithDescription';

@Component({
  selector: 'processInfoWithDescription',
  templateUrl: './processInfoWithDescription.component.html',
  styleUrls: ['./processInfoWithDescription.component.css'],
})
export class ProcessInfoWithDescriptionComponent {
  @Input() vm!: ProcessInfoWithDescriptionViewModel;
  constructor() {}

  stagesWithoutLastChild() {
    return this.vm.stages.slice(0, -1)
  }
}
