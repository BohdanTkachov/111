import { Component, Input } from '@angular/core';
import { OffshoreDedicatedPageViewModel } from 'src/app/viewModels/pages/offshoreDedicatedPageViewModel';

@Component({
  selector: 'offshoreDedicatedPage',
  templateUrl: './offshoreDedicatedPage.component.html',
  styleUrls: ['./offshoreDedicatedPage.component.css'],
})
export class OffshoreDedicatedPageComponent {
  vm = new OffshoreDedicatedPageViewModel();
}
