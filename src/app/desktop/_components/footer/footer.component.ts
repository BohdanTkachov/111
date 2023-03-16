import { Component, Input } from '@angular/core';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import { FooterViewModel } from 'src/app/viewModels/footerViewModel';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  title = 'threeunits';
  @Input() vm: FooterViewModel;
  constructor(private contactUsModalService: ContactUsModalService) {}

  openModal() {
    this.contactUsModalService.show();
  }

  sortArrayByIndex(arr: any[]) {
    if (window && window.outerWidth > 1130) {
      const evenArr = [];
      const oddArr = [];

      for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
          evenArr.push(arr[i]);
        } else {
          oddArr.push(arr[i]);
        }
      }

      return evenArr.concat(oddArr);
    } else {
      return arr;
    }
  }
}
