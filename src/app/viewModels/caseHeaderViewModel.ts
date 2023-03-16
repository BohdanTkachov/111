import { ModalViewModel } from './modalviewModel';

export class CaseheaderViewModel {
  title: string;
  description: string;
  btnName: string;
  logoBigUrl: string;
  logoSmallUrl: string;
  modelViewModel: ModalViewModel = new ModalViewModel();
  constructor() {
  this.title= 'Case study';
  this.description='Enhance travel experience by planning trips easily';
  this.btnName='GET A QUOTE';
  this.logoBigUrl='../../../../assets/Images/caseheaderBig.png';
  this.logoSmallUrl='../../../../assets/Images/caseHeaderSmall.png';
  }
}
