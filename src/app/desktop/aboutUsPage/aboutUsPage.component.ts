import { Component } from '@angular/core';
import { AboutUsPageViewModel } from 'src/app/viewModels/pages/aboutUsPageViewModel';

@Component({
  selector: 'aboutUsPage',
  templateUrl: './aboutUsPage.component.html',
  styleUrls: ['./aboutUsPage.component.css'],
})
export class AboutUsPageComponent {
  vm = new AboutUsPageViewModel();
}