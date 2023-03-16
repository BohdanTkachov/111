import { Component } from '@angular/core';
import { CustomDevelopmentPageViewModel } from 'src/app/viewModels/pages/customDevelopmentPageViewModel';

@Component({
  selector: 'customDevelopmentPage',
  templateUrl: './customDevelopmentPage.component.html',
  styleUrls: ['./customDevelopmentPage.component.css'],
})
export class CustomDevelopmentPageComponent {
    vm = new CustomDevelopmentPageViewModel();

}