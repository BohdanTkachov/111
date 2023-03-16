import { Component, Input } from '@angular/core';
import { HeaderSelectionViewModel, SelectionContentItemViewModel } from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'technologiesMenu',
  templateUrl: './technologiesMenu.component.html',
  styleUrls: ['./technologiesMenu.component.css'],
})
export class TechnologiesMenuComponent {
  @Input() vm!: HeaderSelectionViewModel;

  sortArrayByIndex(arr : SelectionContentItemViewModel[]) {
    const evenArr = [];
    const oddArr = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        evenArr.push(arr[i]);
      } else {
        oddArr.push(arr[i]);
      }
    }
  
    return evenArr.concat(oddArr);
  }
}
