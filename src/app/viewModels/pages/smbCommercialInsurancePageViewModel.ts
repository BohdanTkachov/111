import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { MissionInfoWithTwoColumnViewModel } from '../missionInfoWithTwoColumnViewModel';
import { ProvideWithBlocksInfoViewModel } from '../provideWithBlocksInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';

export class SmbCommercialInsurancePageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  missionInfoWithTwoColumnViewModel: MissionInfoWithTwoColumnViewModel;
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel;
  provideWithBlocksInfoViewModel: ProvideWithBlocksInfoViewModel;
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel;
  contactusViewModel: ContactUsViewModel;
  constructor() {
    this.greetingWithTextViewModel = {
      header:
        'Drive Clients’ Loyalty With Custom <u style="text-decoration-color:#38BC64;">Insurance Software Development</u> Solutions',
      headerPreview:
        'Empower your company with innovative insurance software solutions',
      description:
        '111 Minutes provides software for insurance companies to organize workflow by standardizing and automating processes.<br><br> We develop cutting-edge technology for risk assessment to enhance customer experience and make your in-house management system more efficient.',
      buttonText: 'GET A QUOTE',
      link: '#',
    };
    this.missionInfoWithTwoColumnViewModel = {
      title: 'Our insurance software development services',
      children: [
        {
          title: 'Build from scratch',
          iconPath:
            '../../../../assets/Images/SmbCommercialInsurancePage/missionInfoWithTwoColumn1.png',
          firstTextBlockInnerHtml:
            'Implementing industry-tailored practices lets our <span style="color:#38BC64">software developers</span> create omnichannel solutions that help your team guide customers, offering a personalized experience.',
        },
        {
          title: 'Improve existing solutions',
          iconPath:
            '../../../../assets/Images/SmbCommercialInsurancePage/missionInfoWithTwoColumn2.png',
          firstTextBlockInnerHtml:
            'Entrust optimization of your <span style="color:#38BC64">operational efficiency</span> to a reliable vendor that knows how to digitalize customer support and improve clients’ loyalty.',
        },
      ],
    };
    this.shareDetailsInfoViewModel = {
      header:
        'Automate processes and streamline workflow with software solutions for the <span style="color: #38BC64;">insurance industry</span>.',
      descrption:
        'Develop long-term customer loyalty with apps and platforms that fully address your clients’ needs.',
      buttonText: 'Share project',
      linkAddress: '#',
    };
    this.provideWithBlocksInfoViewModel = {
      header:
        '<span style="color:#38BC64"> Insurance industry </span>software solutions we provide',
      imageUri:
        '../../../../assets/Images/SmbCommercialInsurancePage/ProvideWithBlocksInfoSMB.svg',
      content: [
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
      ],
    };
    this.whyDelegateInfoViewModel = {
      header:
        'Why entrust development of your insurance software solution to <span style="color:#38BC64">111 Minutes</span>',
      description:
        'Entrust your IT needs to our dedicated team and let us create insurance technology software to develop long-term customer loyalty.<br><br> 111 Minutes’ result-oriented vision helps companies attract new customers and gain markets.',
      Link: '#',
      btnName: 'BECOME A CLIENT',
      content: [
        {
          imageUrl:
            '../../../../assets/Images/WebDevelopmentPage/Exceptional.svg',
          description:
            'Our company provides software solutions for enterprise risk management that can take your service to the next level.<br><br> Delivering developments of excellent quality that introduce personalized approaches and innovation are our top priorities.',
          title: 'Exceptional quality',
        },
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo2.png',
          description:
            '111 Minutes provides a dedicated team that can take care of your project from idea to realization.<br><br> We develop new technologies based on a thorough analysis and pay special attention to your core business goals. This way, we ensure you generate superprofits.',
          title: 'Team that cares',
        },
        {
          imageUrl: '../../../../assets/Images/whyDelegateInfo4.png',
          description:
            'As an insurance software development company, we have the knowledge and skills to build profit-driving solutions that will help your company boost customer loyalty.<br><br> Streamline risk assessment and fraud detection to provide excellent services with the solutions based on our industry-tailored experience.',
          title: 'Extensive experience',
        },
        {
          imageUrl:
            '../../../../assets/Images/SmbCommercialInsurancePage/whyDelegateInfo3.png',
          description:
            'Our expert insurance software developers analyze data to build profit-driven solutions that let you standardize the workflow.<br><br> Automate processes for your staff to focus on strategic aspects of business development by launching cutting-edge insurance applications.',
          title: 'Innovative developments',
        },
      ],
    };
    this.contactusViewModel = {
      header: 'Contact us',
      title:
        'Implement complex solutions that will help you grow your business and stand out from the competition.',
      description:
        'Collaborate with 111 Minutes to deploy insurance technology software to boost customer satisfaction. Let us take care of your project!',
      link: '#',
    };
  }
}
