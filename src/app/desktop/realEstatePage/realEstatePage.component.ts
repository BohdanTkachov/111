import { Component } from '@angular/core';
import { RealEstatePageViewModel } from 'src/app/viewModels/pages/realEstatePageViewModel';

@Component({
  selector: 'realEstatePage',
  templateUrl: './realEstatePage.component.html',
  styleUrls: ['./realEstatePage.component.css'],
})
export class RealEstatePageComponent {
  vm = new RealEstatePageViewModel();
}
