import { Component, Input } from '@angular/core';
import { ClientReviewsViewModel } from 'src/app/viewModels/clientReviewsViewModel';

@Component({
  selector: 'clientReviews',
  templateUrl: './clientReviews.component.html',
  styleUrls: ['./clientReviews.component.css']
})
export class ClientReviewsComponent {
  @Input() vm: ClientReviewsViewModel;

  constructor() { }
  index: number = 0;

  nextReview() {
    if (this.index === this.vm.content.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }

  prevReview() {
    if (this.index === 0) {
      this.index = this.vm.content.length - 1;
    } else {
      this.index--;
    }
  }

}
