import { Component, Input } from '@angular/core';
import { CaseIconsSetViewModel } from 'src/app/viewModels/caseIconsSetViewModel';

@Component({
  selector: 'caseIconsSet',
  templateUrl: './caseIconsSet.component.html',
  styleUrls: ['./caseIconsSet.component.css'],
})
export class CaseIconsSetComponent {
  @Input() vm: CaseIconsSetViewModel;

  constructor() {}

  GetImg() {
    return window.innerWidth > 1130
      ? this.vm.imgDesctopUrl
      : this.vm.imgMobileUrl;
  }
}
