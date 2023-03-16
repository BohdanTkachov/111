export class HeaderViewModel {
  selections: HeaderSelectionViewModel[];
  footerContent: FooterMobileHeaderViewModel;

  constructor() {
    this.selections = [
      {
        title: 'Services',
        content: [
          {
            title: 'Custom development services',
            description:
              'We build highload software solutions with complex architecture, addressing your current business needs.',
            link: '/custom_development_page',
            imageUri: 'missionInfoWithTwoColumn1.png',
          },
          {
            title: 'Offshore dedicated team',
            description:
              'We flawlessly build IT departments and manage their structures, providing right specialists.',
            link: '/offshore_dedicated_page',
            imageUri: 'missionInfoWithTwoColumn2.png',
          },
        ],
      },
      {
        title: 'Industries',
        content: [
          {
            title: 'Finance',
            description:
              'We provide cutting-edge real estate app and software development services to help you ensure long-term customer loyalty. ',
            imageUri: 'Finance.svg',
            link: '#',
          },
          {
            title: 'Digital real estate',
            description:
              'We provide cutting-edge real estate app and software development services to help you ensure long-term customer loyalty.',
            imageUri: 'Digital.svg',
            link: '/real_estate_page',
          },
          {
            title: 'Healtcare',
            description:
              'Build custom healthcare software development solutions with us to deliver exceptional medical services to patients.',
            imageUri: 'Healthcare.svg',
            link: '/helthcare_page',
          },
          {
            title: 'Transportation & logistics',
            description:
              'Build custom healthcare software development solutions with us to deliver exceptional medical services to patients. ',
            imageUri: 'Transportation.svg',
            link: '#',
          },
          {
            title: 'Commercial insurance',
            description:
              'We provide software for insurance companies to organize workflow by standardizing and automating processes.',
            imageUri: 'Insurance.svg',
            link: '/smb_commercial_insurance_page ',
          },
        ],
      },
      {
        title: 'Solutions',
        content: [
          {
            title: 'Web solutions',
            description:
              'Empower your business with apps that reduce costs on maintaining departments. ',
            link: '/web_development_page',
            imageUri: '../../../../assets/Images/solutionsHeader1.png',
          },
          {
            title: 'Mobile',
            description:
              'Deploy industry-tailored web apps that engage clients and help you offer expanded services.',
            link: '#',
            imageUri: '../../../../assets/Images/solutionsHeader3.png',
          },
          {
            title: 'Cloud Solution',
            description:
              'Help your customers safely manage and migrate their data to powerful cloud-based software.',
            link: '/cloud_development_page ',
            imageUri: '../../../../assets/Images/solutionsHeader2.png',
          },
        ],
      },
      {
        title: 'Case studies',
        content: [
          {
            title: 'Spotr',
            description:
              'Spotr is an app that helps travelers choose places to go in the area, including museums, restaurants and nightclubs.',
            industries: [
              'Concept Development',
              'Visual Design',
              'UX & UI Design',
              'Interaction Design',
            ],
            imageUri: 'Spotr.png',
            link: '#',
          },
          {
            title: 'Checkpoint',
            description:
              'CheckPoint is an app that helps workers find items in a warehouse, and take stock by using special filters.',
            industries: [
              'Consulting',
              'Product Strategy',
              'UX & UI Design',
              'iOS Development',
              'Product Vision',
              'Visual Design',
              'Interaction Design',
              'Identity ',
            ],
            imageUri: 'Checkpoint.png',
            link: '#',
          },
        ],
      },
      {
        title: 'Technologies',
        content: [
          {
            title: 'React native',
            description:
              'We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
            imageUri: 'reactNative.svg',
            link: '#',
          },
          {
            title: 'Flutter',
            description:
              'With this technology, 111 Minutes ensures that our clients receive a robust cross-platform app that aligns with their business goals and timeline.',
            imageUri: 'flutter.svg',
            link: '/flutter_page',
          },
          {
            title: 'Node.js',
            description:
              'We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
            imageUri: 'nodeJs.svg',
            link: '/node_js_page',
          },
          {
            title: 'Kotlin',
            description:
              'We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
            imageUri: 'kotlin.png',
            link: '#',
          },
        ],
      },
      {
        title: 'Blog',
        content: [
          {
            title: 'Choose tools for your next application',
            description: '',
            link: '#',
            imageUri: '../../../../assets/Images/blogHeader1.png',
          },
          {
            title: 'IoT, Drones and why it’s important',
            description: '',
            link: '#',
            imageUri: '../../../../assets/Images/blogHeader2.png',
          },
          {
            title: 'IoT, Drones and why it’s important ',
            description: '',
            link: '#',
            imageUri: '../../../../assets/Images/blogHeader3.png',
          },
          {
            title: 'IoT, Drones and why it’s important',
            description: '',
            link: '#',
            imageUri: '../../../../assets/Images/blogHeader4.png',
          },
        ],
      },
    ];

    this.footerContent = {
      city: 'Glasgow, Glasgow <br> City, United Kingdom',
      email: 'hello@111minutes.com',
      phone: '+49 221 670 245 0',
      socials: [
        {
          name: 'Facebook',
          imageUri: 'Facebook.svg',
          link: 'https://www.facebook.com/111minutes/',
        },
        {
          name: 'Linkedin',
          imageUri: 'Linkedin.svg',
          link: 'https://www.linkedin.com/company/111minutes/',
        },
        {
          name: 'Clutch',
          imageUri: 'Clutch.svg',
          link: 'https://clutch.co/profile/111-minutes#summary',
        },
      ],
    };
  }

  Initialize(vm: HeaderViewModel) {
    this.selections = vm.selections;
    this.footerContent = vm.footerContent;
  }
}

export class HeaderSelectionViewModel {
  title: string;
  content: SelectionContentItemViewModel[];
}

export class FooterMobileHeaderViewModel {
  city: string;
  phone: string;
  email: string;
  socials: SocialViewModel[];
}

export class SocialViewModel {
  imageUri: string;
  name: string;
  link: string;
}

export class SelectionContentItemViewModel {
  link: string;
  title: string;
  description: string;
  imageUri: string;
  industries?: string[];
}
