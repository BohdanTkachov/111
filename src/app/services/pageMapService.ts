import {
  PageDetailApiModel,
  PageDetailBlockApiModel,
} from '../models/managers/api/pageDetailApiModel';
import {
  MasterPageBlockViewModel,
  MasterPageViewModel,
} from '../viewModels/pages/masterPageViewModel';

import {
  ProvideInfoItemViewModel,
  ProvideInfoViewModel,
} from 'src/app/viewModels/provideInfoViewModel';
import { ShareDetailsInfoViewModel } from 'src/app/viewModels/shareDetailsInfoViewModel';
import { WhyDoUseInfoViewModel } from 'src/app/viewModels/whyDoUseInfoViewModel';
import {
  WhyDelegateInfoItemViewModel,
  WhyDelegateInfoViewModel,
} from 'src/app/viewModels/whyDelegateInfoViewModel';
import { ContactUsViewModel } from 'src/app/viewModels/contactUsViewModel';
import { BlockComponentNames } from '../models/enums';
import { AboutUsInfoViewModel } from '../viewModels/aboutUsInfoViewModel';

import {
  BenefitsInfoItemViewModel,
  BenefitsInfoViewModel,
} from '../viewModels/benefitsInfoViewModel';
import {
  ClientReviewItemViewModel,
  ClientReviewsViewModel,
} from '../viewModels/clientReviewsViewModel';
import { GreetingWithImageViewModel } from '../viewModels/greetingWithImageViewModel';
import {
  IndustriesInfoItemViewModel,
  IndustriesInfoViewModel,
} from '../viewModels/industriesInfoViewModel';
import { MissionInfoWithOneImageViewModel } from '../viewModels/missionInfoWithOneImageViewModel';
import {
  MissionInfoWithTwoColumnItemViewModel,
  MissionInfoWithTwoColumnViewModel,
} from '../viewModels/missionInfoWithTwoColumnViewModel';
import {
  OurProjectInfoViewModel,
  OurProjectsInfoViewModel,
} from '../viewModels/ourProjectsInfoViewModel';
import { ProvideWithBlocksInfoViewModel } from '../viewModels/provideWithBlocksInfoViewModel';
import {
  TechnologiesInfoItemViewModel,
  TechnologiesInfoViewModel,
} from '../viewModels/technologiesInfoViewModel';
import { HowItWorkInfoViewModel } from '../viewModels/howItWorkInfoViewModel';
import { TransparentProcessInfoViewModel } from '../viewModels/transparentProcessInfoViewModel';
import { GreetingWithTextViewModel } from '../viewModels/greetingWithTextViewModel';
import { CaseheaderViewModel } from '../viewModels/caseHeaderViewModel';
import { ModalViewModel } from '../viewModels/modalviewModel';
import { ChallengeToSolutionViewModel } from '../viewModels/challengeToSolutionViewModel';
import { ProcessInfoViewModel } from '../viewModels/processInfo';
import {
  ProcessInfoStageViewModel,
  ProcessInfoWithDescriptionViewModel,
} from '../viewModels/processInfoWithDescription';
import { SketchesViewModel } from '../viewModels/sketchesviewModel';
import { WireframesViewModel } from '../viewModels/wireframesViewModel';
import { TypographyInfoViewModel } from '../viewModels/typographyInfoViewModel';
import { CaseIconsSetViewModel } from '../viewModels/caseIconsSetViewModel';
import { RoadMapViewModel } from '../viewModels/roadMapViewModel';
import { CaseResultViewModel } from '../viewModels/caseResultViewModel';
import { SketchesWireframesViewModel } from '../viewModels/sketchesWireframesViewModel';
import { WhatIsViewModel } from '../viewModels/whatIsViewModel';
import { ContactFormViewModal } from '../viewModels/contactFormViewModal';

export class PageMapService {
  defaultBg = '#FFFFFF';

  MapPage(pageApiModel: PageDetailApiModel): MasterPageViewModel {
    /*let vm = new MasterPageViewModel();

        vm.blocks = [];
        vm.blocks.push(new MasterPageBlockViewModel('GreetingWithText', new GreetingWithTextViewModel));
        vm.blocks.push(new MasterPageBlockViewModel('ProvideInfo', new ProvideInfoViewModel));
        vm.blocks.push(new MasterPageBlockViewModel('TransparentProcessInfo', new TransparentProcessInfoViewModel));
        vm.blocks.push(new MasterPageBlockViewModel('ShareDetailsInfo', new ShareDetailsInfoViewModel));
        vm.blocks.push(new MasterPageBlockViewModel('WhyDoUseInfo', new WhyDoUseInfoViewModel));
        vm.blocks.push(new MasterPageBlockViewModel('WhyDelegateInfo', new WhyDelegateInfoViewModel));
        vm.blocks.push(new MasterPageBlockViewModel('ContactUs', new ContactUsViewModel));

        return vm;
*/

    let result = new MasterPageViewModel();
    result.name = pageApiModel.title;
    result.blocks = pageApiModel.blocks.map((x) => this.MapPageBlock(x));

    return result;
  }

  MapPageBlock(
    blockApiModel: PageDetailBlockApiModel
  ): MasterPageBlockViewModel {
    let name = this.ConvertApiBlockNameToViewBlockName(blockApiModel.name);
    let vm = this.GetViewModelByName(name, blockApiModel.data);
    console.log(blockApiModel.data);
    
    let offsetMobile = blockApiModel.data?.offsetbottommobile ?? 0;
    let offsetDesktop = blockApiModel.data?.offsetbottomdesktop ?? 0;
    let backgroundColor = blockApiModel.data?.background ?? this.defaultBg;

    //console.log(`Page: ${name} Background: ${backgroundColor} BottomOffset: [${offsetDesktop},${offsetMobile}]`);

    let result = new MasterPageBlockViewModel(
      name,
      vm,
      offsetMobile,
      offsetDesktop,
      backgroundColor
    );

    return result;
  }

  CreateViewModelByName(name: string) {}

  ConvertApiBlockNameToViewBlockName(name: string): string {
    switch (name) {
      case 'aboutusinfo':
        return BlockComponentNames.ABOUTUSINFO;
      case 'benefitsinfo':
        return BlockComponentNames.BENEFITSINFO;
      case 'clientreviews':
        return BlockComponentNames.CLIENTREVIEWS;
      case 'contactus':
        return BlockComponentNames.CONTACTUS;

      case 'greetingwithimage':
        return BlockComponentNames.GREETINGWITHIMAGE;
      case 'greetingwithtext':
        return BlockComponentNames.GREETINGWITHTEXT;
      case 'howitworkinfo':
        return BlockComponentNames.HOWITWORKINFO;

      case 'industriesinfo':
        return BlockComponentNames.INDUSTRIESINFO;
      case 'missioninfowithoneimage':
        return BlockComponentNames.MISSIONINFOWITHONEIMAGE;
      case 'missioninfowithtwocolumn':
        return BlockComponentNames.MISSIONINFOWITHTWOCOLUMN;

      case 'ourprojectsinfo':
        return BlockComponentNames.OURPROJECTSINFO;
      case 'provideinfo':
        return BlockComponentNames.PROVIDEINFO;
      case 'providewithblocksinfo':
        return BlockComponentNames.PROVIDEWITHBLOCKSINFO;
      case 'sharedetailsinfo':
        return BlockComponentNames.SHAREDETAILSINFO;
      case 'shareaproject':
        return BlockComponentNames.SHAREDETAILSINFO;
      case 'technologiesinfo':
        return BlockComponentNames.TECHNOLOGIESINFO;

      case 'transparentprocessinfo':
        return BlockComponentNames.TRANSPARENTPROCESSINFO;
      case 'whydelegateinfo':
        return BlockComponentNames.WHYDELEGATEINFO;
      case 'whydelegateinfoviewmodel':
        return BlockComponentNames.WHYDELEGATEINFO;
      case 'whydouseinfoviewmodel':
        return BlockComponentNames.WHYDOUSEINFO;
      case 'caseheader':
        return BlockComponentNames.CASEHEADER;
      case 'challengetosolution':
        return BlockComponentNames.CHALLENGETOSOLUTION;
      case 'stages':
        return BlockComponentNames.PROCESSINFO;
      case 'sketches':
        return BlockComponentNames.SKETCHES;
      case 'wireframes':
        return BlockComponentNames.WIREFRAMES;
      case 'typographyinfo':
        return BlockComponentNames.TYPOGRAPHYINFO;
      case 'caseiconsset':
        return BlockComponentNames.CASEICONSET;
      case 'caseroadmap':
        return BlockComponentNames.CASEROADMAP;
      case 'caseresult':
        return BlockComponentNames.CASERESULT;
      case 'processinfowithdescription':
        return BlockComponentNames.PROCESSINFOWITHDESCRIPTION;
      case 'sketcheswireframes':
        return BlockComponentNames.SKETCHESWIREFRAMES;
      case 'whatis':
        return BlockComponentNames.WHATIS;
      case 'contactform':
        return BlockComponentNames.CONTACTFORM;

      default:
        throw `Block ${name} was not registered`;
    }
  }

  GetViewModelByName(name: string, data: any): any {
    switch (name) {
      case BlockComponentNames.ABOUTUSINFO:
        return this.GetAboutusinfo(data);
      case BlockComponentNames.BENEFITSINFO:
        return this.GetBenefitsinfo(data);
      case BlockComponentNames.CLIENTREVIEWS:
        return this.GetClientreviews(data);
      case BlockComponentNames.CONTACTUS:
        return this.GetContactus(data);
      case BlockComponentNames.GREETINGWITHIMAGE:
        return this.GetGreetingwithimage(data);
      case BlockComponentNames.GREETINGWITHTEXT:
        return this.GetGreetingwithtext(data);
      case BlockComponentNames.HOWITWORKINFO:
        return this.GetHowitworkinfo(data);
      case BlockComponentNames.INDUSTRIESINFO:
        return this.GetIndustriesinfo(data);
      case BlockComponentNames.MISSIONINFOWITHONEIMAGE:
        return this.GetMissioninfowithoneimage(data);
      case BlockComponentNames.MISSIONINFOWITHTWOCOLUMN:
        return this.GetMissioninfowithtwocolumn(data);
      case BlockComponentNames.OURPROJECTSINFO:
        return this.GetOurprojectsinfo(data);
      case BlockComponentNames.PROVIDEINFO:
        return this.GetProvideinfo(data);
      case BlockComponentNames.PROVIDEWITHBLOCKSINFO:
        return this.GetProvidewithblocksinfo(data);
      case BlockComponentNames.SHAREDETAILSINFO:
        return this.GetSharedetailsinfo(data);
      case BlockComponentNames.TECHNOLOGIESINFO:
        return this.GetTechnologiesinfo(data);
      case BlockComponentNames.TRANSPARENTPROCESSINFO:
        return this.GetTransparentprocessinfo(data);
      case BlockComponentNames.WHYDELEGATEINFO:
        return this.GetWhydelegateinfo(data);
      case BlockComponentNames.WHYDOUSEINFO:
        return this.GetWhydouseinfo(data);
      case BlockComponentNames.CASEHEADER:
        return this.GetCaseheader(data);
      case BlockComponentNames.CHALLENGETOSOLUTION:
        return this.GetChallengeToSolution(data);
      case BlockComponentNames.PROCESSINFO:
        return this.GetProcessInfo(data);
      case BlockComponentNames.SKETCHES:
        return this.GetSketches(data);
      case BlockComponentNames.WIREFRAMES:
        return this.GetWireframes(data);
      case BlockComponentNames.TYPOGRAPHYINFO:
        return this.GetTypographyInfo(data);
      case BlockComponentNames.CASEICONSET:
        return this.GetCaseIconsSet(data);
      case BlockComponentNames.CASEROADMAP:
        return this.GetCaseRoadMap(data);
      case BlockComponentNames.CASERESULT:
        return this.GetCaseResult(data);
      case BlockComponentNames.PROCESSINFOWITHDESCRIPTION:
        return this.GetProvideinfoWithDescription(data);
      case BlockComponentNames.SKETCHESWIREFRAMES:
        return this.GetSketchesWireframes(data);
      case BlockComponentNames.WHATIS:
        return this.GetWhatIs(data);
      case BlockComponentNames.CONTACTFORM:
        return this.GetContactForm(data);

      default:
        throw `Block ${name} was not registered`;
    }
  }

  GetPathForImage(path: string) {
    if (path.indexOf('http://') == 0 || path.indexOf('https://') == 0) {
      return path;
    } else {
      return `../../../../assets/Images/${path}`;
    }
  }

  //mainPage
  //AboutUsInfoViewModel doesn't have offsetbottomdesktop and offsetbottommobile prop
  GetAboutusinfo(data: any): any {
    let result = new AboutUsInfoViewModel();
    result.title = data.title;
    result.header = data.header;
    result.imageUrl = this.GetPathForImage(data.imageurl);
    result.description = data.description;
    result.iconUrl = this.GetPathForImage(data.icon);

    return result;
  }
  //offshore
  GetBenefitsinfo(data: any): any {
    let result = new BenefitsInfoViewModel();
    result.Header = data.title;
    result.Title = data.header;
    result.Content = [];
    data.content.forEach((e: any) => {
      const a: BenefitsInfoItemViewModel = {
        Title: e.title,
        Description: e.description,
      };
      result.Content.push(a);
    });

    return result;
  }
  //mainPage
  GetClientreviews(data: any): any {
    let result = new ClientReviewsViewModel();
    result.header = data.header;
    result.content = [];
    data.content.forEach((e: any) => {
      const a: ClientReviewItemViewModel = {
        reviewDescription: e.reviewdescription,
        clientName: e.clientname,
        clientCompany: e.clientcompany,
        clientImageUri: this.GetPathForImage(e.clientimage),
        description: e.description,
        link: e.link,
      };
      result.content.push(a);
    });

    return result;
  }
  //aboutus
  GetContactus(data: any): any {
    let result = new ContactUsViewModel();
    result.header = data.header;
    result.title = data.title;
    result.description = data.description;
    result.link = data.link;

    return result;
  }
  //mainPage
  GetGreetingwithimage(data: any): any {
    let result = new GreetingWithImageViewModel();
    result.title = data.header;
    result.firstParagraph = data.description;
    result.imageUri = this.GetPathForImage(data.imageurl);

    return result;
  }
  //aboutUs
  GetGreetingwithtext(data: any): any {
    let result = new GreetingWithTextViewModel();
    result.buttonText = data.buttontext;
    result.header = data.header;
    result.headerPreview = data.headerpreview;
    result.description = data.description;
    result.link = data.link;

    return result;
  }
  //offshore
  GetHowitworkinfo(data: any): any {
    let result = new HowItWorkInfoViewModel();
    result.header = data.header;
    result.link = data.link;
    result.content = [];
    data.content.forEach((e: any) => {
      result.content.push(e);
    });

    return result;
  }
  //mainPage
  GetIndustriesinfo(data: any): any {
    let result = new IndustriesInfoViewModel();
    result.btnName = data.btnname;
    result.header = data.header;
    result.link = data.link;
    result.content = [];

    data.content.forEach((e: any) => {
      const a: IndustriesInfoItemViewModel = {
        title: e.title,
        firstParagraph: e.description,
        link: e.link,
      };
      result.content.push(a);
    });

    return result;
  }
  //aboutUs
  GetMissioninfowithoneimage(data: any): any {
    let result = new MissionInfoWithOneImageViewModel();
    result.header = data.header;
    result.image = this.GetPathForImage(data.image);

    data.content.forEach((e: any) => {
      result.content.push(e.title);
    });

    return result;
  }
  //mainPage
  //MissionInfoWithTwoColumn data doesn't have firsttextblockinnerhtml and secondtextblockinnerhtml
  GetMissioninfowithtwocolumn(data: any): any {
    let result = new MissionInfoWithTwoColumnViewModel();
    result.title = data.header;
    result.children = [];
    data.content.forEach((e: any) => {
      const a: MissionInfoWithTwoColumnItemViewModel = {
        title: e.title,
        iconPath: this.GetPathForImage(e.imageurl),
        firstTextBlockInnerHtml: e.description,
      };
      result.children.push(a);
    });

    return result;
  }
  //mainPage
  GetOurprojectsinfo(data: any): any {
    let result = new OurProjectsInfoViewModel();
    result.content = [];
    result.header = data.header;
    data.content.forEach((e: any) => {
      const a: OurProjectInfoViewModel = {
        title: e.title,
        iconUrl: this.GetPathForImage(e.companyicon),
        description: e.description,
        client: e.client,
        industry: e.industry,
        employers: e.employers,
        link: e.link,
        imageUrl: this.GetPathForImage(e.imageurl),
      };
      result.content.push(a);
    });

    return result;
  }
  //developments
  GetProvideinfo(data: any): any {
    let result = new ProvideInfoViewModel();
    result.header = data.header;
    result.content = [];
    data.content.forEach((e: any) => {
      const a: ProvideInfoItemViewModel = {
        imageUrl: this.GetPathForImage(e.imageurl),
        title: e.title,
        description: e.description,
      };
      result.content.push(a);
    });

    return result;
  }
  //aboutUs
  GetProvidewithblocksinfo(data: any): any {
    let result = new ProvideWithBlocksInfoViewModel();
    result.header = data.header;
    result.imageUri = this.GetPathForImage(data.imageurl);
    result.content = [];
    data.content.forEach((e: any) => {
      const a: ProvideInfoItemViewModel = {
        imageUrl: e.imageurl,
        title: e.title,
        description: e.description,
      };
      result.content.push(a);
    });

    return result;
  }
  //aboutUs
  GetSharedetailsinfo(data: any): any {
    let result = new ShareDetailsInfoViewModel();
    result.buttonText = data.buttontext;
    result.header = data.header;
    result.descrption = data.description ?? data.descrption;
    result.linkAddress = data.link;

    return result;
  }
  //mainPage
  GetTechnologiesinfo(data: any): any {
    let result = new TechnologiesInfoViewModel();
    result.content = [];
    result.header = data.header;
    data.content.forEach((e: any) => {
      const a: TechnologiesInfoItemViewModel = {
        description: e.description,
        title: e.title,
        imageUrl: this.GetPathForImage(e.imageurl),
        link: e.link,
      };
      result.content.push(a);
    });

    return result;
  }
  //aboutUs
  GetTransparentprocessinfo(data: any): any {
    let result = new TransparentProcessInfoViewModel();
    result.header = data.header;
    result.imageUrl = this.GetPathForImage(data.imageurl);
    result.content = [];
    data.content.forEach((e: any) => {
      result.content.push(e);
    });

    return result;
  }
  //aboutUs
  GetWhydelegateinfo(data: any): any {
    let result = new WhyDelegateInfoViewModel();
    result.btnName = data.btnname;
    result.description = data.description;
    result.header = data.header;
    result.Link = data.link;
    result.content = [];
    data.content.forEach((e: any) => {
      const a: WhyDelegateInfoItemViewModel = {
        title: e.title,
        description: e.description,
        imageUrl: this.GetPathForImage(e.imageurl),
      };
      result.content.push(a);
    });

    return result;
  }
  //cloudDevelopment
  GetWhydouseinfo(data: any): any {
    let result = new WhyDoUseInfoViewModel();
    result.acrossModel.leftText = data.acrossmodel.lefttext;
    result.acrossModel.rightText = data.acrossmodel.righttext;
    result.acrossModel.topText = data.acrossmodel.toptext;
    result.acrossModel.bottomText = data.acrossmodel.bottomtext;
    result.header = data.header;
    result.content = [];
    data.content.forEach((e: any) => {
      result.content.push(e);
    });

    return result;
  }

  GetCaseheader(data: any): any {
    let res: CaseheaderViewModel = {
      btnName: data.btnname,
      description: data.description,
      logoBigUrl: this.GetPathForImage(data.logobigurl),
      logoSmallUrl: this.GetPathForImage(data.logosmallurl),
      modelViewModel: { imageUris: [] },
      title: data.title,
    };

    data.imageuris.forEach((x: any) => {
      res.modelViewModel.imageUris.push(this.GetPathForImage(x.uri));
    });

    return res;
  }

  GetChallengeToSolution(data: any): any {
    const res: ChallengeToSolutionViewModel = {
      challengeDescription: data.challengedescription,
      services: [],
      solutionDescription: data.solutiondescription,
    };

    data.services.forEach((x: any) => {
      res.services.push(x.service);
    });

    return res;
  }

  GetProcessInfo(data: any): any {
    const res: ProcessInfoViewModel = {
      title: data.title,
      stages: [],
    };

    data.stages.forEach((x: any) => {
      const temp: ProcessInfoStageViewModel = {
        title: x.title,
        stages: [],
      };
      if (x.stages.length > 1 && x.stages[0] != '') {
        x.stages.forEach((stage: string) => {
          temp.stages.push(stage);
        });
      }
      res.stages.push(temp);
    });

    return res;
  }

  GetSketches(data: any): any {
    const res: SketchesViewModel = {
      firstTitle: data.firsttitle,
      secondTitle: data.secondtitle,
      description: data.description,
      imgUrlDesctop: this.GetPathForImage(data.imgurldesctop),
      imgUrlMobile: this.GetPathForImage(data.imgurlmobile),
    };

    return res;
  }

  GetWireframes(data: any): any {
    const res: WireframesViewModel = {
      title: data.title,
      description: data.description,
      imgUrl: this.GetPathForImage(data.imgurl),
    };
    return res;
  }

  GetTypographyInfo(data: any): any {
    const res: TypographyInfoViewModel = {
      content: data.content,
      description: [],
      header: data.header,
      subHeader: data.sybheader,
      imageUrl: this.GetPathForImage(data.imageurl),
    };
    data.description.forEach((x: any) => {
      res.description.push(x.item);
    });

    return res;
  }

  GetCaseIconsSet(data: any): any {
    const res: CaseIconsSetViewModel = {
      title: data.title,
      description: data.description,
      imgDesctopUrl: this.GetPathForImage(data.imgdesctopurl),
      imgMobileUrl: this.GetPathForImage(data.imgmobileurl),
    };

    return res;
  }

  GetCaseRoadMap(data: any): any {
    const res: RoadMapViewModel = {
      content: [],
      title: data.title,
      modal: { imageUris: [] },
    };

    data.content.forEach((x: any) => {
      res.content.push({
        description1: x.description1,
        description2: x.description2,
        header: x.header,
        icon: this.GetPathForImage(x.icon),
        img: this.GetPathForImage(x.img),
      });
    });

    data.imageuris.forEach((x: any) => {
      res.modal.imageUris.push(this.GetPathForImage(x.uri));
    });

    return res;
  }

  GetCaseResult(data: any): any {
    const res: CaseResultViewModel = {
      title: data.title,
      descriptionLeft: data.descriptionleft,
      descriptionRight: data.descriptionright,
      iconArrowUrl: this.GetPathForImage(data.iconarrowurl),
      iconStarUrl: this.GetPathForImage(data.iconstarurl),
      imgUrlDesctop: this.GetPathForImage(data.imgurldesctop),
      imgUrlMobile: this.GetPathForImage(data.imgurlmobile),
    };

    return res;
  }

  GetProvideinfoWithDescription(data: any): any {
    const res: ProcessInfoWithDescriptionViewModel = {
      title: data.title,
      description: data.description,
      stages: [],
    };

    data.stages.forEach((x: any) => {
      const temp: ProcessInfoStageViewModel = {
        title: x.title,
        stages: [],
      };
      if (x.stages.length > 1 && x.stages[0] != '') {
        x.stages.forEach((stage: string) => {
          temp.stages.push(stage);
        });
      }
      res.stages.push(temp);
    });

    return res;
  }

  GetSketchesWireframes(data: any): any {
    const res: SketchesWireframesViewModel = {
      firstTitle: data.firsttitle,
      secondTitle: data.secondtitle,
      description1: data.description1,
      description2: data.description2,
      imgUrlDesctop: this.GetPathForImage(data.imgurldesctop),
      imgUrlMobile: this.GetPathForImage(data.imgurlmobile),
    };

    return res;
  }

  GetWhatIs(data: any): any {
    const res: WhatIsViewModel = { headerText: data.headertext, children: [] };

    data.children.forEach((child: any) => {
      res.children.push({
        title: child.title,
        description: child.description,
        imageUri: this.GetPathForImage(child.imageuri),
        uppercaseText: child.uppercasetext,
      });
    });

    return res;
  }

  GetContactForm(data: any): any {
    const res: ContactFormViewModal = {
      buttonText: data.buttontext,
      emailInputLabel: data.emailinputlabel,
      footerText: data.footertext,
      header: data.header,
      messageInputLabel: data.messageinputlabel,
      nameInputLabel: data.nameinputlabel,
      phoneInputLabel: data.phoneinputlabel,
      iconUrl: this.GetPathForImage(data.iconurl),
    };

    return res;
    console.log(data);
  }
}
