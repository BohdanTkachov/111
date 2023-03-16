export class IndustriesInfoViewModel {
  header!: string;
  link!: string;
  btnName!: string;
  background?: string;
  content!: Array<IndustriesInfoItemViewModel>;

  constructor() {
    (this.btnName = 'INDUSTRIES'),
      (this.header =
        'What <span style="color: #38BC64;"> industries</span> our software <br> development firm excels at');
    this.link = '#';
    this.content = [
      {
        title: 'Digital Real Estate',
        firstParagraph:
          'Stay ahead of the competition by deploying convenient digital solutions that improve and simplify customers’ daily routine, ensuring a high level of satisfaction. <br> <br> We build location-based apps and digital assistance platforms that reduce costs on maintaining support departments and help you generate revenue.',
        link: '#',
      },
      {
        title: 'Transportation & Logistics',
        firstParagraph:
          'Optimize core processes such as route planning to reduce costs, eliminate human errors and prevent delays. Our custom software development company builds apps from scratch and helps with business processes automation. <br> <br> We create solutions that cut spending, prevent risks and make resource management',
        link: '#',
      },
      {
        title: 'Finances',
        firstParagraph:
          'Cut costs on security by eliminating on-website or in-app fraudulent activity and verifying incoming applications. Expand the services you offer to financial clients with convenient CLM solutions and other useful apps. <br> <br> Our engineers provide custom software development services for both digital and commercial banking.',
        link: '#',
      },
      {
        title: 'Healthcare',
        firstParagraph:
          "Increase your patients' engagement rate by educating them and providing helpful lifestyle mobile apps. <br><br> Our development team knows how to automate your contact centers painlessly and smoothly, as well as decrease the workload of offline clinics and serve more patients remotely with telehealth solutions.",
        link: '#',
      },
      {
        title: 'SMB Commercial Insurance',
        firstParagraph:
          'Digitalize your customer support and deploy omnichannel service solutions to provide clients and prospects with a personalized experience across all the touchpoints. <br> <br> We help companies increase the level of customer satisfaction and attract new leads by building apps from scratch and improving existing solutions.',
        link: '#',
      },
    ];
  }
}

export class IndustriesInfoItemViewModel {
  title!: string;
  firstParagraph!: string;
  link!: string;
}
