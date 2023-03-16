import { Component, Input } from '@angular/core';
import { WhyDelegateInfoItemViewModel } from 'src/app/viewModels/whyDelegateInfoViewModel';

@Component({
  selector: 'whyDelegateInfoItem',
  templateUrl: './whyDelegateInfoItem.component.html',
  styleUrls: ['./whyDelegateInfoItem.component.css'],
})
export class WhyDelegateInfoItemComponent {
  @Input() vm!: WhyDelegateInfoItemViewModel;

  constructor() {}
  getImgPath(imageUrl: string) {
    return `../../../../assets/Images/whyDelegate/${imageUrl}`;
  }
}
