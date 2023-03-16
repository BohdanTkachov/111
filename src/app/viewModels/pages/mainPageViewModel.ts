import { AboutUsInfoViewModel } from "../aboutUsInfoViewModel";
import { ClientReviewsViewModel } from "../clientReviewsViewModel";
import { ContactUsViewModel } from "../contactUsViewModel";
import { GreetingWithImageViewModel } from "../greetingWithImageViewModel";
import { IndustriesInfoViewModel } from "../industriesInfoViewModel";
import { MissionInfoWithOneImageViewModel } from "../missionInfoWithOneImageViewModel";
import { MissionInfoWithTwoColumnViewModel } from "../missionInfoWithTwoColumnViewModel";
import { OurProjectsInfoViewModel } from "../ourProjectsInfoViewModel";
import { ShareDetailsInfoViewModel } from "../shareDetailsInfoViewModel";
import { TechnologiesInfoViewModel } from "../technologiesInfoViewModel";

export class MainPageViewModel {

    missionInfoWithOneImageViewModel = new MissionInfoWithOneImageViewModel();
    greetingWithImageViewModel = new GreetingWithImageViewModel();
    missionInfoWithTwoColumnViewModel = new MissionInfoWithTwoColumnViewModel();
    industriesInfoViewModel = new IndustriesInfoViewModel();
    shareDetailsInfoViewModel = new ShareDetailsInfoViewModel();
    ourProjectsInfoViewModel = new OurProjectsInfoViewModel();
    clientReviewsViewModel = new ClientReviewsViewModel();
    technologiesInfoViewModel = new TechnologiesInfoViewModel();
    aboutUsViewModel = new AboutUsInfoViewModel();
    contactusViewModel = new ContactUsViewModel();
    shareProjectViewModel = new ShareDetailsInfoViewModel();


    constructor() {
        this.shareProjectViewModel.header = "Delegate complex IT tasks to your reliable offshore department and focus on <span style='color: #38BC64;'> what matters most. </span>";
        this.shareProjectViewModel.buttonText = 'Share a project';
        this.shareProjectViewModel.descrption = 'We will take care of all the software development issues while you are growing the business.';
        this.shareProjectViewModel.linkAddress = '#';
    }
}