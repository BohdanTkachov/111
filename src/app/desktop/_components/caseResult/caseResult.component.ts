import { Component, Input } from '@angular/core';
import { CaseResultViewModel } from 'src/app/viewModels/caseResultViewModel';

@Component({
  selector: 'caseResult',
  templateUrl: './caseResult.component.html',
  styleUrls: ['./caseResult.component.css'],
})
export class CaseResultComponent {
  @Input() vm: CaseResultViewModel = new CaseResultViewModel();

  constructor() {}

  GetImg() {
    return window.innerWidth > 600
      ? this.vm.imgUrlDesctop
      : this.vm.imgUrlMobile;
  }
}
