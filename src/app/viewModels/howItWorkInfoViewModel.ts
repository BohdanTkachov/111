export class HowItWorkInfoViewModel {
  header: string;
  link: string;
  background?: string;
  content: Array<HowItWorkInfoItemViewModel>;

  constructor() {
    this.header =
      "<p>How does it work? <span style='color: #38BC64;'>Our Workflow</span></p>";

    this.content = new Array<HowItWorkInfoItemViewModel>();

    let howItWorkInfoItem1 = new HowItWorkInfoItemViewModel();
    howItWorkInfoItem1.number = '01';
    howItWorkInfoItem1.title = 'Discovery';
    howItWorkInfoItem1.description =
      'Our dedicated offshore development center discovers the peculiarities of your business and defines suitable solutions. We consider your requirements and take into account previous projects.';

    let howItWorkInfoItem2 = new HowItWorkInfoItemViewModel();
    howItWorkInfoItem2.number = '02';
    howItWorkInfoItem2.title = 'Team';
    howItWorkInfoItem2.description =
      '111 Minutes project managers select senior and middle specialists who have the most relevant experience for long-term support to ensure that all issues will be resolved immediately.';

    let howItWorkInfoItem3 = new HowItWorkInfoItemViewModel();
    howItWorkInfoItem3.number = '03';
    howItWorkInfoItem3.title = 'Outstaff department';
    howItWorkInfoItem3.description =
      'We become your dedicated outstaff department and educate interns from our academy for software engineering to fully involve them into your project one day. Our seniors and middles support and mentor them, ensuring everything works well.';

    let howItWorkInfoItem4 = new HowItWorkInfoItemViewModel();
    howItWorkInfoItem4.number = '04';
    howItWorkInfoItem4.title = 'Employement';
    howItWorkInfoItem4.description =
      'After a year of software engineer internship, we add the most successful interns as employees to your project. They still get support from more experienced professionals, while you benefit from custom software solutions and save costs.';

    this.content.push(howItWorkInfoItem1);
    this.content.push(howItWorkInfoItem2);
    this.content.push(howItWorkInfoItem3);
    this.content.push(howItWorkInfoItem4);
  }
}

export class HowItWorkInfoItemViewModel {
  number: string;
  title: string;
  description: string;
}
