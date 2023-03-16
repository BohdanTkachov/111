import { Input, Component } from '@angular/core';
import { BenefitsInfoViewModel } from '../../../viewModels/benefitsInfoViewModel'

@Component({
  selector: 'benefitsInfo',
  templateUrl: './benefitsInfo.component.html',
  styleUrls: ['./benefitsInfo.component.css']
})
export class BenefitsInfoComponent {
  @Input() vm: BenefitsInfoViewModel;
}
