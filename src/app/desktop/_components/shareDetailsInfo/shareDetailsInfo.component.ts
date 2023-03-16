import { Component, Input } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import { ShareDetailsInfoViewModel } from 'src/app/viewModels/shareDetailsInfoViewModel';

@Component({
  selector: 'shareDetailsInfo',
  templateUrl: './shareDetailsInfo.component.html',
  styleUrls: ['./shareDetailsInfo.component.css'],
})
export class ShareDetailsInfoComponent {
  @Input() vm!: ShareDetailsInfoViewModel;

  constructor(private contactUsModalService: ContactUsModalService){}

  openModal() {
    this.contactUsModalService.show();
  }
}
