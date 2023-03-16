import { Component, OnInit } from '@angular/core';
import { NodeJsPageViewModel } from 'src/app/viewModels/pages/nodeJsPageViewModel';

@Component({
  selector: 'app-nodeJsPage',
  templateUrl: './nodeJsPage.component.html',
  styleUrls: ['./nodeJsPage.component.css']
})
export class NodeJsPageComponent {
  vm = new NodeJsPageViewModel();

  constructor() { }

}
