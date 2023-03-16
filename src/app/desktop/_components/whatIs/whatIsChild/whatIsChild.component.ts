import { Component, Input, OnInit } from '@angular/core';
import { WhatIsItemViewModel } from 'src/app/viewModels/whatIsViewModel';

@Component({
  selector: 'whatIsChild',
  templateUrl: './whatIsChild.component.html',
  styleUrls: ['./whatIsChild.component.css'],
})
export class WhatIsChildComponent {
  @Input() vm!: WhatIsItemViewModel;
  constructor() {}
}
