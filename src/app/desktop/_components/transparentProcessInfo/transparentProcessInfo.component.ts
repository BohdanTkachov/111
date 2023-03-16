import { Component, Input } from '@angular/core';
import { TransparentProcessInfoViewModel } from 'src/app/viewModels/transparentProcessInfoViewModel';

@Component({
  selector: 'transparentProcessInfo',
  templateUrl: './transparentProcessInfo.component.html',
  styleUrls: ['./transparentProcessInfo.component.css'],
})
export class TransparentProcessInfoComponent {
  @Input() vm!: TransparentProcessInfoViewModel;
}
