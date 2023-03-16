import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterPageComponent } from './desktop/masterPage/masterPage.component';
import { TestPageComponent } from './desktop/testPage/testPage.component';

const routes: Routes = [
  /*{ path: '', component: MainPageComponent },
  { path: 'aboutus', component: AboutUsPageComponent },
  { path: 'nodejs', component: NodeJsPageComponent },
  { path: 'realestate', component: RealEstatePageComponent },
  { path: 'flutter', component: FlutterPageComponent },
  { path: 'appdev', component: AppDevelopmentPageComponent },
  { path: 'clouddev', component: CloudDevelopmentPageComponent },
  { path: 'webdev', component: WebDevelopmentPageComponent },
  { path: 'healthcare', component: HealthcarePageComponent },
  { path: 'offshore', component: OffshoreDedicatedPageComponent },
  { path: 'customdev', component: CustomDevelopmentPageComponent },
  { path: 'cominsurance', component: SmbCommercialInsurancePageComponent },*/
  // { path: 'test', component: TestPageComponent },
  { path: '**', component: MasterPageComponent },
  /* CURRENT PAGES:
    web_development_page
    smb_commercial_insurance_page
    real_estate_page
    offshore_dedicated_page
    node_js_page
    main_page
    helthcare_page
    flutter_page
    custom_development_page
    cloud_development_page
    about_us_page
  */
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
