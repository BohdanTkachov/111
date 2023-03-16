import { Component, Input } from '@angular/core';
import { HeaderSelectionViewModel } from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'servicesHeader',
  templateUrl: './servicesHeader.component.html',
  styleUrls: ['./servicesHeader.component.css']
})
export class ServicesHeaderComponent {

  @Input() vm!: HeaderSelectionViewModel;

  constructor() { }

}
