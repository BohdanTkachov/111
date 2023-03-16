import { Component, Input } from '@angular/core';
import { SmbCommercialInsurancePageViewModel } from 'src/app/viewModels/pages/smbCommercialInsurancePageViewModel';

@Component({
  selector: 'smbCommercialInsurancePage',
  templateUrl: './smbCommercialInsurancePage.component.html',
  styleUrls: ['./smbCommercialInsurancePage.component.css'],
})
export class SmbCommercialInsurancePageComponent {
  vm: SmbCommercialInsurancePageViewModel = new SmbCommercialInsurancePageViewModel();
}