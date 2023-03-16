import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalViewModel } from 'src/app/viewModels/modalviewModel';

@Component({
  selector: 'modalCaseHeader',
  templateUrl: './modalCaseHeader.component.html',
  styleUrls: ['./modalCaseHeader.component.css'],
})
export class ModalCaseHeaderComponent {
  @Input() vm: ModalViewModel;

  @Output() onOpenModal = new EventEmitter();
  openModal() {
    this.onOpenModal.emit();
  }
  @Output() onClouseModal = new EventEmitter();
  clouseModal() {
    this.onClouseModal.emit();
  }

  currantCaseIndex = 0;

  GetWidth(): number {
    return window.innerWidth - 210;
  }

  GetHeight(): number {
    return window.innerHeight - 210;
  }

  nextCase() {
    if (this.currantCaseIndex == this.vm.imageUris.length - 1) {
      this.currantCaseIndex = 0;
    } else {
      this.currantCaseIndex++;
    }
  }

  prevCase() {
    if (this.currantCaseIndex == 0) {
      this.currantCaseIndex = this.vm.imageUris.length - 1;
    } else {
      this.currantCaseIndex--;
    }
  }
  constructor() {}
}
