import { Component, Input } from '@angular/core';
import { ModalViewModel } from 'src/app/viewModels/modalviewModel';
import { RoadMapViewModel } from 'src/app/viewModels/roadMapViewModel';

@Component({
  selector: 'roadMap',
  templateUrl: './roadMap.component.html',
  styleUrls: ['./roadMap.component.css'],
})
export class RoadMapComponent {
  @Input() vm: RoadMapViewModel;

  isModalDialogVisible: boolean = false;
  onOpenModal() {
    if (window.innerWidth >= 1130) {
      this.isModalDialogVisible = true;
    }
  }
  onCloseModal() {
    this.isModalDialogVisible = false;
  }
}
