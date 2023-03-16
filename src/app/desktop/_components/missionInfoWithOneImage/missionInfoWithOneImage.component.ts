import { Component, Input } from '@angular/core';
import { MissionInfoWithOneImageViewModel } from 'src/app/viewModels/missionInfoWithOneImageViewModel';

@Component({
  selector: 'missionInfoWithOneImage',
  templateUrl: './missionInfoWithOneImage.component.html',
  styleUrls: ['./missionInfoWithOneImage.component.css'],
})
export class MissionInfoWithOneImageComponent {
  @Input() vm: MissionInfoWithOneImageViewModel;

  constructor() { }
}
