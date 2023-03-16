export class ProvideInfoViewModel {
  header: string;
  background?: string;
  content: Array<ProvideInfoItemViewModel>;

  constructor() {
    this.header =
      "What custom software development services? <span style='color: #38bc64'> do we provide</span>";

    this.content = new Array<ProvideInfoItemViewModel>();

    let prodiveInfoItem1 = new ProvideInfoItemViewModel();
    prodiveInfoItem1.imageUrl = 'provideInfoCloud.svg';
    prodiveInfoItem1.title = 'Cloud computing services';
    prodiveInfoItem1.description =
      'Our custom software developers build user-oriented infrastructures and platforms that simplify staff routines and let you provide expanded services to clients wherever they are.';

    let prodiveInfoItem2 = new ProvideInfoItemViewModel();
    prodiveInfoItem2.imageUrl = 'provideInfoCrossPlatform.svg';
    prodiveInfoItem2.title = 'Cross-platform development';
    prodiveInfoItem2.description =
      'Build software that works accurately and efficiently across all devices. Our capable engineers work thoroughly at every stage of a development lifecycle to make user interactions as smooth as possible.';

    let prodiveInfoItem3 = new ProvideInfoItemViewModel();
    prodiveInfoItem3.imageUrl = 'provideInfoDigital.svg';
    prodiveInfoItem3.title = 'Digital transformation';
    prodiveInfoItem3.description =
      "Digitalize your processes to simplify employees' work and increase productivity, letting them focus on what matters most. Our custom application development company will help you deploy the right solutions.";

    let prodiveInfoItem4 = new ProvideInfoItemViewModel();
    prodiveInfoItem4.imageUrl = 'provideInfoBra.svg';
    prodiveInfoItem4.title = 'BPA solutions';
    prodiveInfoItem4.description =
      'Reduce costs on maintaining huge departments and make your workflow smoother with business automation solutions. 111 Minutes experts will let you focus on business growth, while we solve all technical issues.';

    let prodiveInfoItem5 = new ProvideInfoItemViewModel();
    prodiveInfoItem5.imageUrl = 'provideInfoDataAnalytics.svg';
    prodiveInfoItem5.title = 'Data analytics';
    prodiveInfoItem5.description =
      'Streamline business operations and cut costs by implementing architectures and smart dashboards that give a comprehensive overview and lets you make decisions based on accurate business data.';

    this.content.push(prodiveInfoItem1);
    this.content.push(prodiveInfoItem2);
    this.content.push(prodiveInfoItem3);
    this.content.push(prodiveInfoItem4);
    this.content.push(prodiveInfoItem5);
  }
}

export class ProvideInfoItemViewModel {
  imageUrl: string;
  title: string;
  description: string;
}
