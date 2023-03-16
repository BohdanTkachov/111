import { Component, OnInit } from '@angular/core';
import { ProcessInfoWithDescriptionViewModel } from 'src/app/viewModels/processInfoWithDescription';

@Component({
  selector: 'app-testPage',
  templateUrl: './testPage.component.html',
  styleUrls: ['./testPage.component.css']
})
export class TestPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // processInfoVM = new ProcessInfoViewModel;
  processInfoWithDescription = new ProcessInfoWithDescriptionViewModel();
}
