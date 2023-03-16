import { Component, Input } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';

@Component({
  selector: 'buttonGreenWithArrow',
  templateUrl: './buttonGreenWithArrow.component.html',
  styleUrls: ['./buttonGreenWithArrow.component.css']
})
export class ButtonGreenWithArrowComponent {
  @Input() contentText!: string;
  constructor(private contactUsModalService: ContactUsModalService) {}

  openModal() {
    this.contactUsModalService.show();
  }
}
