export class BenefitsInfoViewModel {
  Header: string;
  Title: string;
  background?: string;
  Content: Array<BenefitsInfoItemViewModel>;

  constructor() {
    this.Header =
      'How can businesses benefit from relying on an offshore IT department?';
    this.Title = 'Our benefits';
    this.Content = [
      {
        Description:
          'Take advantage of collaborating with specialists who have grown in 111 Minutes academy under the thorough control of our leads.<br><br>This approach to team creation lets you reduce spending by about 30% while keeping the same level of service quality.',
        Title: 'Reduce Costs on your IT Department',
      },
      {
        Description:
          'We sign up long-term contracts with our interns, which allows us to prevent employee turnover on the projects.<br><br>So, our clients can be sure that the developers who are aware of all the business peculiarities won’t leave unexpectedly.',
        Title: 'Stop Staff Turnover',
      },
      {
        Description:
          'You no longer need to put effort into staff management, as 111 Minutes will do everything for you.<br><br>We solve all bureaucratic issues as well as create the most appropriate team for your project, while you reach business growth and let staff focus on what matters most.',
        Title: 'Free Staff from Bureaucracy and Recruiting',
      },
    ];
  }
}

export class BenefitsInfoItemViewModel {
  Description: string;
  Title: string;
}
