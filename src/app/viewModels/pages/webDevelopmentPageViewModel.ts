import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { ProvideInfoViewModel } from '../provideInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { TransparentProcessInfoViewModel } from '../transparentProcessInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';
import { WhyDoUseInfoViewModel } from '../whyDoUseInfoViewModel';

export class WebDevelopmentPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  provideInfoViewModel: ProvideInfoViewModel;
  transparentProcessInfoViewModel: TransparentProcessInfoViewModel;
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel =
    new ShareDetailsInfoViewModel();
  whyDoUseInfoViewModel: WhyDoUseInfoViewModel;
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel;
  contactusViewModel: ContactUsViewModel;

  constructor() {
    //todo: initialize content

    this.greetingWithTextViewModel = {
      header:
        'Make Your Business Visible in the Market with Our Custom <u style="text-decoration-color:#38BC64;">Web Development Services</u>',
      buttonText: 'GET A QUOTE',
      link: '#',
      headerPreview:
        'Empower your business with compelling web development solutions',
      description:
        'To attract new clients and make them stay with your company for longer, 111 Minutes offers user-centric web development services that guarantee to take your business to the next level. <br> <br> Deploy industry-tailored web apps that engage clients and help you offer expanded services to outperform competitors and gain new markets.',
    };

    this.provideInfoViewModel = {
      header:
        "What <span style='color: #38bc64'> Web Designing & Development </span> Services Do We Provide?",
      content: [
        {
          imageUrl: '../../../../assets/Images/WebDevelopmentPage/FrontEnd.svg',
          title: 'Front-End Development',
          description:
            'Using highly scalable frameworks and workable techniques, we create flexible and fast-loading web platforms and apps. <br> <br> Our web development team analyses the target audience and their needs and applies industry trends to make UI look and feel great.',
        },
        {
          imageUrl: '../../../../assets/Images/WebDevelopmentPage/FrontEnd.svg',
          title: 'Back-End Development',
          description:
            'As a web development agency, we create architectures and digital products that best fit your business needs. <br> <br> Relying on proven tech stack and approaches, we make sure you get a secure, flawless and well-documented solution.',
        },
        {
          imageUrl:
            '../../../../assets/Images/WebDevelopmentPage/FullCycle.svg',
          title: 'Full-Cycle Web App Development',
          description:
            'If you want to build your own web app to engage with  your customers quickly and easily, 111 Minutes can take care of the entire process as we offer full-cycle development services. <br> <br> Provide users with an exceptional digital experience with us.',
        },
        {
          imageUrl: '../../../../assets/Images/WebDevelopmentPage/Support.svg',
          title: 'Support and Maintenance',
          description:
            'Even if the solutions are already integrated into your workflow, our support does not stop there. <br> <br> Whenever you need to add certain features or update your app, our team of software engineers is always ready to give a helping hand to you.',
        },
      ],
    };

    this.transparentProcessInfoViewModel = {
      header:
        "Our <span style='color: #38bc64'> transparent </span> development process",
      imageUrl: '../../../../assets/Images/WebDevelopmentPage/Progress.svg',
      content: [
        {
          index: '[01]',
          description:
            'Study <br> <br> We thoroughly analyze all documents related to your project, and after learning what type of web development services your business requires, we prepare an accurate cost estimate.',
        },
        {
          index: '[02]',
          description:
            'Development <br> <br> After we agree on the nature of your custom web development solution, we start building software. Our team divides the project into sprints and completes them one by one.',
        },
        {
          index: '[03]',
          description:
            'Launch <br> <br> When we are done with development and testing, we are ready to release the web solution to serve your business and engage clients.',
        },
        {
          index: '[04]',
          description:
            'Support <br> <br> Our cooperation does not end after providing you with a web application development solution. Continuous support is a great part of our work after the software hits the market.',
        },
      ],
    };

    this.whyDoUseInfoViewModel = {
      header:
        'How will Your Business Benefit from Deploying Web Development Solutions?',
      acrossModel: {
        topText: 'Usability',
        leftText: 'Scale',
        rightText: 'Custom',
        bottomText: 'Popularity',
      },
      content: [
        {
          title: 'User-Friendly Interface Design',
          description:
            'As part of our web app development services, we carry out thorough niche and competitor analyses to create a clear software architecture. <br> <br> To ensure an unforgettable brand experience, we make the navigation of the web app intuitive and interactive.',
        },
        {
          title: 'Drive More Users',
          description:
            "Thanks to our custom web development services, you'll get a compelling web app that is attractive to users and improves their satisfaction rate. <br> <br> If customer interaction with your brand is positive, more and more users will engage with your company, increasing your revenue.",
        },
        {
          title: 'Increased Revenue',
          description:
            "The more your web app offers to users, the higher your company's revenue. <br> <br> A smooth user flow, a responsive user interface and a wide range of features increase the popularity of your brand, as you expand existing services and outperform competitors. Get quality web development services to build a successful app.",
        },
        {
          title: 'Customized Solution',
          description:
            'When you hire a web development agency, you get unique solutions tailored specifically to the needs and goals of your business. <br> <br> This way you can differentiate yourself from your competitors and bring something new to the market. Our dedicated development team knows what industry-tailored solutions your customers lack today.',
        },
      ],
    };

    this.whyDelegateInfoViewModel = {
      header: 'Why Delegate Your Project to 111 Minutes',
      btnName: 'BECOME A CLIENT',
      Link: '#',
      content: [
        {
          imageUrl:
            '../../../../assets/Images/WebDevelopmentPage/Exceptional.svg',
          title: 'Exceptional Quality',
          description:
            '111 Minutes provides web development services that adapt to industry trends and yet bring innovations. <br> <br> With advanced technologies, practices and approaches, our team ensures that your solution satisfies customers and helps you stand out in the industry.',
        },
        {
          imageUrl: '../../../../assets/Images/WebDevelopmentPage/Timely.svg',
          title: 'Timely Delivery',
          description:
            'Our well-versed IT specialists streamline web development processes using innovative tools and techniques, as well as our vast experience. <br> <br> This way, we build, test and deliver our products faster than competitors without compromising quality.',
        },
        {
          imageUrl:
            '../../../../assets/Images/WebDevelopmentPage/Communication.svg',
          title: 'Transparent Communication',
          description:
            'Being completely open with our clients about our processes, strategies and tactics helps us build trustworthy relationships. <br> <br> This way, we make sure we are on the same page, which allows us to provide web development services that help you achieve business goals',
        },
        {
          imageUrl: '../../../../assets/Images/WebDevelopmentPage/Experts.svg',
          title: 'Industry Experts',
          description:
            'Our team of web developers has vast experience and in-depth knowledge of the industry and its trends. <br> <br> They use cutting-edge technologies to develop solutions that solve customer problems, help businesses gain more prospective clients and conquer the market.',
        },
      ],
      description:
        'We provide web application development solutions with aesthetic design and clean programming. <br> <br> helping companies respond to market needs and increase sales. Get a compelling web app to expand the capabilities of your business!',
    };

    this.contactusViewModel = {
      header: 'Contact us',
      description:
        'We create compelling and user-centric web apps and platforms that benefit your business. Let us take care of your project!',
      link: '#',
      title:
        'Entrust the development of your business solution to an experienced web development services company — 111 Minutes. ',
    };
  }
}
