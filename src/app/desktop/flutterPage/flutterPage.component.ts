import { Component } from '@angular/core';
import { FlutterPageViewModel } from 'src/app/viewModels/pages/flutterPageViewModel';

@Component({
  selector: 'flutterPage',
  templateUrl: './flutterPage.component.html',
  styleUrls: ['./flutterPage.component.css'],
})
export class FlutterPageComponent {
  vm = new FlutterPageViewModel();
}