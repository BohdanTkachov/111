import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { ProvideInfoViewModel } from '../provideInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';
import { WhyDoUseInfoViewModel } from '../whyDoUseInfoViewModel';

export class FlutterPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  provideInfoViewModel: ProvideInfoViewModel;
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel;
  whyDoUseInfoViewModel: WhyDoUseInfoViewModel;
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel;
  contactusViewModel: ContactUsViewModel;

  constructor() {
    this.greetingWithTextViewModel = {
      header:
        'Get a Powerful Native-Like Solution with <u style="text-decoration-color:#38BC64;"> Flutter</u> App Development Services',
      buttonText: 'GET A QUOTE',
      description:
        "Google's SDK, Flutter, gives developers a productive way to craft responsive and intuitive applications for different platforms with a single codebase. <br> <br> With this technology, 111 Minutes ensures that our clients receive a robust cross-platform app that aligns with their business goals and timeline.",
      headerPreview:
        'Entrust your project to a high-end Flutter app development company',
      link: '#',
    };

    this.provideInfoViewModel = {
      header:
        'What Flutter services <span style="color:#38BC64;"> we provide? </span>',
      content: [
        {
          imageUrl: 'Apple.png',
          title: 'iOS App Development',
          description:
            'Keeping both the business and its direct customers in mind, we develop high-quality, stylish and user-friendly iOS apps. <br> <br> Our Flutter app development services ensure that our clients have compatible software to stand out in the market.',
        },
        {
          imageUrl: 'Android.svg',
          title: 'Android App Development',
          description:
            'Although iOS is highly popular nowadays, more than 72% of mobile users in the world have Android. <br> <br> To create popular solutions for this operating system, 111 Minutes applies the best Flutter app development techniques and tools that ensure your solution performs excellently.',
        },
        {
          imageUrl: 'Phone.svg',
          title: 'App Consulting Services',
          description:
            "Want to get the most out of your Flutter solution? <br> <br> Our experts can help you choose a game-changing strategy and give you recommendations for your Flutter app's development, architecture, integration and technical stack.",
        },
        {
          imageUrl: 'WebDevelopmentPage/Support.svg',
          title: 'App Maintenance & Support',
          description:
            'Even after your software has already reached the market, as a Flutter app development company. <br> <br> We are always ready to lend a helping hand to maintain and support the developed solutions, boosting their competitiveness.',
        },
      ],
    };

    this.shareDetailsInfoViewModel = {
      buttonText: 'Share a project',
      descrption:
        "High-quality, aesthetically pleasing applications that capture users' hearts with ease.",
      linkAddress: '#',
      header:
        'At our <span style="color:#38BC64;"> Flutter </span> app development agency, we help businesses create high-quality applications',
    };

    this.whyDoUseInfoViewModel = {
      header: 'Why do we use Flutter for your project?',
      acrossModel: {
        bottomText: 'Time',
        leftText: 'Speed',
        rightText: 'Value',
        topText: 'Perfomance',
      },
      content: [
        {
          title: 'Native App Performance',
          description:
            'We know how important app performance is to a good UX. <br> <br> With Flutter app development, we build native-like solutions, as this framework makes it possible to create cross-platform apps directly in machine code — eliminating performance bugs.',
        },
        {
          title: 'Fast Time-to-Market',
          description:
            'We offer Flutter app development services that help businesses streamline and accelerate the entire process. <br> <br> The framework allows us to speed it up by 50% using a free open-source library of powerful tools. With Flutter app development, we ensure faster QA and time-to-market.',
        },
        {
          title: 'Best Value For Money',
          description:
            'The framework makes it possible to create robust solutions on multiple platforms at the same time, shorten app development time and offer a vast collection of free toolkits. <br> <br> All this helps optimize costs while ensuring the high quality of the finished Flutter apps.',
        },
        {
          title: 'Engaging Designs',
          description:
            'Our Flutter mobile app development services ensure that the UI of your solution will be user-friendly and distinctive. <br> <br> Thanks to fast and extensible built-in widgets, our team of Flutter app developers creates aesthetic designs that look the same for both iOS and Android applications.',
        },
      ],
    };

    this.whyDelegateInfoViewModel = {
      header:
        'Why delegate your project to <span style="color:#38BC64;"> 111 Minutes </span>',
      btnName: 'BECOME A CLIENT',
      Link: '#',
      description:
        'Entrust your next project to an experienced Flutter app development agency <br> <br> that guarantees you a high-quality, powerful and profitable solution. <br> <br> Grow your business with 111 Minutes!',
      content: [
        {
          imageUrl: 'Team.svg',
          title: 'Expert Team',
          description:
            'No matter how complicated your idea is, our team of Flutter app developers has years of experience in bringing to life powerful and engaging solutions. <br> <br> We integrate our extensive knowledge of advanced technologies and industry trends into the app development process to give you exactly what you expect — and more.',
        },
        {
          imageUrl: 'InTime.svg',
          title: 'In-Time Delivery',
          description:
            'By streamlining the app development process, we ensure that the application gets to market faster without sacrificing quality. <br> <br> As a Flutter app development company, we set precise deadlines and stick to them. You can count on us to deliver your Flutter app in time.',
        },
        {
          imageUrl: 'Solutions.svg',
          title: 'High-Quality Solutions',
          description:
            'Quality is our most important goal. We make sure that every product we deliver is robust and secure, and help business solve their issues. <br> <br> Our Flutter mobile app development services guarantee that no data is lost and no bugs occur.',
        },
        {
          imageUrl: 'Transparency.svg',
          title: 'Transparency',
          description:
            'When it comes to app development, we apply a unique approach to each client based on their business needs. What remains the same is our style of collaboration.  <br> <br> By fostering open communication, we ensure that we are on the same page to develop a powerful Flutter app that benefits both parties.',
        },
      ],
    };

    this.contactusViewModel = {
      header: 'Contact us',
      title:
        '111 Minutes offers cutting-edge Flutter app development services ',
      description:
        "That helping businesses build software that is easy to use, eye-catching and solves customers' everyday problems. Let us take care of your project!",
      link: '#',
    };
  }
}
