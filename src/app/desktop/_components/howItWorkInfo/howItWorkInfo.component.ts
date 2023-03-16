import { Component, Input } from '@angular/core';
import { HowItWorkInfoViewModel } from 'src/app/viewModels/howItWorkInfoViewModel';

@Component({
  selector: 'howItWorkInfo',
  templateUrl: './howItWorkInfo.component.html',
  styleUrls: ['./howItWorkInfo.component.css'],
})
export class HowItWorkInfoComponent {
  @Input() vm: HowItWorkInfoViewModel;

  constructor() {}

  getNumberInString(val: number) {
    return val < 10 ? `0${val}` : val.toString();
  }
}
