export class TypographyInfoViewModel {
  header: string;
  imageUrl: string;
  subHeader: string;
  description: string[];
  content: TypographyInfoItemViewModel[];

  constructor() {
    this.header = 'Color <br>& typography';
    this.imageUrl = 'typography1.svg';
    this.subHeader = 'Plus Jakatra Sans 10 — 48 px';
    this.description = [
      'Having conducted a thorough analysis of competitors’ products as well as brainstormed ideas about the peculiarities of the industry, our designers created a <span style="color: #38BC64;">color scheme</span> inspired by nature.',
      'The visual key of the product was developed keeping in mind the Spotr logo. Chosen colors create a <span style="color: #38BC64;">unique appearance</span> and provide a positive experience of interacting with the app.',
      'The next step was to <span style="color: #38BC64;">identify fonts</span> and styles that perfectly match the concept of the app, which is friendly, fun and easy to use. 111 Minutes designers studied plenty of variants and found the ones that precisely suited the idea of the application and provided users with strong associations.',
    ];
    this.content = [
      {
        background: '#F5366D',
        text: 'Purple',
        color: '#FFFFFF',
      },
      {
        background: '#0C1013',
        text: 'Deep dark',
        color: '#FFFFFF',
      },
      {
        background: '#EAEFF5',
        text: 'Snow',
        color: '#0C1013',
      },
    ];
  }
}
export class TypographyInfoItemViewModel {
  background: string;
  text: string;
  color: string;
}
