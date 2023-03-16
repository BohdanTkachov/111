import { ContactUsViewModel } from '../contactUsViewModel';
import { GreetingWithTextViewModel } from '../greetingWithTextViewModel';
import { ProvideInfoViewModel } from '../provideInfoViewModel';
import { ProvideWithBlocksInfoViewModel } from '../provideWithBlocksInfoViewModel';
import { ShareDetailsInfoViewModel } from '../shareDetailsInfoViewModel';
import { TransparentProcessInfoViewModel } from '../transparentProcessInfoViewModel';
import { WhyDelegateInfoViewModel } from '../whyDelegateInfoViewModel';

export class AppDevelopmentPageViewModel {
  greetingWithTextViewModel: GreetingWithTextViewModel =
    new GreetingWithTextViewModel();
  provideInfoViewModel: ProvideInfoViewModel = new ProvideInfoViewModel();
  transparentProcessInfoViewModel: TransparentProcessInfoViewModel =
    new TransparentProcessInfoViewModel();
  shareDetailsInfoViewModel: ShareDetailsInfoViewModel =
    new ShareDetailsInfoViewModel();
  provideWithBlocksInfoViewModel: ProvideWithBlocksInfoViewModel =
    new ProvideWithBlocksInfoViewModel();
  whyDelegateInfoViewModel: WhyDelegateInfoViewModel =
    new WhyDelegateInfoViewModel();
  contactusViewModel: ContactUsViewModel = new ContactUsViewModel();

  constructor() {
    //todo: initialize content
  }
}
