import { Component } from '@angular/core';
import { WebDevelopmentPageViewModel } from 'src/app/viewModels/pages/webDevelopmentPageViewModel';

@Component({
  selector: 'webDevelopmentPage',
  templateUrl: './webDevelopmentPage.component.html',
  styleUrls: ['./webDevelopmentPage.component.css'],
})
export class WebDevelopmentPageComponent {
  vm = new WebDevelopmentPageViewModel();
}