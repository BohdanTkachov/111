export class AboutUsInfoViewModel {
  header: string;
  title: string;
  description: string;
  imageUrl: string;
  iconUrl: string;
  background?: string;
  constructor() {
    this.header = 'About  us';
    this.title =
      '111 Minutes is your dedicated custom software development company <br> <br> with its <span style="color:#38BC64"> own academy </span> and in-house internship.';
    this.description =
      'Our specialists can free you from IT tasks and flawlessly organize the technical workflow. <span style="color:#38BC64"> With over 17 years of experience </span> in the industry, we develop innovative digital solutions for brands all over the world thanks to our extensive knowledge of Data Analytics, Data Science and prominent technologies <br> <br> Supporting businesses on a long-term basis lets us dive deep into their problems and needs to offer unique BPA solutions that benefit both brands and their customers. <br> <br> When collaborating with our software development company, you enrich your business with industry-tailored tech expertise, capable specialists and a 24/7 dedicated development center that cares.';
    this.iconUrl = 'aboutUsInfoIcon.svg';
    this.imageUrl = 'aboutUsInfoImage.png';
  }
}
