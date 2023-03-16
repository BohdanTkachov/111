import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactusComponent } from './desktop/_components/contactus/contactus.component';
import { FooterComponent } from './desktop/_components/footer/footer.component';
import { HeaderComponent } from './desktop/_components/header/header.component';
import { ButtonGreenLargeComponent } from './desktop/_components/buttonGreen/buttonGreen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProvideInfoComponent } from './desktop/_components/provideInfo/provideInfo.component';
import { SafeHtmlPipe } from './pipes/SafeHtmlPipe';
import { MissionInfoWithTwoColumnItemComponent } from './desktop/_components/missionInfoWithTwoColumn/missionInfoWithTwoColumnItem/missionInfoWithTwoColumnItem.component';
import { MissionInfoWithTwoColumnComponent } from './desktop/_components/missionInfoWithTwoColumn/missionInfoWithTwoColumn.component';
import { GreetingWithImageComponent } from './desktop/_components/greetingWithImage/greetingWithImage.component';
import { OurProjectsInfoComponent } from './desktop/_components/ourProjectsInfo/ourProjectsInfo.component';
import { OurProjectInfoComponent } from './desktop/_components/ourProjectsInfo/ourProjectInfo/ourProjectInfo.component';
import { MissionInfoWithOneImageComponent } from './desktop/_components/missionInfoWithOneImage/missionInfoWithOneImage.component';
import { AboutUsInfoComponent } from './desktop/_components/aboutUsInfo/aboutUsInfo.component';
import { TechnologiesInfoComponent } from './desktop/_components/technologiesInfo/technologiesInfo.component';
import { TechnologiesInfoItemComponent } from './desktop/_components/technologiesInfo/technologiesInfoItem/technologiesInfoItem.component';
import { ShareDetailsInfoComponent } from './desktop/_components/shareDetailsInfo/shareDetailsInfo.component';
import { WhyDelegateInfoComponent } from './desktop/_components/whyDelegateInfo/whyDelegateInfo.component';
import { GreetingWithTextComponent } from './desktop/_components/greetingWithText/greetingWithText.component';
import { MainPageComponent } from './desktop/mainPage/mainPage.component';
import { HowItWorkInfoComponent } from './desktop/_components/howItWorkInfo/howItWorkInfo.component';
import { BenefitsInfoComponent } from '../app/desktop/_components/benefitsInfo/benefitsInfo.component';
import { TransparentProcessInfoComponent } from './desktop/_components/transparentProcessInfo/transparentProcessInfo.component';
import { WhyDoUseInfoComponent } from './desktop/_components/whyDoUseInfo/whyDoUseInfo.component';
import { ClientReviewsComponent } from './desktop/_components/clientReviews/clientReviews.component';
import { ClientReviewItemComponent } from './desktop/_components/clientReviews/clientReviewItem/clientReviewItem.component';
import { ButtonBottomBorderGreenWithArrowComponent } from './desktop/_components/buttonBottomBorderGreenWithArrow/buttonBottomBorderGreenWithArrow.component';
import { ProvideWithBlocksInfoComponent } from './desktop/_components/provideWithBlocksInfo/provideWithBlocksInfo.component';
import { ProvideWithBlocksInfoItemComponent } from './desktop/_components/provideWithBlocksInfo/provideWithBlocksInfoItem/provideWithBlocksInfoItem.component';
import { ButtonGreenWithArrowComponent } from './desktop/_components/buttonGreenWithArrow/buttonGreenWithArrow.component';
import { AboutUsPageComponent } from './desktop/aboutUsPage/aboutUsPage.component';
import { OffshoreDedicatedPageComponent } from './desktop/offshoreDedicatedPage/offshoreDedicatedPage.component';
import { NodeJsPageComponent } from './desktop/nodeJsPage/nodeJsPage.component';
import { RealEstatePageComponent } from './desktop/realEstatePage/realEstatePage.component';
import { MasterPageComponent } from './desktop/masterPage/masterPage.component';
import { FlutterPageComponent } from './desktop/flutterPage/flutterPage.component';
import { AppDevelopmentPageComponent } from './desktop/appDevelopmentPage/appDevelopmentPage.component';
import { CloudDevelopmentPageComponent } from './desktop/cloudDevelopmentPage/cloudDevelopmentPage.component';
import { WebDevelopmentPageComponent } from './desktop/webDevelopmentPage/webDevelopmentPage.component';
import { HealthcarePageComponent } from './desktop/healthcarePage/healthcarePage.component';
import { CustomDevelopmentPageComponent } from './desktop/customDevelopmentPage/customDevelopmentPage.component';
import { WhyDelegateInfoItemComponent } from './desktop/_components/whyDelegateInfo/whyDelegateInfoItem/whyDelegateInfoItem.component';
import { SmbCommercialInsurancePageComponent } from './desktop/smbCommercialInsurancePage/smbCommercialInsurancePage.component';
import { SolutionsHeaderComponent } from './desktop/_components/solutionsHeader/solutionsHeader.component';
import { ServicesHeaderComponent } from './desktop/_components/servicesHeader/servicesHeader.component';
import { BlogHeaderComponent } from './desktop/_components/blogHeader/blogHeader.component';
import { IndustriesHeaderComponent } from './desktop/_components/industriesHeader/industriesHeader.component';
import { CaseStudiesHeaderComponent } from './desktop/_components/caseStudiesHeader/caseStudiesHeader.component';
import { TechnologiesMenuComponent } from './desktop/_components/technologiesMenu/technologiesMenu.component';
import { PageApiRouteManager } from './managers/api/pageApiRouteManager';
import { PageApiManager } from './managers/api/pageApiManager';
import { MasterPageViewModel } from './viewModels/pages/masterPageViewModel';
import { MasterPageBlockComponent } from './desktop/masterPage/masterPageBlock/masterPageBlock.component';
import { PageService } from './services/pageService';
import { PageMapService } from './services/pageMapService';
import { ContactUsModalComponent } from './desktop/_components/contactUsModal/contactUsModal.component';
import { ContactUsModalService } from './services/modals/ContactUsModalService';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CaseHeaderComponent } from './desktop/_components/caseHeader/caseHeader.component';
import { CommonModule } from '@angular/common';
import { IndustriesInfoComponent } from './desktop/_components/industriesInfo/IndustriesInfo.component';
import { CaseIconsSetComponent } from './desktop/_components/caseIconsSet/caseIconsSet.component';
import { TypographyInfoComponent } from './desktop/_components/typographyInfo/typographyInfo.component';
import { WireframesComponent } from './desktop/_components/wireframes/wireframes.component';
import { ElementsApiManager } from './managers/api/elementsApiManager';
import { ElementsService } from './services/elementsService';
import { HeaderViewModel } from './viewModels/headerViewModel';
import { FooterViewModel } from './viewModels/footerViewModel';
import { ElementsMapService } from './services/elementsMapService';
import { TestPageComponent } from './desktop/testPage/testPage.component';

import { ProcessInfoComponent } from './desktop/_components/processInfo/processInfo.component';
import { ProcessInfoWithDescriptionComponent } from './desktop/_components/processInfoWithDescription/processInfoWithDescription.component';
import { SketchesComponent } from './desktop/_components/sketches/sketches.component';
import { ChallengeToSolutionComponent } from './desktop/_components/сhallengeToSolution/сhallengeToSolution.component';
import { CaseResultComponent } from './desktop/_components/caseResult/caseResult.component';
import { ModalCaseHeaderComponent } from './desktop/_components/modal/modalCaseHeader.component';
import { RoadMapComponent } from './desktop/_components/roadMap/roadMap.component';
import { RoadMapItemComponent } from './desktop/_components/roadMap/roadMapItem/roadMapItem.component';
import { SketchesWireframesComponent } from './desktop/_components/sketchesWireframes/sketchesWireframes.component';
import { WhatIsComponent } from './desktop/_components/whatIs/whatIs.component';
import { WhatIsChildComponent } from './desktop/_components/whatIs/whatIsChild/whatIsChild.component';
import { ContactFormComponent } from './desktop/_components/contactForm/contactForm.component';
import { ContactUsModalViewModal } from './viewModels/contactUsModalViewModal';
@NgModule({
  declarations: [
    SafeHtmlPipe,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    ButtonGreenLargeComponent,
    ButtonGreenWithArrowComponent,
    GreetingWithImageComponent,
    MissionInfoWithTwoColumnComponent,
    MissionInfoWithTwoColumnItemComponent,
    OurProjectsInfoComponent,
    OurProjectInfoComponent,
    MissionInfoWithOneImageComponent,
    AboutUsInfoComponent,
    TechnologiesInfoComponent,
    TechnologiesInfoItemComponent,
    IndustriesInfoComponent,
    ShareDetailsInfoComponent,
    WhyDelegateInfoComponent,
    MainPageComponent,
    GreetingWithTextComponent,
    HowItWorkInfoComponent,
    ProvideInfoComponent,
    BenefitsInfoComponent,
    TransparentProcessInfoComponent,
    WhyDoUseInfoComponent,
    ClientReviewsComponent,
    ClientReviewItemComponent,
    ProvideWithBlocksInfoComponent,
    ButtonBottomBorderGreenWithArrowComponent,
    ProvideWithBlocksInfoItemComponent,
    AboutUsPageComponent,
    OffshoreDedicatedPageComponent,
    ProvideWithBlocksInfoItemComponent,
    AboutUsPageComponent,
    NodeJsPageComponent,
    WhyDelegateInfoItemComponent,
    RealEstatePageComponent,
    FlutterPageComponent,
    AppDevelopmentPageComponent,
    CloudDevelopmentPageComponent,
    WebDevelopmentPageComponent,
    HealthcarePageComponent,
    CustomDevelopmentPageComponent,
    SmbCommercialInsurancePageComponent,
    ServicesHeaderComponent,
    SolutionsHeaderComponent,
    ServicesHeaderComponent,
    SolutionsHeaderComponent,
    IndustriesHeaderComponent,
    CaseStudiesHeaderComponent,
    TechnologiesMenuComponent,
    TechnologiesMenuComponent,
    IndustriesHeaderComponent,
    BlogHeaderComponent,
    MasterPageComponent,
    ModalCaseHeaderComponent,
    ContactUsModalComponent,
    MasterPageBlockComponent,
    TypographyInfoComponent,
    CaseHeaderComponent,
    ChallengeToSolutionComponent,
    TestPageComponent,
    WireframesComponent,
    ProcessInfoComponent,
    ProcessInfoWithDescriptionComponent,
    SketchesComponent,
    CaseResultComponent,
    CaseIconsSetComponent,
    RoadMapComponent,
    RoadMapItemComponent,
    SketchesWireframesComponent,
    WhatIsComponent,
    WhatIsChildComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [
    PageApiRouteManager,
    PageApiManager,
    MasterPageViewModel,
    PageService,
    PageMapService,
    ContactUsModalService,
    ElementsApiManager,
    ElementsService,
    HeaderViewModel,
    FooterViewModel,
    ElementsMapService,
    ContactUsModalViewModal
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
