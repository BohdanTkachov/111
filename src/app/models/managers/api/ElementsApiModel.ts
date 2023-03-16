import { HeaderSelectionViewModel } from 'src/app/viewModels/headerViewModel';

export class ElementsApiModel {
  id: number;
  type: 'header' | 'footer' | 'contact_us';
  blocks: ElementBlockApiModel[];
}

export class ElementBlockApiModel {
  name: string;
  blockid: string;
  data: any;
}

export class ElementApiModel {
  header: ElementsApiModel;
  footer: ElementsApiModel;
  contact_us: ElementApiModel;
}
