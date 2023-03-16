import { Component, Input } from '@angular/core';
import { WhyDoUseInfoViewModel } from 'src/app/viewModels/whyDoUseInfoViewModel';

@Component({
    selector: 'whyDoUseInfo',
    templateUrl: './whyDoUseInfo.component.html',
    styleUrls: ['./whyDoUseInfo.component.css']
})
export class WhyDoUseInfoComponent {
    @Input() vm: WhyDoUseInfoViewModel;

    constructor() { }
}
