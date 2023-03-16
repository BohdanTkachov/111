export class FooterViewModel {
  contacts: Contacts;
  chapters: Chapter[];
  socialNetworks: SocialNetworks[];

  constructor() {
    this.contacts = {
      description: 'Glasgow, Glasgow<br>City, United Kingdom<br>—<br>',
      phone: '+49 221 670 245 0',
      mail: 'hello@111minutes.com',
      btnName: 'Contact us',
    };
    this.socialNetworks = [
      {
        title: 'Clutch',
        iconPath: '../../../../assets/Images/Clutch.svg',
        link: 'https://clutch.co/profile/111-minutes#summary',
      },
      {
        title: 'Facebook',
        iconPath: '../../../../assets/Images/Facebook.svg',
        link: 'https://www.facebook.com/111minutes/',
      },
      {
        title: 'Linkedin',
        iconPath: '../../../../assets/Images/Linkedin.svg',
        link: 'https://www.linkedin.com/company/111minutes/',
      },
    ];
    this.chapters = [
      {
        title: 'Services',

        chapterItem: [
          {
            link: '/custom_development_page',
            title: 'Custom development',
          },
          {
            link: '/offshore_dedicated_page',
            title: 'Offshore dedicated center',
          },
        ],
      },
      {
        title: 'Solutions',
        chapterItem: [
          {
            link: '/web_development_page',
            title: 'Web solutions',
          },
          {
            link: '#',
            title: 'Mobile',
          },
          {
            link: '/cloud_development_page',
            title: 'Cloud',
          },
        ],
      },
      {
        title: 'Technologies',
        chapterItem: [
          {
            link: '/node_js_page',
            title: 'Node.js',
          },
          {
            link: '#',
            title: 'React Native',
          },
          {
            link: '#',
            title: 'Kotlin',
          },
          {
            link: '/flutter_page',
            title: 'Flutter',
          },
        ],
      },
      {
        title: 'Industries',
        chapterItem: [
          {
            link: '/real_estate_page',
            title: 'Digital real estate and CRE',
          },
          {
            link: '/smb_commercial_insurance_page',
            title: 'Commercial insurance',
          },
          {
            link: '#',
            title: 'Finance',
          },
          {
            link: '#',
            title: 'Transportation & logistic',
          },
          {
            link: '/helthcare_page',
            title: 'Healthcare',
          },
        ],
      },
      {
        title: 'Blog',
        chapterItem: [
          {
            link: '#',
            title: 'Article name #1',
          },
          {
            link: '#',
            title: 'Article name #2',
          },
          {
            link: '#',
            title: 'Article name #3',
          },
          {
            link: '#',
            title: 'Article name #4',
          },
        ],
      },
    ];
  }

  Initialize(vm: FooterViewModel){
    this.contacts = vm.contacts;
    this.chapters = vm.chapters;
    this.socialNetworks = vm.socialNetworks;
  }
}

export class Chapter {
  title: string;
  chapterItem: ChapterItem[];
  constructor() {}
}

export class ChapterItem {
  link: string;
  title: string;
  constructor() {}
}

export class SocialNetworks {
  title: string;
  iconPath: string;
  link: string;
  constructor() {}
}

export class Contacts {
  mail: string;
  phone: string;
  description: string;
  btnName: string;
  constructor() {}
}
