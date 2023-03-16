import { Input, Component } from '@angular/core';
import { WhyDelegateInfoViewModel } from '../../../viewModels/whyDelegateInfoViewModel'

@Component({
  selector: 'whyDelegateInfo',
  templateUrl: './whyDelegateInfo.component.html',
  styleUrls: ['./whyDelegateInfo.component.css']
})
export class WhyDelegateInfoComponent {
  @Input() vm: WhyDelegateInfoViewModel;
}
