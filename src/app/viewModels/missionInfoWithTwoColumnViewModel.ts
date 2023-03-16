export class MissionInfoWithTwoColumnViewModel {
  title!: string;
  background?: string;
  children!: MissionInfoWithTwoColumnItemViewModel[];

  constructor() {
    this.title = 'What can we do for your business?';
    this.children = [
      {
        title: 'Custom software development services',
        iconPath: 'missionInfoWithTwoColumn1.png',
        firstTextBlockInnerHtml:
          'We build <span style="color:#38BC64"> highload software solutions </span> with complex architecture, addressing your current business needs.',
      },
      {
        title: 'Offshore dedicated center',
        iconPath: 'missionInfoWithTwoColumn2.png',
        firstTextBlockInnerHtml:
          'We flawlessly <span style="color:#38BC64"> build IT departments </span> and manage their structures, providing right specialists and preventing staff turnover. ',
      },
    ];
  }
}

export class MissionInfoWithTwoColumnItemViewModel {
  title!: string;
  iconPath!: string;
  firstTextBlockInnerHtml!: string;
}
