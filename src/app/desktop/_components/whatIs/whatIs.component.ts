import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WhatIsViewModel } from 'src/app/viewModels/whatIsViewModel';

@Component({
  selector: 'whatIs',
  templateUrl: './whatIs.component.html',
  styleUrls: ['./whatIs.component.css'],
})
export class WhatIsComponent {
  @Input() vm!: WhatIsViewModel;
  constructor(private router: Router) {}

  isMainPage = this.router.url == '/';

  getChildrenArr() {
    return Array.from({ length: this.vm.children.length * 2 - 1 }, (v, k) => k);
  }
}
