import { Component } from '@angular/core';
import {
  TypographyInfoItemViewModel,
  TypographyInfoViewModel,
} from 'src/app/viewModels/typographyInfoViewModel';

@Component({
  selector: 'typographyInfo',
  templateUrl: './typographyInfo.component.html',
  styleUrls: ['./typographyInfo.component.css'],
})
export class TypographyInfoComponent {
  vm: TypographyInfoViewModel = new TypographyInfoViewModel();
}
