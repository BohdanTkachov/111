import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { MissionInfoWithTwoColumnViewModel } from '../missionInfoWithTwoColumnViewModel';
import { ProvideWithBlocksInfoViewModel } from '../provideWithBlocksInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';

export class RealEstatePageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel =
    new GreetingWithTextViewModel();
  missionInfoWithTwoColumnViewModel: MissionInfoWithTwoColumnViewModel =
    new MissionInfoWithTwoColumnViewModel();
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel =
    new ShareDetailsInfoViewModel();
  provideWithBlocksInfoViewModel: ProvideWithBlocksInfoViewModel =
    new ProvideWithBlocksInfoViewModel();
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel =
    new WhyDelegateInfoViewModel();
  contactusViewModel: ContactUsViewModel = new ContactUsViewModel();

  constructor() {
    this.setUpGreetings();
    this.setUpMissionInfo();
    this.setUpShareDetails();
    this.setUpProvide();
    this.setUpWhyDelegate();
    this.setUpContactUs();
  }
  private setUpGreetings() {
    const e = this.greetingWithTextViewModel;
    e.header =
      'Generate Revenue and Increase Customer Experience With <u style="text-decoration-color:#38BC64;">Real Estate Software Solutions</u>';
    e.headerPreview =
      'Take advantage of digital transformation to stay ahead of the competition';
    e.description =
      '111 Minutes provides cutting-edge real estate app and software development services to help you ensure long-term customer loyalty.<br><br>Attract and retain clients forever by deploying innovative user-oriented solutions that address their current needs.';
  }
  private setUpMissionInfo() {
    const e = this.missionInfoWithTwoColumnViewModel;
    e.title = 'Our real estate software development services';
    e.children = [
      {
        title: 'Apps that improve customer satisfaction',
        iconPath: 'missionInfoWithTwoColumn3.png',
        firstTextBlockInnerHtml:
          'As a <span style="color:#38BC64">real estate software company</span>, we provide custom software development services to build apps that grow your clients loyalty. Improve the remote work experience with flawless interactive workspaces, or make the people & place search process intuitively understandable. ',
      },
      {
        title: 'Platform services to drive more income',
        iconPath: 'missionInfoWithTwoColumn4.png',
        firstTextBlockInnerHtml:
          'We <span style="color:#38BC64">educate new specialists</span>, providing them with more than a year of software engineer training. The most successful graduates sign up for contracts and keep working on our projects as interns for about 2 years, gaining diverse experience.',
      },
    ];
  }
  private setUpShareDetails() {
    const e = this.shareDetailsInfoViewModel;

    e.header =
      'EHire our dedicated team to drive more revenue by implementing <span style="color:#38BC64">cutting-edge</span> solutions. ';
    e.descrption =
      'Our real estate software company provides custom services perfectly tailored to your business. Let’s discuss your project!';
    e.buttonText = 'Share details';
  }

  private setUpProvide() {
    const e = this.provideWithBlocksInfoViewModel;

    e.header =
      'Our software solutions for <span style="color:#38BC64">real estate</span>';
    e.imageUri = 'RealEstate.svg';
    e.content = [
      {
        title: 'Place and People Finder',
        description:
          'Let your clients find the right places to rent or buy in no time. Make these processes intuitively understandable to retain more users and make them fall in love with your company.<br><br> Such commercial real estate software solutions will help you stand out from the crowd of your competitors.',
      },
      {
        title: 'Digital Concierge',
        description:
          'Provide your guests with instant assistance via mobile apps no matter where they are. Simplify consumers’ daily routines and build a reputation of the most user-friendly company in the real estate market. <br><br> What’s more, this way you can save costs on customer support and provide clients with positive experiences.',
      },
      {
        title: 'Interactive workspace',
        description:
          'Explore new possibilities for working together and optimize remote collaboration with software solutions for real estate. <br><br>111 Minutes can provide your company with digital business efficient spaces that have a high usability level to improve the productivity of your expert team.',
      },
      {
        title: 'Location-based services',
        description:
          'Implement real estate software development solutions based on geolocation to help customers discover necessary information quickly and smoothly, no matter what the context is. <br><br>Location-based platform services let you reduce costs and automate interaction processes to reach your business goals faster.',
      },
      {
        title: 'Communication platform',
        description:
          'Streamline internal and external messaging to optimize communication across all channels. <br><br>By applying this mobile app development service, you’ll be able to reduce costs on customer support and eliminate the need to maintain huge departments, thus spending your budget more efficiently.',
      },
      {
        title: 'Digital Assistance',
        description:
          'Provide users with instant answers and manage their queries immediately with real estate app development solutions. <br><br>You can apply virtual bots to assist customers without huge spending on contact centers and offer human-like service to increase the level of satisfaction.',
      },
    ];
  }
  private setUpWhyDelegate() {
    const e = this.whyDelegateInfoViewModel;

    e.header = 'Why delegate your project to 111 Minutes';
    e.description =
      'We make software solutions for real estate efficient and affordable at once, allowing businesses to reach a new level of customer support. <br><br>Get in touch!';
    e.content = [
      {
        imageUrl: 'whyDelegateInfo1.png',
        description:
          'Our real estate software company offers only cutting-edge solutions to ensure flawless work and impressive results for clients. <br><br>111 Minutes experts stay constantly aware of the latest trends in the field to help our customers outperform their competitors.',
        title: 'Innovative Solutions',
      },
      {
        imageUrl: 'whyDelegateInfo2.png',
        description:
          'Staying in touch with companies on a long-term basis lets us offer the most suitable solutions. <br><br>We provide software and mobile applications development services that our experts will keep track of and optimize even for a long time after their launch',
        title: 'Dedicated Support',
      },
      {
        imageUrl: 'whyDelegateInfo3.png',
        description:
          '111 Minutes professionals are always ready to answer your questions and provide custom software development solutions of any complexity. <br><br>We know how to improve your performance, attract more clients and drive revenue.',
        title: 'Professional Team',
      },
      {
        imageUrl: 'whyDelegateInfo4.png',
        description:
          'We are a trustworthy, dedicated vendor that knows how to free up your company from IT tasks. <br><br>Our real estate software developers have collaborated with various projects in the niche and definitely know what aspects are essential to pay attention to.',
        title: 'Extensive Experience',
      },
    ];
  }
  private setUpContactUs() {
    const e = this.contactusViewModel;

    e.header = 'Contact us';
    e.title =
      'Cut costs on maintaining departments while generating more income.';
    e.description =
      'Our profit-driving solutions can free your staff from routine tasks and improve your customers’ experience. Let us take care of your project!';
    e.link = '#';
  }
  // <span style="color:#38BC64"></span>
  // <u style="text-decoration-color:#38BC64;"></u>
}
