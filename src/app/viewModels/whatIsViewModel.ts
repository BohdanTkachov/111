export class WhatIsViewModel {
  headerText: string;
  children: WhatIsItemViewModel[];

  constructor() {
    this.headerText = 'What is an offshore dedicated center?';
    this.children = [
      {
        description:
          'Working with our experienced in-house senior and middle specialists lets you develop a cutting-edge product and support it to add unique features anytime you need it. Involve our caring and committed offshore developers to your project to get expert assistance with tech tasks immediately.',
        title: 'Strong specialists<br> to solve your issue',
        uppercaseText:
          'We will build a strong software engineering team according to your request.<br> ',
        imageUri: '../../../../assets/Images/offShoreWhatIs1.png',
      },
      {
        description:
          'We educate new specialists, providing them with more than a year of software engineer training.<br> The most successful graduates sign up for contracts and keep working on our projects as interns for about 2 years, gaining diverse experience.',
        title: 'In-house academy<br>and internship',
        uppercaseText:
          'This lets us grow new professionals as well as reduce clients’ spending while providing the same quality of development process.',
        imageUri: '../../../../assets/Images/offShoreWhatIs2.png',
      },
    ];
  }
}

export class WhatIsItemViewModel {
  title: string;
  description: string;
  uppercaseText: string;
  imageUri: string;
}
