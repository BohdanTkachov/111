export class OurProjectsInfoViewModel {
  header!: string;
  background?: string;
  content!: OurProjectInfoViewModel[];

  constructor() {
    this.header = 'How our custom software development agency helps businesses';
    this.content = [
      {
        title: 'CyberKnife',
        client: 'One medical',
        employers: 200,
        description:
          'A cloud-based solution for storing the data of a large number of patients and integration with modern equipment',
        industry: 'Healthcare',
        link: 'https://cyberknife.com/',
        iconUrl: 'ourProjectsInfoLogo.svg',
        imageUrl: 'ourProjectsInfoPromo.png',
      },
      {
        title: 'Some case',
        client: 'One client',
        employers: 2000,
        description: 'A cloud-based solution for data fetching',
        industry: 'IT',
        link: 'https://meta.ua/uk/',
        iconUrl:
          'https://i0.wp.com/www.thisdaylive.com/wp-content/uploads/Meta-.png?w=3840&ssl=1',
        imageUrl: 'https://itc.ua/wp-content/uploads/2022/07/Meta.jpg',
      },
      {
        title: 'Cheburek',
        client: 'Aibek',
        employers: 1,
        description: 'A realy taste food',
        industry: 'Food',
        link: 'https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%B1%D1%83%D1%80%D0%B5%D0%BA',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1920/1920187.png',
        imageUrl:
          'https://cdn.lifehacker.ru/wp-content/uploads/2020/01/Kak-prigotovit-idealnye-domashnie-chebureki_1579377232.jpg',
      },
    ];
  }
}

export class OurProjectInfoViewModel {
  title!: string;
  iconUrl!: string;
  description!: string;
  client!: string;
  industry!: string;
  employers!: number;
  link!: string;
  imageUrl!: string;
}
