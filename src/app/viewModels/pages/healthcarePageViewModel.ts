import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { MissionInfoWithTwoColumnViewModel } from '../missionInfoWithTwoColumnViewModel';
import { ProvideWithBlocksInfoViewModel } from '../provideWithBlocksInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';

export class HealthcarePageViewModel {
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
    this.greetingWithTextViewModel = {
      header:
        'High-Quality Software Development <u style="text-decoration-color:#38BC64;">for Healthcare</u> to Help Your Brand Thrive',
      headerPreview:
        'Troubleshoot your patients’ issues with cutting-edge healthcare software solutions',
      description:
        'Build custom healthcare software development solutions with 111 Minutes to deliver exceptional medical services to patients. <br><br>If you want to create a highly effective and secure application that corresponds to HIPAA software compliance and other privacy regulations, 111 Minutes possesses the required proficiency to craft even the most demanding solutions.',
      buttonText: 'GET A QUOTE',
      link: '#',
    };
    this.missionInfoWithTwoColumnViewModel = {
      title: 'Verticals we create healthcare software solutions for',
      children: [
        {
          title: 'Patient engagement tools',
          iconPath:
            '../../../../assets/Images/HealthcarePage/missionInfoWithTwoColumn1.png',
          firstTextBlockInnerHtml:
            'We create resilient tools for all types of caregivers to provide <span style="color:#38BC64">quality medical software development services</span>. Thus, they can consult patients about health issues and ways to improve it.',
        },
        {
          title: 'Telehealth',
          iconPath:
            '../../../../assets/Images/HealthcarePage/missionInfoWithTwoColumn2.png',
          firstTextBlockInnerHtml:
            '111 Minutes develops software solutions for healthcare that allow businesses to <span style="color:#38BC64">expand their capabilities</span> while providing timely and unmatched services remotely.',
        },
      ],
    };
    this.shareDetailsInfoViewModel = {
      header:
        'Deliver a superior patient experience with our <span style="color: #38BC64;">healthcare software</span> development services',
      descrption:
        'That keep people coming back to you! We take the burden off your staff’s shoulders, ensuring advanced technologies to fulfill their tasks with unparalleled quality',
      buttonText: 'Share project',
      linkAddress: '#',
    };
    this.provideWithBlocksInfoViewModel = {
      header:
        '<span style="color:#38BC64">Our Medical</span> Software Development Solutions',
      imageUri:
        '../../../../assets/Images/HealthcarePage/provideWithBlocksInfo.svg',
      content: [
        {
          title: 'Educational apps    ',
          description:
            'Deploying these apps, medical facilities can engage patients by educating them about health and ways to improve it.<br><br> They provide a better patient experience and help healthcare organizations retain their customers over the long term.',
        },
        {
          title: 'Wellness and lifestyle apps',
          description:
            'Engage your medical clients and help them advance their physical and mental improvement.<br><br> Our healthcare app development services make it possible to build more trust with potential customers and positively change their impression of an organization.',
        },
        {
          title: 'Real-time communication tools',
          description:
            'With personalized customer care and real-time patient counseling, medical facilities not only attract clients, but also retain them thanks to convenient and timely service.<br><br> We deliver healthcare software solutions that establish a trustworthy doctor-patient relationship.',
        },
        {
          title: 'Mobile telemedicine',
          description:
            'Ease the burden on company staff and reduce offline clinic workloads by providing information and supporting patients online.<br><br> In this way, healthcare organizations can serve more patients simultaneously without hiring additional staff.',
        },
      ],
    };
    this.whyDelegateInfoViewModel = {
      header:
        'Why Choose <span style="color:#38BC64">111 Minutes</span> for Custom Healthcare Software Development',
      description:
        'Win your customers over with our highly productive healthcare app development solutions.<br><br> 111 Minutes experts build apps that streamline communication between doctors and patients, accelerating the accessibility and effectiveness of medical care',
      Link: '#',
      btnName: 'BECOME A CLIENT',
      content: [
        {
          imageUrl: '../../../../assets/Images/Dedicated.svg',
          description:
            '111 Minutes — a reliable healthcare software company — has a genuine interest in helping your business to succeed.<br><br> We dive deep into your needs and requirements to deliver the best quality product.',
          title: 'Devoted Team',
        },
        {
          imageUrl: '../../../../assets/Images/Expertise.svg',
          description:
            "Offering sturdy expertise and profound knowledge in healthcare software development.<br><br> We make sure you get a scalable solution to solve your organization's and your customers' issues.",
          title: 'Extensive Experience',
        },
        {
          imageUrl:
            '../../../../assets/Images/HealthcarePage/whyDelegateInfo2.png',
          description:
            "Once we have created a robust solution, we'll continue to provide support and consult you on any matters related to the software.<br><br> 111 Minutes value long-term cooperation with our clients so that both parties can reap the benefits.",
          title: 'After-Release Support',
        },
        {
          imageUrl:
            '../../../../assets/Images/HealthcarePage/whyDelegateInfo1.png',
          description:
            'By applying best practices in healthcare app development, we assist companies reduce software costs and engage more customers.<br><br> Our app developers provide solutions that help businesses stand out in the market.',
          title: 'State-of-the-art Solutions',
        },
      ],
    };
    this.contactusViewModel = {
      header: 'Contact us',
      title:
        'If you want to know more about us, our team or healthcare application development services',
      description:
        'Contact us — we will gladly answer all your questions. Let us take care of your project!',
      link: '#',
    };
  }
}
