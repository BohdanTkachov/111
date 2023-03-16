import { Component, Input, OnInit } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import { ClientReviewItemViewModel } from 'src/app/viewModels/clientReviewsViewModel';

@Component({
  selector: 'clientReviewItem',
  templateUrl: './clientReviewItem.component.html',
  styleUrls: ['./clientReviewItem.component.css']
})
export class ClientReviewItemComponent {

  @Input() vm: ClientReviewItemViewModel;
  constructor(private contactUsModalService: ContactUsModalService) { }
  

  openModal() {
    this.contactUsModalService.show();
  }
}
