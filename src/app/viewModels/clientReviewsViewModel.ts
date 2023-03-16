export class ClientReviewsViewModel {
  header: string;
  background?: string;
  content: ClientReviewItemViewModel[];

  constructor() {
    this.header = 'Testimonials we are happy to share';
    this.content = [
      {
        clientCompany: 'COO – Itrezzo',
        clientName: 'Alex Pshenyanikov',
        reviewDescription:
          'We are proud of what our clients say about cooperation with 111 Minutes and the results they achieved with our custom software development company.',

        description:
          "'111 Minutes' quality of work, expertise, and willingness to adapt, distinguish them from other developers. <br> <br> They streamlined the app’s UX, made its code more efficient, and improved safety functions. After the app's launch, 111 provides the ongoing support needed for the app's platform to evolve.",
        clientImageUri: 'ClientReviewUser1.png',
        link: '#',
      },
      {
        clientCompany: 'COO – Amcon',
        clientName: 'Alex Loloshkin',
        reviewDescription: 'Nice company bla bla bla',

        description:
          'We are proud of what our clients say about cooperation with 111 Minutes and the results they achieved with our custom software development company.',
        clientImageUri: '',
        link: '#',
      },
      {
        clientCompany: 'COO – Itrezzo',
        clientName: 'Alex Pshenyanikov',
        reviewDescription:
          "'111 Minutes' quality of work, expertise, and willingness to adapt, distinguish them from other developers. <br> <br> They streamlined the app’s UX, made its code more efficient, and improved safety functions. After the app's launch, 111 provides the ongoing support needed for the app's platform to evolve.",

        description:
          'We are proud of what our clients say about cooperation with 111 Minutes and the results they achieved with our custom software development company.',
        clientImageUri: '',
        link: '#',
      },
    ];
  }
}

export class ClientReviewItemViewModel {
  reviewDescription: string;
  clientName: string;
  clientCompany: string;
  clientImageUri: string;
  description: string;
  link: string;
}
