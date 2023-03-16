import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageService } from 'src/app/services/pageService';
import {
  MasterPageBlockViewModel,
  MasterPageViewModel,
} from 'src/app/viewModels/pages/masterPageViewModel';

@Component({
  selector: 'masterPage',
  templateUrl: './masterPage.component.html',
  styleUrls: ['./masterPage.component.css'],
})
export class MasterPageComponent implements OnInit {
  constructor(
    public vm: MasterPageViewModel,
    private pageService: PageService,
    private router: Router
  ) {}

  isLoading = true;

  async ngOnInit() {
    let page: string = this.router.url.substring(1, this.router.url.length);
    if (page.length == 0) {
      page = 'main_page';
    }

    await this.pageService.LoadPage(page);
    window.scrollTo(0, 0);
    this.isLoading = false;
  }

  GetPadding(model: MasterPageBlockViewModel): number {
    return window.outerWidth > 1130
      ? model.offsetBottomDesktop
      : model.offsetBottomMobile;
  }
}
