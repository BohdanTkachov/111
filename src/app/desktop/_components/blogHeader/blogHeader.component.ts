import { Component, Input } from '@angular/core';
import { HeaderSelectionViewModel } from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'blogHeader',
  templateUrl: './blogHeader.component.html',
  styleUrls: ['./blogHeader.component.css']
})
export class BlogHeaderComponent {

  @Input() vm!: HeaderSelectionViewModel;

  constructor() { }

}
