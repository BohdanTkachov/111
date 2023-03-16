import { Component, Input } from '@angular/core';
import { HeaderSelectionViewModel } from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'solutionsHeader',
  templateUrl: './solutionsHeader.component.html',
  styleUrls: ['./solutionsHeader.component.css']
})
export class SolutionsHeaderComponent {

    @Input() vm!: HeaderSelectionViewModel;
  constructor() { }

}
