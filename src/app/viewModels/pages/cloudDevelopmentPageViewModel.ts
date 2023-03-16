import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { ProvideInfoViewModel } from '../provideInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { TransparentProcessInfoViewModel } from '../transparentProcessInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';
import { WhyDoUseInfoViewModel } from '../whyDoUseInfoViewModel';

export class CloudDevelopmentPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  provideInfoViewModel: ProvideInfoViewModel;
  transparentProcessInfoViewModel: TransparentProcessInfoViewModel;
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel;
  whyDoUseInfoViewModel: WhyDoUseInfoViewModel;
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel;
  contactusViewModel: ContactUsViewModel;

  constructor() {
    this.greetingWithTextViewModel = {
      header:
        'Address Customer Needs More Effectively with a Managed <u style="text-decoration-color:#38BC64;">Cloud Service Provider</u>!',
      headerPreview:
        'Create a space where users can access their data anytime and anywhere',
      description:
        'Help your customers safely manage and migrate their data to powerful cloud-based software.<br><br> 111 Minutes makes sure you get a secure, robust and easy-to-use solution. We develop custom cloud solutions that are tailored to the needs of your business and aligned with the latest industry trends.',
      buttonText: 'GET A QUOTE',
      link: '#',
    };
    this.provideInfoViewModel = {
      header:
        "What <span style='color: #38bc64'>cloud services</span> for business do we provide?",
      content: [
        {
          imageUrl:
            '../../../../assets/Images/cloudDevelopment/provideInfo1.svg',
          title: 'Cloud Consulting',
          description:
            'As a trusted managed cloud service provider, we advise enterprises on strategic planning, deployment, optimization and support of cloud-based solutions.<br><br> If you need to build a robust cloud infrastructure or improve the existing environment, our experts can consult you on these issues.',
        },
        {
          imageUrl:
            '../../../../assets/Images/cloudDevelopment/provideInfo2.svg',
          title: 'Cloud App Development',
          description:
            'We deliver scalable and highly secure cloud enterprise solutions to optimize user experience and improve ROI. <br><br>To build 100% reliable software, we leverage our best technologies and practices, as well as the latest industry trends. So you get the app that perfectly fits your business requirements.',
        },
        {
          imageUrl:
            '../../../../assets/Images/cloudDevelopment/provideInfo3.svg',
          title: 'Cloud Migration',
          description:
            'Move your legacy applications to cloud infrastructure and streamline your processes with our cloud services for businesses.<br><br> 111 Minutes specialists will create the best migration strategy for you and guarantee unparalleled scalability and high performance of the software.',
        },
        {
          imageUrl:
            '../../../../assets/Images/cloudDevelopment/provideInfo4.svg',
          title: 'Cloud Monitoring & Support',
          description:
            '111 Minutes helps companies stay ahead of the competition by analyzing their software and providing a complete overview of the health and availability of the entire infrastructure.<br><br> We are here to take the burden off your shoulders, so you can focus on other important tasks.',
        },
      ],
    };
    this.transparentProcessInfoViewModel = {
      header:
        'Our <span style="color:#38BC64">transparent</span> development process',
      imageUrl:
        '../../../../assets/Images/CustomDevelopmentPageImages/transparentProcessInfo.svg',
      content: [
        {
          index: '[01]',
          description:
            'We usually start our journey to cloud-based solutions with research<br><br> To understand the specifics of the product and select the most appropriate technologies.',
        },
        {
          index: '[02]',
          description:
            'Then, we move into the development phase.<br><br> When delivering cloud services and solutions to enterprises, we make sure that we apply best practices and tools.',
        },
        {
          index: '[03]',
          description:
            'Once the development is complete, our world-class cloud engineers initiate a testing phase.<br><br> To ensure that all features work properly, and then launch your software.',
        },
        {
          index: '[04]',
          description:
            'We maintain and support your software.<br><br> So, if you need to update your cloud services for insurance, education, healthcare or another industry, our specialists are always there for you.',
        },
      ],
    };
    this.shareDetailsInfoViewModel = {
      header:
        'Automate your processes and increase revenue with <span style="color: #38BC64;">our cloud services</span> for business!',
      descrption:
        'We free your employees from routine tasks, so they can focus on other important aspects.',
      buttonText: 'Share a project',
      linkAddress: '#',
    };
    this.whyDoUseInfoViewModel = {
      header: '',
      content: [
        {
          title: 'Better Data Security',
          description:
            "Protect your business data with our high-quality cloud storage services.<br><br> Whether you want us to create a cloud-based app from scratch or migrate your software to the cloud, we'll make sure the solution is safe from hacking.",
        },
        {
          title: 'Excellent Scalability',
          description:
            "111 Minutes' robust cloud solutions give you data storage space where you can easily keep multiple documents.<br><br> Our expert engineers will create a scalable product that perfectly fits your business needs and solves core issues.",
        },
        {
          title: 'Advanced Accessibility',
          description:
            'Make your software accessible to everyone at lightning speed with 111 Minutes — a leading cloud services provider.<br><br> We make sure that your system is suitable for the largest number of users and can be accessed by as many people as required.',
        },
        {
          title: 'Higher Speed',
          description:
            'Move your business to the cloud and offer your customers a solution with higher performance, responsive design and seamless experience.<br><br> No matter how many people are using your product at the same time, the speed remains invariably high.',
        },
      ],
      acrossModel: {
        leftText: 'Scale',
        rightText: 'Value',
        topText: 'Accessibility',
        bottomText: 'Security',
      },
    };
    this.whyDelegateInfoViewModel = {
      header:
        'Why choose <span style="color:#38BC64">111 Minutes</span> for your cloud project',
      description:
        'Delegate your future cloud-based solution to 111 Minutes professionals.<br><br> With wide expertise and in-depth knowledge of cloud technology, we deliver powerful software that aligns with your business goals and industry trends.',
      Link: '#',
      btnName: 'BECOME A CLIENT',
      content: [
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo1.png',
          description:
            'As a trusted cloud services provider, 111 Minutes specialists have in-depth knowledge of cloud computing and the latest trends and tendencies in the industry.<br><br> Contact us so that we can develop a cutting-edge and agile cloud solution for your company.',
          title: 'Solid Expertise',
        },
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo2.png',
          description:
            'Our main focus is on enterprise digitization and cloud automation services.<br><br> We aim to help brands stay ahead of the competition by adopting innovative cloud solutions that help your business offer expanded services to clients and win the market.',
          title: 'Dedicated Team that Cares',
        },
        {
          imageUrl: 'Solutions.svg',
          description:
            "No matter how complicated your project is, we'll complete it successfully.<br><br> By applying proven practices and tools, we ensure that the business cloud services we provide are of the highest possible quality, so you can beat your competitors.",
          title: 'High-Quality',
        },
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo4.png',
          description:
            "Once we've delivered you a cloud solution, our collaboration does not end at that point.<br><br> We value a long-term partnership with our clients. If you want to update your solution and get advice on it, we'll be happy to help you.",
          title: 'Long-Term Support',
        },
      ],
    };
    this.contactusViewModel = {
      header: 'Contact us',
      title:
        'Whether you are curious about our cloud services for businesses or want to know more about 111 Minutes',
      description:
        "Get in touch with us — we'll be happy to answer all your questions. Let us take care of your project!",
      link: '#',
    };
  }
}
