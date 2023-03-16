import { ContactUsViewModel } from 'src/app/viewModels/contactUsViewModel';
import { GreetingWithTextViewModel } from 'src/app/viewModels/greetingWithTextViewModel';
import { ProvideInfoViewModel } from 'src/app/viewModels/provideInfoViewModel';
import { ProvideWithBlocksInfoViewModel } from 'src/app/viewModels/provideWithBlocksInfoViewModel';
import { ShareDetailsInfoViewModel } from 'src/app/viewModels/shareDetailsInfoViewModel';
import { TransparentProcessInfoViewModel } from 'src/app/viewModels/transparentProcessInfoViewModel';
import { WhyDelegateInfoViewModel } from 'src/app/viewModels/whyDelegateInfoViewModel';

export class CustomDevelopmentPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel;
  provideoInfoViewModel: ProvideInfoViewModel;
  transparentProcessInfoViewModel: TransparentProcessInfoViewModel;
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel;
  provideWithBlocksInfoViewModel: ProvideWithBlocksInfoViewModel;
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel;
  contactUsViewModel: ContactUsViewModel;
  constructor() {
    this.greetingWithTextViewModel = {
      header:
        'Cut Costs on Maintaining Departments With Our <u style="text-decoration-color:#38BC64;">Custom Software Development </u>Services',
      headerPreview:
        'Take advantage of custom software development solutions to generate superprofits',
      description:
        'Delegate the process of building industry-tailored solutions to our trustworthy custom software development company.<br><br> Empower your business with apps that reduce costs on maintaining departments, automate processes and engage your customers.',
      buttonText: 'GET A QUOTE',
      link: '#',
    };
    this.provideoInfoViewModel = new ProvideInfoViewModel();
    this.transparentProcessInfoViewModel = {
      header:
        '<span style="color:#38BC64">Transparent</span> processes in our custom app development company',
      imageUrl:
        '../../../../assets/Images/CustomDevelopmentPageImages/transparentProcessInfo.svg',
      content: [
        {
          index: '[01]',
          description:
            'To make the software development process as smooth as possible, we conduct a range of consultations. Our experts discover everything about your company and its specific business needs.',
        },
        {
          index: '[02]',
          description:
            'Then we identify custom software development solutions that will suit best for your industry. We choose the ones that totally satisfy your clients’ needs, drive their loyalty and satisfaction.',
        },
        {
          index: '[03]',
          description:
            'Our software engineers develop custom solutions that bring value to your customers and help you provide better service. Responsible testing and dedicated optimization are essential parts of the process.',
        },
        {
          index: '[04]',
          description:
            'We provide technical support to ensure that everything goes smoothly and efficiently. Constant improvement and adding new features are what our custom application development company always does.',
        },
      ],
    };
    this.shareDetailsInfoViewModel = {
      header:
        'Outsource custom software development services to 111 Minutes <span style="color:#38BC64">skilled</span> professionals!',
      descrption:
        'We have extensive experience building various solutions and definitely know what will perform best for your company.',
      buttonText: 'Share a project',
      linkAddress: '#',
    };
    this.provideWithBlocksInfoViewModel = {
      header:
        'How will your<span style="color:#38BC64"> business benefit </span> from custom software development outsourcing?',
      imageUri:
        '../../../../assets/Images/CustomDevelopmentPageImages/ProvideWithBlocksInfo.svg',
      content: [
        {
          title: 'Reduce costs on maintaining departments',
          description:
            "Deploy solutions that automate employees' routines, so you no more need to hire numerous specialists.<br><br> Cut spending with business–tailored software that simplifies processes and lets your staff focus on strategic tasks",
        },
        {
          title: 'Attract and retain customers',
          description:
            'Custom software solutions let your business offer additional value, solving your clients’ issues and simplifying their routine.<br><br> Stay ahead of the competition with unique apps and user-oriented services.',
        },
        {
          title: 'Improve usability experience',
          description:
            'Ensure long-term loyalty by deploying user-friendly solutions that make customers’ interactions as smooth as possible.<br><br> Optimize existing software or develop revolutionary apps to bring more value to the market.',
        },
        {
          title: 'Increase customer satisfaction',
          description:
            'Offer innovative solutions that provide additional engagement channels to your existing clients. <br><br>111 Minutes custom software developers create apps that address your customers’ needs and pain points.',
        },
      ],
    };
    this.whyDelegateInfoViewModel = {
      header:
        'Why delegate your project to <span style="color:#38BC64">111 Minutes</span>',
      description:
        'Our dedicated team ensures you attract new clients and increase customer loyalty by deploying digital solutions that distinguish your company from competitors.<br><br> Reduce costs,free staff, automate routine tasks <br><br>to be 1 step forward with our expert software engineers!',
      Link: '#',
      btnName: 'Become a client',
      content: [
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo2.png',
          description:
            'To deliver cutting-edge software solutions that address customer needs, we dive deep into your business processes and workflow, defining its weak sides and points to optimize.<br><br> Only a mindful and caring approach lets us develop useful software that increases customer satisfaction.',
          title: 'Dedicated Team that Cares',
        },
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo1.png',
          description:
            'Being professionals in what we do, 111 Minutes provides custom software development solutions based on our extensive knowledge and experience.<br><br> We apply only the best-proven practices while building worthy solutions for your business growth.',
          title: 'Strong Expertise',
        },
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo4.png',
          description:
            'We specialize in providing long-term custom software development services, becoming your trustworthy remote IT department.<br><br> Whether your business requires just one solution and its lifetime support, or a number of apps, you can fully rely on our custom software development company.',
          title: 'Long-Term Support',
        },
        {
          imageUrl:
            '../../../../assets/Images/CustomDevelopmentPageImages/whyDelegateInfo3.png',
          description:
            'Covering only 5 main industries lets us learn them thoroughly from head to toe and build software that really helps.<br><br> Our development team delivers apps and platforms that fully match the needs and solve the problems of our clients and their customers.',
          title: 'Industry-Tailored Solutions',
        },
      ],
    };
    this.contactUsViewModel = {
      header: 'Contact us',
      title:
        'Empower your company with a strong team of custom software developers to take your service to the next level.',
      description:
        'Our dedicated experts have profound knowledge in custom solutions that will help you deliver more value to clients.Let us take care of your project!',
      link: '#',
    };
  }
}
