export class PageDetailApiModel {
  id: number;
  title: string;
  page_title: string; // is empty for now
  meta_keywords: string;
  meta_description: string;
  blocks: Array<PageDetailBlockApiModel>;
  og_image: any;
  twitter_image: any;
}

export class PageDetailBlockApiModel {
  name: string;
  blockId: string;
  data: any;
}
