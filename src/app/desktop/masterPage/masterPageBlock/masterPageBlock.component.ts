import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { BlockComponentNames } from 'src/app/models/enums';
import { MasterPageBlockViewModel } from 'src/app/viewModels/pages/masterPageViewModel';
import { AboutUsInfoComponent } from '../../_components/aboutUsInfo/aboutUsInfo.component';
import { BenefitsInfoComponent } from '../../_components/benefitsInfo/benefitsInfo.component';
import { CaseHeaderComponent } from '../../_components/caseHeader/caseHeader.component';
import { CaseIconsSetComponent } from '../../_components/caseIconsSet/caseIconsSet.component';
import { CaseResultComponent } from '../../_components/caseResult/caseResult.component';
import { ClientReviewsComponent } from '../../_components/clientReviews/clientReviews.component';
import { ContactFormComponent } from '../../_components/contactForm/contactForm.component';
import { ContactusComponent } from '../../_components/contactus/contactus.component';
import { GreetingWithImageComponent } from '../../_components/greetingWithImage/greetingWithImage.component';
import { GreetingWithTextComponent } from '../../_components/greetingWithText/greetingWithText.component';
import { HowItWorkInfoComponent } from '../../_components/howItWorkInfo/howItWorkInfo.component';
import { IndustriesInfoComponent } from '../../_components/industriesInfo/IndustriesInfo.component';

import { MissionInfoWithOneImageComponent } from '../../_components/missionInfoWithOneImage/missionInfoWithOneImage.component';
import { MissionInfoWithTwoColumnComponent } from '../../_components/missionInfoWithTwoColumn/missionInfoWithTwoColumn.component';
import { OurProjectsInfoComponent } from '../../_components/ourProjectsInfo/ourProjectsInfo.component';
import { ProcessInfoComponent } from '../../_components/processInfo/processInfo.component';
import { ProcessInfoWithDescriptionComponent } from '../../_components/processInfoWithDescription/processInfoWithDescription.component';
import { ProvideInfoComponent } from '../../_components/provideInfo/provideInfo.component';
import { ProvideWithBlocksInfoComponent } from '../../_components/provideWithBlocksInfo/provideWithBlocksInfo.component';
import { RoadMapComponent } from '../../_components/roadMap/roadMap.component';
import { ShareDetailsInfoComponent } from '../../_components/shareDetailsInfo/shareDetailsInfo.component';
import { SketchesComponent } from '../../_components/sketches/sketches.component';
import { SketchesWireframesComponent } from '../../_components/sketchesWireframes/sketchesWireframes.component';
import { TechnologiesInfoComponent } from '../../_components/technologiesInfo/technologiesInfo.component';
import { TransparentProcessInfoComponent } from '../../_components/transparentProcessInfo/transparentProcessInfo.component';
import { TypographyInfoComponent } from '../../_components/typographyInfo/typographyInfo.component';
import { WhatIsComponent } from '../../_components/whatIs/whatIs.component';
import { WhyDelegateInfoComponent } from '../../_components/whyDelegateInfo/whyDelegateInfo.component';
import { WhyDoUseInfoComponent } from '../../_components/whyDoUseInfo/whyDoUseInfo.component';
import { WireframesComponent } from '../../_components/wireframes/wireframes.component';
import { ChallengeToSolutionComponent } from '../../_components/сhallengeToSolution/сhallengeToSolution.component';

@Component({
  selector: 'masterPageBlock',
  templateUrl: './masterPageBlock.component.html',
  styleUrls: ['./masterPageBlock.component.css'],
})
export class MasterPageBlockComponent {
  @Input() vm: MasterPageBlockViewModel;

  @ViewChild('views', { read: ViewContainerRef })
  views: ViewContainerRef;
  constructor() {}

  async ngAfterViewInit() {
    let component: any = this.GetComponent(this.vm.name);
    component.instance.vm = this.vm.vm;
  }

  private GetComponent(name: string): any {
    switch (name) {
      case BlockComponentNames.ABOUTUSINFO:
        return this.views.createComponent(AboutUsInfoComponent);
      case BlockComponentNames.BENEFITSINFO:
        return this.views.createComponent(BenefitsInfoComponent);
      case BlockComponentNames.CLIENTREVIEWS:
        return this.views.createComponent(ClientReviewsComponent);
      case BlockComponentNames.CONTACTUS:
        return this.views.createComponent(ContactusComponent);
      case BlockComponentNames.GREETINGWITHIMAGE:
        return this.views.createComponent(GreetingWithImageComponent);
      case BlockComponentNames.GREETINGWITHTEXT:
        return this.views.createComponent(GreetingWithTextComponent);
      case BlockComponentNames.HOWITWORKINFO:
        return this.views.createComponent(HowItWorkInfoComponent);
      case BlockComponentNames.INDUSTRIESINFO:
        return this.views.createComponent(IndustriesInfoComponent);
      case BlockComponentNames.MISSIONINFOWITHONEIMAGE:
        return this.views.createComponent(MissionInfoWithOneImageComponent);
      case BlockComponentNames.MISSIONINFOWITHTWOCOLUMN:
        return this.views.createComponent(MissionInfoWithTwoColumnComponent);
      case BlockComponentNames.OURPROJECTSINFO:
        return this.views.createComponent(OurProjectsInfoComponent);
      case BlockComponentNames.PROVIDEINFO:
        return this.views.createComponent(ProvideInfoComponent);
      case BlockComponentNames.PROVIDEWITHBLOCKSINFO:
        return this.views.createComponent(ProvideWithBlocksInfoComponent);
      case BlockComponentNames.SHAREDETAILSINFO:
        return this.views.createComponent(ShareDetailsInfoComponent);
      case BlockComponentNames.TECHNOLOGIESINFO:
        return this.views.createComponent(TechnologiesInfoComponent);
      case BlockComponentNames.TRANSPARENTPROCESSINFO:
        return this.views.createComponent(TransparentProcessInfoComponent);
      case BlockComponentNames.WHYDELEGATEINFO:
        return this.views.createComponent(WhyDelegateInfoComponent);
      case BlockComponentNames.WHYDOUSEINFO:
        return this.views.createComponent(WhyDoUseInfoComponent);
      case BlockComponentNames.CASEHEADER:
        return this.views.createComponent(CaseHeaderComponent);
      case BlockComponentNames.CHALLENGETOSOLUTION:
        return this.views.createComponent(ChallengeToSolutionComponent);
      case BlockComponentNames.PROCESSINFO:
        return this.views.createComponent(ProcessInfoComponent);
      case BlockComponentNames.SKETCHES:
        return this.views.createComponent(SketchesComponent);
      case BlockComponentNames.WIREFRAMES:
        return this.views.createComponent(WireframesComponent);
      case BlockComponentNames.TYPOGRAPHYINFO:
        return this.views.createComponent(TypographyInfoComponent);
      case BlockComponentNames.CASEICONSET:
        return this.views.createComponent(CaseIconsSetComponent);
      case BlockComponentNames.CASEROADMAP:
        return this.views.createComponent(RoadMapComponent);
      case BlockComponentNames.CASERESULT:
        return this.views.createComponent(CaseResultComponent);
      case BlockComponentNames.PROCESSINFOWITHDESCRIPTION:
        return this.views.createComponent(ProcessInfoWithDescriptionComponent);
      case BlockComponentNames.SKETCHESWIREFRAMES:
        return this.views.createComponent(SketchesWireframesComponent);
      case BlockComponentNames.WHATIS:
        return this.views.createComponent(WhatIsComponent);
      case BlockComponentNames.CONTACTFORM:
        return this.views.createComponent(ContactFormComponent);

      default:
        throw `Block component '${name}' was not registered`;
    }
  }
}
