import { Component } from '@angular/core';
import { MainPageViewModel } from 'src/app/viewModels/pages/mainPageViewModel';

@Component({
  selector: 'mainPage',
  templateUrl: './mainPage.component.html',
  styleUrls: ['./mainPage.component.css'],
})
export class MainPageComponent {
  vm = new MainPageViewModel();

  constructor() { }

}
