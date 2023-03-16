import { Component, Input } from '@angular/core';
import { TechnologiesInfoItemViewModel } from 'src/app/viewModels/technologiesInfoViewModel';

@Component({
  selector: 'technologiesInfoItem',
  templateUrl: './technologiesInfoItem.component.html',
  styleUrls: ['./technologiesInfoItem.component.css']
})
export class TechnologiesInfoItemComponent{
  @Input() vm!: TechnologiesInfoItemViewModel;

  constructor() { }
}
