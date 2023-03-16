import { Component, Input, VERSION } from '@angular/core';
import { OurProjectInfoViewModel } from 'src/app/viewModels/ourProjectsInfoViewModel';

@Component({
  selector: 'ourProjectInfo',
  templateUrl: './ourProjectInfo.component.html',
  styleUrls: ['./ourProjectInfo.component.css'],
})
export class OurProjectInfoComponent {
  @Input() vm!: OurProjectInfoViewModel;

  constructor() {}
}
