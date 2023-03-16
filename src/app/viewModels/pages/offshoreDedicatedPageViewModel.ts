import { makeStateKey } from '@angular/platform-browser';
import { BenefitsInfoViewModel } from '../benefitsInfoViewModel';
import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { HowItWorkInfoViewModel } from '../howItWorkInfoViewModel';
import { MissionInfoWithTwoColumnViewModel } from '../missionInfoWithTwoColumnViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';

export class OffshoreDedicatedPageViewModel {
  greetingWithTextViewModel = new GreetingWithTextViewModel();
  missionInfoWithTwoColumnViewModel = new MissionInfoWithTwoColumnViewModel();
  howItWorkInfoViewModel = new HowItWorkInfoViewModel();
  shareDetailsInfoViewModel = new ShareDetailsInfoViewModel();
  shareDetailsInfoViewModel2 = new ShareDetailsInfoViewModel();
  benefitsInfoViewModel = new BenefitsInfoViewModel();
  whyDelegateInfoViewModel = new WhyDelegateInfoViewModel();
  contactUsViewModel = new ContactUsViewModel();

  constructor() {
    this.setUpMissionInfo();
    this.setUpShareDetailsInfoViewModel();
    this.setUpShareDetailsInfoViewModel2();
  }

  private setUpMissionInfo() {
    var ms = this.missionInfoWithTwoColumnViewModel;
    ms.title = 'What is an offshore dedicated center?';
    ms.children = [
      {
        // <span style="color:#38BC64"></span>
        title: 'Strong specialists to solve your issue',
        iconPath:
          '../../../../assets/Images/offshoreDedicatedPage/missioninfowithtwocolumn1.png',
        firstTextBlockInnerHtml:
          'Working with our experienced <span style="color:#38BC64">in-house senior and middle specialists</span> lets you develop a cutting-edge product and support it to add unique features anytime you need it. Involve our caring and committed offshore developers to your project to get expert assistance with tech tasks immediately.',
      },
      {
        title: 'In-house academy and internship',
        iconPath:
          '../../../../assets/Images/offshoreDedicatedPage/missioninfowithtwocolumn2.png',
        firstTextBlockInnerHtml:
          '<span style="color:#38BC64">We educate new specialists</span>, providing them with more than a year of software engineer training. The most successful graduates sign up for contracts and keep working on our projects as interns for about 2 years, gaining diverse experience.',
      },
    ];
  }
  private setUpShareDetailsInfoViewModel() {
    var d = this.shareDetailsInfoViewModel;
    d.header =
      'Empower your business with a trustworthy <span style="color:#38BC64">offshore development company</span>. ';
    d.descrption =
      'Collaborate with 111 Minutes to delegate IT tasks and deploy innovative solutions.';
    d.buttonText = 'Share a project';
    d.linkAddress = '#';
  }
  private setUpShareDetailsInfoViewModel2() {
    var d = this.shareDetailsInfoViewModel2;
    d.header =
      'Delegate complex IT tasks to your reliable offshore department and focus on <span style="color:#38BC64">what matters most</span>.';
    d.descrption =
      'We will take care of all the software development issues while you are growing the business.';
    d.buttonText = 'Share a project';
    d.linkAddress = '#';
  }
}
