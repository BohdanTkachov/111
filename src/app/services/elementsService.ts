import { Injectable } from '@angular/core';
import { ElementsApiManager } from '../managers/api/elementsApiManager';
import { ContactUsModalViewModal } from '../viewModels/contactUsModalViewModal';
import { FooterViewModel } from '../viewModels/footerViewModel';
import {
  FooterMobileHeaderViewModel,
  HeaderViewModel,
} from '../viewModels/headerViewModel';
import { ElementsMapService } from './elementsMapService';

@Injectable()
export class ElementsService {
  constructor(
    private elementsApiManager: ElementsApiManager,
    private footerVM: FooterViewModel,
    private headerVM: HeaderViewModel,
    private contactUsModalVM: ContactUsModalViewModal,
    private elementsMapService: ElementsMapService
  ) {}

  async LoadElements() {
    const elements = (await this.elementsApiManager.GetAllElements())!;
    console.log(elements);

    this.headerVM.Initialize(
      //@ts-ignore
      this.elementsMapService.MapHeader(elements.header.blocks)
    );

    this.footerVM.Initialize(
      //@ts-ignore
      this.elementsMapService.MapFooter(elements.footer.blocks)
    );

    this.contactUsModalVM.Initialize(
      //@ts-ignore
      this.elementsMapService.MapContactUsModal(elements.contact_us.blocks[0])
    );
  }
}
