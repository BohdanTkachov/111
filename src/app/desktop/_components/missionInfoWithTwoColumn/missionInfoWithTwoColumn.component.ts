import { Component, Input } from '@angular/core';
import { MissionInfoWithTwoColumnViewModel } from 'src/app/viewModels/missionInfoWithTwoColumnViewModel';

@Component({
  selector: 'missionInfoWithTwoColumn',
  templateUrl: './missionInfoWithTwoColumn.component.html',
  styleUrls: ['./missionInfoWithTwoColumn.component.css']
})
export class MissionInfoWithTwoColumnComponent{
  @Input() vm!: MissionInfoWithTwoColumnViewModel;

  constructor() { }
}
