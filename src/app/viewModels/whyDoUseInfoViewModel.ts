export class WhyDoUseInfoViewModel {
  header: string;
  content: Array<WhyDoUseInfoItemViewModel>;
  background?: string;
  acrossModel: WhyDoUseInfoAcrossModel;

  constructor() {
    this.header = 'Why do we use Flutter for your project?';
    this.content = new Array<WhyDoUseInfoItemViewModel>();

    let item1 = new WhyDoUseInfoItemViewModel();
    item1.title = 'Native App Performance';
    item1.description =
      '<p>We know how important app performance is to a good UX.</p> <p>With Flutter app development, we build native-like solutions, as this framework makes it possible to create cross-platform apps directly in machine code — eliminating performance bugs.</p>';
    this.content.push(item1);

    let item2 = new WhyDoUseInfoItemViewModel();
    item2.title = 'Fast Time-to-Market';
    item2.description =
      '<p>We offer Flutter app development services that help businesses streamline and accelerate the entire process.</p><p>The framework allows us to speed it up by 50% using a free open-source library of powerful tools. With Flutter app development, we ensure faster QA and time-to-market.</p>';
    this.content.push(item2);

    let item3 = new WhyDoUseInfoItemViewModel();
    item3.title = 'Best Value For Money';
    item3.description =
      '<p>The framework makes it possible to create robust solutions on multiple platforms at the same time, shorten app development time and offer a vast collection of free toolkits.</p><p>All this helps optimize costs while ensuring the high quality of the finished Flutter apps.</p>';
    this.content.push(item3);

    let item4 = new WhyDoUseInfoItemViewModel();
    item4.title = 'Engaging Designs';
    item4.description =
      '<p>Our Flutter mobile app development services ensure that the UI of your solution will be user-friendly and distinctive.</p> <p>Thanks to fast and extensible built-in widgets, our team of Flutter app developers creates aesthetic designs that look the same for both iOS and Android applications.</p>';
    this.content.push(item4);

    this.acrossModel = new WhyDoUseInfoAcrossModel();
    this.acrossModel.leftText = 'Speed';
    this.acrossModel.rightText = 'Value';
    this.acrossModel.topText = 'Perfomance';
    this.acrossModel.bottomText = 'Time';
  }
}

export class WhyDoUseInfoItemViewModel {
  title: string;
  description: string;
}

export class WhyDoUseInfoAcrossModel {
  leftText: string;
  topText: string;
  rightText: string;
  bottomText: string;
}
