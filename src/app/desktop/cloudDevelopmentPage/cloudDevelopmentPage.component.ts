import { Component } from '@angular/core';
import { CloudDevelopmentPageViewModel } from 'src/app/viewModels/pages/cloudDevelopmentPageViewModel';

@Component({
  selector: 'cloudDevelopmentPage',
  templateUrl: './cloudDevelopmentPage.component.html',
  styleUrls: ['./cloudDevelopmentPage.component.css'],
})
export class CloudDevelopmentPageComponent {
  vm = new CloudDevelopmentPageViewModel();
}