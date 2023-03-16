export class WhyDelegateInfoViewModel {
  header: string;
  description: string;
  Link: string;
  btnName: string;
  background?: string;
  content: Array<WhyDelegateInfoItemViewModel>;

  constructor() {
    this.header =
      'Why delegate your project to <span style="color:#38BC64">111 Minutes</span>';
    this.description =
      'We are proud of what our clients say about cooperation with 111 Minutes and the results they achieved with our custom software development company.';
    this.Link = '#';
    this.btnName = 'BECOME A CLIENT';
    this.content = [
      {
        imageUrl: 'whyDelegateInfoCustomDevelopment4.png',
        description:
          'Thanks to our software engineering internship, we provide the strongest specialists in the market. Involving only professionals with proven experience to projects allows us to develop cutting-edge software solutions for clients.',
        title: 'Strong experience',
      },
      {
        imageUrl: 'whyDelegateInfoCustomDevelopment2.png',
        description:
          '111 Minutes’ skillful team builds industry-tailored apps that help our clients engage their audiences and drive more sales. Innovative technologies we apply and a personalized approach to each project allow our offshore development center to deliver impressive results.',
        title: 'Customizable solutions',
      },
      {
        imageUrl: 'whyDelegateInfoCustomDevelopment1.png',
        description:
          'We know how to fix any issues immediately and without your effort, as our software engineering team stays in touch with a company on a long-term basis. Empowering our clients’ IT departments allows us to take their business to the next level quickly.',
        title: 'Patient Support',
      },
      {
        imageUrl: 'whyDelegateInfoCustomDevelopment3.png',
        description:
          'By collaborating with 111 Minutes’ dedicated software development teams, your company benefits from flawless mobile and web development. Apply emerging technologies and beat your competitors by providing revolutionary solutions.',
        title: 'Professional team',
      },
    ];
  }
}

export class WhyDelegateInfoItemViewModel {
  title: string;
  description: string;
  imageUrl: string;

  constructor(ImageUrl: string, Description: string, Title: string) {
    this.imageUrl = ImageUrl;
    this.description = Description;
    this.title = Title;
  }
}
