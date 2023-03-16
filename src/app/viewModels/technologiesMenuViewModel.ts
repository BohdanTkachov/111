export class TechnologiesMenuViewModel {
  header: string;
  subHeader: string;
  links: TechnologiesMenuLink[];
  background?: string;
  blocks: TechologiesMenuBlock[];

  constructor() {
    this.setUpHeaders();
    this.setUpLinks();
    this.setUpBlocks();
  }
  private setUpHeaders() {
    this.header = 'Technologies';
    this.subHeader = "<span style='color: #38bc64'>111 Minutes</span>";
  }
  private setUpLinks() {
    this.links = [
      { text: 'Node.js', link: '' },
      { text: 'Kotlin', link: '' },
      { text: 'Flutter', link: '' },
      { text: 'React native', link: '' },
    ];
  }
  private setUpBlocks() {
    this.blocks = [
      {
        header: 'React native',
        description:
          'We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
        imgPath: 'reactNative.svg',
        link: '',
      },
      {
        header: 'Flutter',
        description:
          'With this technology, 111 Minutes ensures that our clients receive a robust cross-platform app that aligns with their business goals and timeline.',
        imgPath: 'flutter.svg',
        link: '',
      },
      {
        header: 'Node.js',
        description:
          'We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
        imgPath: 'nodeJs.svg',
        link: '',
      },
      {
        header: 'Kotlin',
        description:
          'We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
        imgPath: 'kotlin.png',
        link: '',
      },
    ];
  }
}
export class TechnologiesMenuLink {
  text: string;
  link: string;
}
export class TechologiesMenuBlock {
  header: string;
  description: string;
  imgPath: string;
  link: string;
}
