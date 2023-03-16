import { Component, Input } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';

@Component({
  selector: 'buttonBottomBorderGreenWithArrow',
  templateUrl: './buttonBottomBorderGreenWithArrow.component.html',
  styleUrls: ['./buttonBottomBorderGreenWithArrow.component.css'],
})
export class ButtonBottomBorderGreenWithArrowComponent {
  @Input() contentText!: string;

  constructor(private contactUsModalService: ContactUsModalService) {}

  openModal() {
    this.contactUsModalService.show();
  }
}
