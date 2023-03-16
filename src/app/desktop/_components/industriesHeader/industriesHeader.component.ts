import { Component, Input } from '@angular/core';
import { HeaderSelectionViewModel, SelectionContentItemViewModel } from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'industriesHeader',
  templateUrl: './industriesHeader.component.html',
  styleUrls: ['./industriesHeader.component.css']
})
export class IndustriesHeaderComponent {

  @Input() vm!: HeaderSelectionViewModel;

  constructor() { }  

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
