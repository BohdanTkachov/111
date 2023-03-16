import { Component, Input } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';

@Component({
  selector: 'buttonGreen',
  templateUrl: './buttonGreen.component.html',
  styleUrls: ['./buttonGreen.component.css'],
})
export class ButtonGreenLargeComponent {
  @Input() contentText!: string;
  constructor(private contactUsModalService: ContactUsModalService) {}

  openModal() {
    this.contactUsModalService.show();
  }
}
