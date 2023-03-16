import { Component, Input } from '@angular/core';
import { CaseheaderViewModel } from 'src/app/viewModels/caseHeaderViewModel';

@Component({
  selector: 'caseHeader',
  templateUrl: './caseHeader.component.html',
  styleUrls: ['./caseHeader.component.css'],
})
export class CaseHeaderComponent {
  @Input() vm: CaseheaderViewModel;
  constructor() {}

  isModalDialogVisible: boolean = false;
  onOpenModal() {
    this.isModalDialogVisible = true;
  }
  onClouseModal() {
    this.isModalDialogVisible = false;
  }
}
