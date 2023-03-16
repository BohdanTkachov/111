import { Component, Input } from '@angular/core';
import { HeaderSelectionViewModel } from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'caseStudiesHeader',
  templateUrl: './caseStudiesHeader.component.html',
  styleUrls: ['./caseStudiesHeader.component.css']
})
export class CaseStudiesHeaderComponent {

  @Input() vm!: HeaderSelectionViewModel;

  constructor() { }
}
