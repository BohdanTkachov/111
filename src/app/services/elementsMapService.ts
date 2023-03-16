import { Injectable } from '@angular/core';
import { ElementBlockApiModel } from '../models/managers/api/ElementsApiModel';
import { ContactUsModalViewModal } from '../viewModels/contactUsModalViewModal';
import {
  Chapter,
  FooterViewModel,
  SocialNetworks,
} from '../viewModels/footerViewModel';
import {
  HeaderSelectionViewModel,
  HeaderViewModel,
  SelectionContentItemViewModel,
  FooterMobileHeaderViewModel,
} from '../viewModels/headerViewModel';

@Injectable()
export class ElementsMapService {
  GetPathForImage(path: string) {
    if (path.indexOf('http://') == 0 || path.indexOf('https://') == 0) {
      return path;
    } else {
      return `../../../../assets/Images/${path}`;
    }
  }

  MapHeader(data: ElementBlockApiModel[]) {
    const headerViewModel = new HeaderViewModel();

    data.forEach((item) => {
      if (item.name == 'selections') {
        const selections: HeaderSelectionViewModel[] = [];
        item.data.forEach((x: any) => {
          const content: SelectionContentItemViewModel[] = [];

          if (x.content) {
            x.content.forEach((y: any) => {
              content.push({
                description: y.description,
                imageUri: this.GetPathForImage(y.imageuri),
                link: y.link,
                title: y.title,
                industries: y.industries ?? undefined,
              });
            });
          }

          if (selections) {
            selections.push({
              title: x.title,
              content: content,
            });
          }
        });
        headerViewModel.selections = selections;
      } else {
        //@ts-ignore
        const data: FooterMobileHeaderViewModel = {
          ...item.data,
          socials: [],
        };

        item.data.socials.forEach((social: any) => {
          data.socials.push({
            name: social.name,
            link: social.link,
            imageUri: this.GetPathForImage(social.imageuri),
          });
        });
        headerViewModel.footerContent = data;
      }
    });

    return headerViewModel;
  }

  MapFooter(data: ElementBlockApiModel[]) {
    const footerViewModel = new FooterViewModel();

    data.forEach((item) => {
      if (item.name == 'contacts') {
        footerViewModel.contacts = {
          btnName: item.data.btnname,
          mail: item.data.mail,
          description: item.data.description,
          phone: item.data.phone,
        };
      }

      if (item.name == 'socialnetworks') {
        const socials: SocialNetworks[] = [];
        item.data.content.forEach((social: any) => {
          socials.push({
            iconPath: this.GetPathForImage(social.iconpath),
            link: social.link,
            title: social.title,
          });
        });

        footerViewModel.socialNetworks = socials;
      }
      if (item.name == 'chapters') {
        const chapters: Chapter[] = [];
        //@ts-ignore
        item.data.forEach((chapter) => {
          chapters.push({
            chapterItem: chapter.chapteritem,
            title: chapter.title,
          });
        });

        footerViewModel.chapters = chapters;
      }
    });

    return footerViewModel;
  }

  MapContactUsModal(item: ElementBlockApiModel) {
    const vm = new ContactUsModalViewModal();
    vm.buttonText = item.data.buttontext;
    vm.emailInputLabel = item.data.emailinputlabel;
    vm.footerText = item.data.footertext;
    vm.header = item.data.header;
    vm.logoImgUri = this.GetPathForImage(item.data.logoimguri);
    vm.messageInputLabel = item.data.messageinputlabel;
    vm.nameInputLabel = item.data.nameinputlabel;
    vm.phoneInputLabel = item.data.phoneinputlabel;

    return vm;
  }
}
