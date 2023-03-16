import { Component, Input } from '@angular/core';
import { ProvideInfoViewModel } from 'src/app/viewModels/provideInfoViewModel';

@Component({
  selector: 'provideInfo',
  templateUrl: './provideInfo.component.html',
  styleUrls: ['./provideInfo.component.css'],
})
export class ProvideInfoComponent {
  @Input() vm: ProvideInfoViewModel;

  constructor() {}
}
