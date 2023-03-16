export class ProvideWithBlocksInfoViewModel {
  header: string;
  imageUri: string;
  background?: string;
  content: ProvideWithBlocksInfoItemViewModel[];

  constructor() {
    this.header =
      '<span style="color:#38BC64"> Insurance industry </span> software solutions we provide';
    this.imageUri = 'ProvideWithBlocksInfoSMB.svg';
    this.content = [
      {
        title: 'Custom application development',
        description:
          '111 Minutes team are experts in building insurance applications that perform as game-changers in the market. <br> <br> Develop and deploy specific solutions with us to attract prospective customers and convert them into long-term clients.',
      },
      {
        title: 'Omnichannel service solutions',
        description:
          'You no longer need to worry about streamlining communication, as our dedicated team knows how to deal with this issue. <br> <br> Implement omnichannel solutions to keep staff up to date regardless of touchpoints and channels, letting them provide personalized experiences.',
      },
      {
        title: 'Customer success solutions',
        description:
          'Digitalize your services to automate dealing with support queries. <br> <br> Software solutions for the insurance industry let you cut costs on maintaining departments while providing a positive experience from every interaction.',
      },
      {
        title: 'Solution and architecture for external third-party providers',
        description:
          'Make your prospects’ journey smoother by simplifying it with a pre-designed architecture. <br> <br> 111 Minutes will help you build a workable structure to let your clients choose additional service providers when needed, this way increasing LTV and improving retention.',
      },
    ];
  }
}

export class ProvideWithBlocksInfoItemViewModel {
  title: string;
  description: string;
}
