import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { ProvideInfoViewModel } from 'src/app/viewModels/provideInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { WhyDoUseInfoViewModel } from '../whyDoUseInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';
import { ContactUsViewModel } from '../contactUsViewModel';

export class NodeJsPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  provideInfoViewModel: ProvideInfoViewModel;
  shareAProjectViewModel: ShareDetailsInfoViewModel;
  whyDoUseViewModel: WhyDoUseInfoViewModel;
  delegateViewModel: WhyDelegateInfoViewModel;
  contactusViewModel: ContactUsViewModel;

  constructor() {
    this.greetingWithTextViewModel = {
      header:
        'Get Your Revolutionary Solution with Our <u style="text-decoration-color:#38BC64;"> Node.js Development </u> Services',
      headerPreview:
        'Offer your clients more with a robust Node.js software solution',
      buttonText: 'GET A QUOTE',
      link: '#',
      description:
        '111 Minutes guarantees you top-notch development services using a powerful Node.js cross-platform runtime environment. <br> <br>  We build custom software using reliable and efficient technologies to provide our clients with powerful solutions that help them stand out from the competition.',
    };
    this.provideInfoViewModel = {
      header:
        "What Outsource <span style='color: #38BC64;'> Node.js </span>  Development Services We Provide",
      content: [
        {
          title: 'Building Applications from Scratch',
          description:
            "We deliver high-quality Node.js mobile app development services by tapping into our expertise and the latest technologies. <br> <br>  This way, we ensure that the final product is flexible, lightweight, powerful and addresses our client's business needs.",
          imageUrl:
            '../../../../assets/Images/NodeJsProvideInfoImages/Scratch.svg',
        },
        {
          title: 'Scaling Existing Applications',
          description:
            "If you already have a Node.js mobile application but want to add some features or improve the product, we can help. <br> <br> We know exactly how to deal with any legacy code without having to rewrite it. This way we don't ruin the architecture of an app and make it perform better.",
          imageUrl:
            '../../../../assets/Images/NodeJsProvideInfoImages/Scaling.svg',
        },
        {
          title: 'Maintenance and Support',
          description:
            'Our team not only help you develop innovative applications but also maintain, support and update your existing solutions. <br> <br> As a Node.js development company, we apply our extensive knowledge of JavaScript to create your app faster and easier.',
          imageUrl:
            '../../../../assets/Images/NodeJsProvideInfoImages/Maintenance.svg',
        },
        {
          title: 'API Development',
          description:
            'Creating custom APIs from scratch, we help enterprises to facilitate cooperation and easily share data with each other and with third-party applications. <br> <br> We make sure your solution has the right functionality that appeals to your customers and portrays you as a solid and innovative company.',
          imageUrl: '../../../../assets/Images/NodeJsProvideInfoImages/API.svg',
        },
        {
          title: 'Migration to Node.js',
          description:
            'Our Node.js web development services include helping organizations migrate complex apps built on different platforms. <br> <br> Why do you need it? Migrating to Node.js is a great opportunity to attract new customers and add extra value. The experts at 111 Minutes perform this process without sacrificing performance or functionality.',
          imageUrl:
            '../../../../assets/Images/NodeJsProvideInfoImages/Migration.svg',
        },
      ],
    };
    this.shareAProjectViewModel = {
      buttonText: 'Share a project',
      descrption:
        'Our team of dedicated developers promises to take your Node.js solution to the heights with all their knowledge and creativity.',
      header:
        'We know how tricky it can be to develop a <span style="text-decoration-color:#38BC64;"> high-performance </span> application.',
      linkAddress: '#',
    };
    this.whyDoUseViewModel = {
      header: 'Why do we use Node JS for your project?',
      acrossModel: {
        bottomText: 'Perfomance',
        leftText: 'Abilitys',
        rightText: 'Simplicity',
        topText: 'Popularity',
      },
      content: [
        {
          title: 'Robust Tech Stack',
          description:
            'Not without reason, 2.1% of all websites use Node.js. The platform has a high-performing and efficient technology stack that levels up the overall engineer productivity, enables code sharing and provides numerous free tools. <br> <br> Thus, with enough effort, our Node.js web development team can build a fast and efficient app for you.',
        },
        {
          title: 'Fast-Processing for Web Tasks',
          description:
            'The speed of Node.js makes it the best choice for dynamic applications. Because of this feature, PayPal, for example, decided to switch to the platform and noticed a 35% drop in response time. <br> <br> When you build an app on top of Node.js, you can be sure that it can handle multiple requests at the same time without sacrificing performance or speed.',
        },
        {
          title: 'Advantage of Caching',
          description:
            "Node.js app development allows our engineers to optimize software performance by leveraging the platform's caching techniques. <br> <br> This way, they improve app response time and reduce data volume costs. So, you can stay ahead of the competition by deploying productive solutions, ensuring a high level of customer satisfaction.",
        },
        {
          title: 'Rich Ecosystem',
          description:
            'Being not just an open-source app development platform, but also a marketplace for JavaScript tools, Node.js offers a wide range of free options and instruments that anyone can use with just a few clicks. <br> <br> This allows software engineers to reduce development costs and time to market.',
        },
      ],
    };
    this.delegateViewModel = {
      btnName: 'BECOME A CLIENT',
      Link: '#',
      header:
        'Why delegate your project to <span style="color:#38BC64;"> 111 Minutes </span>',
      description:
        "Put your future solution in the reliable and experienced hands of 111 Minutes specialists. <br> <br> We'll make sure that it is tailored to your business goals and solves the problems of your customers.",
      content: [
        {
          title: 'Dedicated Team that Cares',
          description:
            "To provide cutting-edge Node.js app development services, we use the best practices and technologies to provide you with a first-class solution. <br> <br> For us, it's important to build custom software that exactly meets your requirements, since your success is our success.",
          imageUrl: '../../../../assets/Images/Dedicated.svg',
        },
        {
          title: 'Strong Expertise',
          description:
            '111 Minutes is a trusted provider of IT solutions. With our extensive expertise and in-depth knowledge. <br> <br> Data Science and Data Analytics, help our clients streamline development processes, cut down costs and create successful solutions.',
          imageUrl: '../../../../assets/Images/Expertise.svg',
        },
        {
          title: 'Long-Term Support',
          description:
            "111 Minutes is focused on long-term cooperation more than on one-time services. <br> <br> Once your app hits the market, it doesn't mean we leave you all alone. We're always here to help you with maintenance, add new features to your app, or support you when needed.",
          imageUrl: '../../../../assets/Images/LongTerm.svg',
        },
        {
          title: 'Cost-Effective solutions',
          description:
            'By using the best but cost-saving tools and streamlining the development process, we cut expenses where possible without compromising quality. <br> <br> We offer our clients transparent and fair cost estimates, as well as top-notch teams that implement user-oriented solutions.',
          imageUrl: '../../../../assets/Images/Cost-Effective.svg',
        },
      ],
    };
    this.contactusViewModel = {
      header: 'Contact us',
      title:
        'Whether you are curious about 111 Minutes team, Node.js web application development services or other solutions',
      description:
        "We can enrich your business with, get in touch with us — we'll be happy to answer all your questions. Let us take care of your project!",
      link: '#',
    };
  }
}
