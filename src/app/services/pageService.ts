import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PageApiManager } from '../managers/api/pageApiManager';
import { MasterPageViewModel } from '../viewModels/pages/masterPageViewModel';
import { PageMapService } from './pageMapService';

@Injectable()
export class PageService {
  constructor(
    private pageApiManager: PageApiManager,
    private mapService: PageMapService,
    private vm: MasterPageViewModel,
    private meta: Meta,
    private titleService: Title,
    private router: Router
  ) {}

  async LoadPage(pageName: string) {
    console.log(pageName);
    
    let pages = (await this.pageApiManager.GetAllPages())!;
    let pageInfo = pages.find(
      (x) =>
        this.ToSnakeCase(x.title.toLocaleLowerCase().replaceAll('с', 'c')) ===
        pageName.toLocaleLowerCase().replaceAll('с', 'c')
    );

    if (!pageInfo) {
      this.vm.AddError('Page not found');
      throw `Page '${pageName}' was not found`;
    }

    let page = (await this.pageApiManager.GetPage(pageInfo.id))!;    

    this.titleService.setTitle(page.page_title);

    // Init new metadata
    this.meta.updateTag({
      name: 'description',
      content: page.meta_description,
    });
    this.meta.updateTag({
      name: 'keywords',
      content: page.meta_keywords,
    });
    this.meta.updateTag({
      name: 'title',
      content: page.page_title,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: page.page_title,
    });
    this.meta.updateTag({
      property: 'og:title',
      content: page.page_title,
    });
    this.meta.updateTag({
      property: 'og:description',
      content: page.meta_description,
    });
    this.meta.updateTag({
      property: 'og:locale',
      content: 'en',
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: '111 Minutes',
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    this.meta.updateTag({
      property: 'og:url',
      content: `https://111minutes.com/${pageName}`,
    });
    this.meta.updateTag({
      property: 'og:image',
      content: this.GetPathForImage(page.og_image.url),
    });
    this.meta.updateTag({
      property: 'og:image:width',
      content: page.og_image.width,
    });
    this.meta.updateTag({
      property: 'og:image:height',
      content: page.og_image.height,
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.GetPathForImage(page.twitter_image.url),
    });
    
    this.vm.Initialize(this.mapService.MapPage(page));
  }

  private ToSnakeCase(text: string) {
    var result = text.replace(/([A-Z])/g, ' $1');
    return result.split(' ').join('_').toLowerCase();
  }

  private GetPathForImage(path: string) {
    if (path.indexOf('http://') == 0 || path.indexOf('https://') == 0) {
      return path;
    } else {
      return `../../../../assets/Images/${path}`;
    }
  }
}
