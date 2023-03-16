import { Component, Input } from '@angular/core';
import { MissionInfoWithTwoColumnItemViewModel } from 'src/app/viewModels/missionInfoWithTwoColumnViewModel';

@Component({
  selector: 'missionInfoWithTwoColumnItem',
  templateUrl: './missionInfoWithTwoColumnItem.component.html',
  styleUrls: ['./missionInfoWithTwoColumnItem.component.css'],
})
export class MissionInfoWithTwoColumnItemComponent {
  @Input() vm!: MissionInfoWithTwoColumnItemViewModel;

  constructor() {
  }
}
