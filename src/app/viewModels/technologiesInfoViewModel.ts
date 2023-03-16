export class TechnologiesInfoViewModel {
  header!: string;
  background?: string;
  content!: TechnologiesInfoItemViewModel[];

  constructor() {
    this.header =
      'Technologies we apply to build <span style="color:#38BC64"> your robust solutions</span>';
    this.content = [
      {
        description:
          'At 111 Minutes software engineering company, we use this JavaScript environment to build scalable network applications that are user-friendly and speedy enough to engage and retain customers.',
        title: 'Node.js',
        imageUrl: 'technologiesNodeJS.svg',
        link: '/node_js_page'
      },
      {
        description:
          'We apply this open-source framework for cross-platform mobile app development to reduce time on coding while ensuring the same UI and business logic across all platforms.',
        title: 'Flutter',
        imageUrl: 'technologiesFlutter.svg',
        link: '/flutter_page'
      },
      {
        description:
          'Our software developers apply this UI software framework to develop applications for various devices. <br> <br> We create UI-focused native apps that provide excellent customer experiences.',
        title: 'React Native',
        imageUrl: 'technologiesReact.svg',
        link: '#'
      },
    ];
  }
}

export class TechnologiesInfoItemViewModel {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
