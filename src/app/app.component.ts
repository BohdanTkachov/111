import { Component } from '@angular/core';
import { FooterViewModel } from './viewModels/footerViewModel';
import { HeaderViewModel } from './viewModels/headerViewModel';
import { ContactUsModalService } from './services/modals/ContactUsModalService';
import { ContactUsModalViewModal } from './viewModels/contactUsModalViewModal';
import * as Aos from 'aos';
import { ElementsService } from './services/elementsService';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'threeunits';
  contactUsModalViewModel = new ContactUsModalViewModal();

  constructor(
    private contactUsModalService: ContactUsModalService,
    private elementsService: ElementsService,
    public footerVM: FooterViewModel,
    public headerVM: HeaderViewModel,
    public contactUsModalVM: ContactUsModalViewModal,
    private meta: Meta
  ) {}

  ngOnInit() {
    Aos.init();
    this.elementsService.LoadElements();

    this.meta.updateTag({ name: 'description', content: 'sdfdsf' });
    this.meta.updateTag({ name: 'author', content: 'sdf' });
    this.meta.updateTag({ name: 'keywords', content: 'category' });
  }

  openModal() {
    this.contactUsModalService.show();
  }
}
