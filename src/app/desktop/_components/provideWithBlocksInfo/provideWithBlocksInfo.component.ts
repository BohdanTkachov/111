import { Component, Input, ViewEncapsulation } from '@angular/core';
import type { ProvideWithBlocksInfoViewModel } from 'src/app/viewModels/provideWithBlocksInfoViewModel';

@Component({
  selector: 'provideWithBlocksInfo',
  templateUrl: './provideWithBlocksInfo.component.html',
  styleUrls: ['./provideWithBlocksInfo.component.css'],
})
export class ProvideWithBlocksInfoComponent {
  @Input() vm!: ProvideWithBlocksInfoViewModel;
  getFullUrl() {}
  constructor() {}
}
