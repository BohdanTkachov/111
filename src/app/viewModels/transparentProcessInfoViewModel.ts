export class TransparentProcessInfoViewModel {
  public header: string;
  public imageUrl: string;
  background?: string;
  public content: Array<TransparentProcessInfoItemViewModel>;

  constructor() {
    this.header =
      'We prefer a thorough <span style="color:#38BC64">approach and transparent</span> software development methodology';
    this.imageUrl = '../../../../assets/Images/transparentProcessInfo.svg';
    this.content = [
      new TransparentProcessInfoItemViewModel(
        '[01]',
        'We start by finding out more about your business and the product you want to develop.<br><br>By learning your needs and problems,<br>we get a better understanding of your envision<br>of the perfect solution.'
      ),
      new TransparentProcessInfoItemViewModel(
        '[02]',
        'We build a team tailored to your needs, making sure they have in-depth knowledge of the required technologies. This way, you get an IT department that can handle all the technical tasks<br>for you and support your project at all stages.'
      ),
      new TransparentProcessInfoItemViewModel(
        '[03]',
        'Then, we get to work on building your application development solution.<br><br>We divide the project into sprints and update you about the progress as soon as we have completed each of them.'
      ),
      new TransparentProcessInfoItemViewModel(
        '[04]',
        "Once your solution is ready, we'll test it and make sure it complies with the selected app market rules and policies.<br><br>Then, we invite you to press<br>the button and launch it."
      ),
      new TransparentProcessInfoItemViewModel(
        '[05]',
        "We don't stop collaborating after launching your app.<br>We continue keeping it functional by making minor improvements<br>and adding new features to meet the needs of your customers."
      ),
    ];
  }
}

export class TransparentProcessInfoItemViewModel {
  public index: string;
  public description: string;

  constructor(_index: string, _description: string) {
    this.index = _index;
    this.description = _description;
  }
}
