import { Component, Input } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import { GreetingWithImageViewModel } from 'src/app/viewModels/greetingWithImageViewModel';

@Component({
  selector: 'greetingWithImage',
  templateUrl: './greetingWithImage.component.html',
  styleUrls: ['./greetingWithImage.component.css'],
})
export class GreetingWithImageComponent {
  @Input() vm!: GreetingWithImageViewModel;
  constructor(private contactUsModalService: ContactUsModalService) {}

  openModal() {
    this.contactUsModalService.show();
  }
}
