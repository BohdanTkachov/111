export class ContactUsViewModel {
  header: string;
  title: string;
  description: string;
  background?: string;
  link: string;

  constructor() {
    this.header = 'Contact us';
    this.title =
      'Stay ahead of the competition by collaborating with our software and application development agency.';
    this.description =
      'We create and deploy smart solutions that serve both businesses and their clients. Let us take care of your project!';
    this.link = '#';
  }
}
