import { Component, Input } from '@angular/core';
import type { AboutUsInfoViewModel } from 'src/app/viewModels/aboutUsInfoViewModel';

@Component({
  selector: 'aboutUsInfo',
  templateUrl: './aboutUsInfo.component.html',
  styleUrls: ['./aboutUsInfo.component.css']
})
export class AboutUsInfoComponent {

  @Input() vm!: AboutUsInfoViewModel;

  constructor() { }
}
