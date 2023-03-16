import { Component } from '@angular/core';
import { HealthcarePageViewModel } from 'src/app/viewModels/pages/healthcarePageViewModel';

@Component({
  selector: 'healthcarePage',
  templateUrl: './healthcarePage.component.html',
  styleUrls: ['./healthcarePage.component.css'],
})
export class HealthcarePageComponent {
  vm: HealthcarePageViewModel = new HealthcarePageViewModel();

  constructor() {}
}
