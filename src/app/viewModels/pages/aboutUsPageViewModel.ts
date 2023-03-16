import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { MissionInfoWithOneImageViewModel } from '../missionInfoWithOneImageViewModel';
import { ProvideWithBlocksInfoViewModel } from '../provideWithBlocksInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { TransparentProcessInfoViewModel } from '../transparentProcessInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';

export class AboutUsPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  missionInfoWithOneImageViewModel = new MissionInfoWithOneImageViewModel();
  provideWithBlocksInfoViewModel: ProvideWithBlocksInfoViewModel;
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel;
  transparentProcessInfoViewModel: TransparentProcessInfoViewModel =
    new TransparentProcessInfoViewModel();
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel;
  contactusViewModel: ContactUsViewModel;

  constructor() {
    this.greetingWithTextViewModel = {
      buttonText: 'GET A QOUTE',
      header:
        'Collaborate with a Software Development Company <u style="text-decoration-color:#38BC64;"> That Cares about Your Business </u> the Same as You Do',
      headerPreview:
        'Streamline your workflow with our industry-tailored application development solution',
      link: '#',
      description:
        '111 Minutes is a trustworthy provider of software development services with in-depth knowledge of BPA, Cloud, Data Science and Data Analytics. <br> <br> Our goal is to take the burden off your shoulders by applying the agile software development methodology and the latest industry trends. Our approach is based on the principles of transparency, efficient execution and commitment.',
    };

    this.provideWithBlocksInfoViewModel = {
      header:
        "We are proud of our <span style='color: #38BC64;'> academy </span> and <span style='color: #38BC64;'> internship </span>",
      imageUri: '../../../../assets/Images/AboutUsProvideImg.png',
      content: [
        {
          title: 'Growing and educating professionals',
          description:
            "At our in-house academy, we train talented specialists with a well-designed approach and advanced technologies. <br> <br> We cultivate a continuous learning mindset and emphasize hands-on experience so that our developers can handle complex technical cases regardless of the type of client's project.",
        },
        {
          title: 'Training juniors on real projects',
          description:
            'By engaging junior software developers in our projects, we prepare them for success in the workplace. We train future professionals specifically for the needs of our clients. <br> <br> So, our specialists dive into your project and learn the technologies needed to create a powerful, customized solution that will help your company save money.',
        },
        {
          title: 'Ensuring advanced mentorship',
          description:
            'With a patient and coaching approach, we empower our software engineering teams to accelerate their learning. <br> <br> Our mentors provide support and guidance to junior developers on any matter as needed to avoid human errors. This way, juniors gain profound knowledge, while businesses can be certain about the result they get.',
        },
        {
          title: 'Providing companies with qualified specialists',
          description:
            "By growing software developers from juniors to experts, we provide highly skilled professionals to perform a company's most demanding technical tasks and deliver high-quality solutions. <br> <br> As a result, businesses get an already trained specialist that doesn’t require long onboarding and is aware of all the company’s peculiarities.",
        },
      ],
    };

    this.shareDetailsInfoViewModel = {
      buttonText: 'Share project',
      descrption:
        "That keep people coming back to you! We take the burden off your staff's shoulders, ensuring advanced technologies to fulfill their tasks with unparalleled quality",
      header:
        "Deliver a superior patient experience with our <span style='color: #38BC64;'> healthcare software </span> development services",
      linkAddress: '#',
    };

    this.whyDelegateInfoViewModel = {
      description:
        'Delegate your complex tech tasks to 111 Minutes. Our skilled software engineering team has in-depth knowledge of technologies <br> <br> and the evolving software industry, which helps them deliver powerful solutions.',
      btnName: 'BECOME A CLIENT',
      header:
        "Why entrust your IT needs to our <span style='color: #38BC64;'> Software Solution </span> Company",
      Link: '#',
      content: [
        {
          imageUrl: 'Dedicated.svg',
          title: 'Dedicated experts',
          description:
            "We're interested in your application development solution to thrive, as our professionality is also at stake. <br> <br> That's why we're committed to your project to ensure we pull together and deliver what you expect.",
        },
        {
          imageUrl: 'Expertise.svg',
          title: 'Vast Experience',
          description:
            'Our web & mobile app development specialists are constantly strengthening their knowledge of the tech stack and industry innovations. <br> <br> When it comes to your project, they apply their solid expertise to create a cutting-edge solution',
        },
        {
          imageUrl: 'WebDevelopmentPage/Exceptional.svg',
          title: 'High-Quality Solutions',
          description:
            'Throughout the app creation process, we apply the best software development methodology and the latest industry trends. <br> <br> Our rigid approach helps us satisfy both our clients and their customers with the results.',
        },
        {
          imageUrl: 'LongTerm.svg',
          title: 'Long-Term Cooperation',
          description:
            "We provide long-term support even after we have developed and deployed your software. <br> <br> This way, we make sure that it is user-friendly and solves customers' problems, as we constantly update its features.",
        },
      ],
    };

    this.contactusViewModel = {
      link: '#',
      title: 'Drop us a line to talk to our specialist.',
      description:
        "If you have any questions related to our company, the team or our software development methodology, we'll be happy to give you insights. Let us take care of your project!",
      header: 'Contact us',
    };
  }
}
