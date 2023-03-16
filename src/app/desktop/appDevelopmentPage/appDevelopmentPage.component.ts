import { Component } from '@angular/core';
import { AppDevelopmentPageViewModel } from 'src/app/viewModels/pages/appDevelopmentPageViewModel';

@Component({
  selector: 'appDevelopmentPage',
  templateUrl: './appDevelopmentPage.component.html',
  styleUrls: ['./appDevelopmentPage.component.css'],
})
export class AppDevelopmentPageComponent {
  vm = new AppDevelopmentPageViewModel();
}