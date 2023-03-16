export class ProcessInfoViewModel {
  title: string;
  stages: ProcessInfoStageViewModel[];

  constructor() {
    this.title = 'Our Process';
    this.stages = [
      {
        title: 'Design',
        stages: ['Sketches', 'Wireframes', 'Color and typography', 'Icons'],
      },
      {
        title: 'Building MVP',
        stages: [
          'Discover places',
          'Navigation',
          'Recommender system',
          'Trip management',
          'Geolocations',
        ],
      },
      { title: 'Release', stages: [] },
    ];
  }
}

export class ProcessInfoStageViewModel {
  title: string;
  stages: string[];
}
