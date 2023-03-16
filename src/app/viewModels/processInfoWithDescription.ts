export class ProcessInfoWithDescriptionViewModel {
  title: string;
  stages: ProcessInfoStageViewModel[];
  description: string;

  constructor() {
    this.title = 'Our Process';
    this.stages = [
      {
        title: 'Research',
        stages: [],
      },
      {
        title: 'Design',
        stages: ['Sketches & wireframes', 'Cycle Counts', 'Locate Item'],
      },
      { title: 'Presentation', stages: [] },
    ];
    this.description =
      'As users were expected to apply CheckPoint as a working tool during the whole day, the 111 Minutes team conducted research on what fonts and colors <span style="color: #38BC64;">wouldn’t overload</span> their eyes. <br><br> Making customers’ work comfortable was our top priority. Because of this, our experts designed letters, numerals and charts in a way that doesn’t bother users who interact with the app for hours.';
  }
}

export class ProcessInfoStageViewModel {
  title: string;
  stages: string[];
}
