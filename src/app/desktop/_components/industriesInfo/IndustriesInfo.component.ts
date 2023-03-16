import { Input, Component } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import { IndustriesInfoViewModel } from '../../../viewModels/industriesInfoViewModel';
@Component({
  selector: 'industriesInfo',
  templateUrl: './industriesInfo.component.html',
  styleUrls: ['./industriesInfo.component.css'],
})
export class IndustriesInfoComponent {
  @Input() vm!: IndustriesInfoViewModel;
}
