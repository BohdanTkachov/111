import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalViewModel } from 'src/app/viewModels/modalviewModel';
import { RoadMapItemViewModel } from 'src/app/viewModels/roadMapViewModel';

@Component({
  selector: 'roadMapItem',
  templateUrl: './roadMapItem.component.html',
  styleUrls: ['./roadMapItem.component.css'],
})
export class RoadMapItemComponent {
  @Input() vm!: RoadMapItemViewModel;
  @Input() index: number;
  //emits index of the item
  @Output() onOpenModal = new EventEmitter<number>();

  openModal() {
    this.onOpenModal.emit(this.index);
  }
}
