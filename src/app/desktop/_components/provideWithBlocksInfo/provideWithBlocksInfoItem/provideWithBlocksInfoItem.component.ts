import { Component, Input, OnInit } from '@angular/core';
import { ProvideWithBlocksInfoItemViewModel as ProvideWithBlocksInfoItemViewModel } from 'src/app/viewModels/provideWithBlocksInfoViewModel';

@Component({
  selector: 'provideWithBlocksInfoItem',
  templateUrl: './provideWithBlocksInfoItem.component.html',
  styleUrls: ['./provideWithBlocksInfoItem.component.css']
})
export class ProvideWithBlocksInfoItemComponent {
  @Input() vm!: ProvideWithBlocksInfoItemViewModel;

  constructor() { }

}
