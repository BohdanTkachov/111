import { Component, Input, OnInit } from '@angular/core';
import { TechnologiesInfoViewModel } from 'src/app/viewModels/technologiesInfoViewModel';

@Component({
  selector: 'technologiesInfo',
  templateUrl: './technologiesInfo.component.html',
  styleUrls: ['./technologiesInfo.component.css'],
})
export class TechnologiesInfoComponent implements OnInit {
  @Input() vm!: TechnologiesInfoViewModel;

  array = new Array(5);

  constructor() {
  }
  ngOnInit(): void {
    this.array = new Array(this.vm.content.length * 2 - 1);
  }
}
