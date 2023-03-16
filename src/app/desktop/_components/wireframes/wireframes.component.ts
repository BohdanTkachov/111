import { Component, Input } from '@angular/core';
import { WireframesViewModel } from 'src/app/viewModels/wireframesViewModel';

@Component({
    selector: 'wireframes',
    templateUrl: './wireframes.component.html',
    styleUrls: ['./wireframes.component.css']
})
export class WireframesComponent {
@Input() vm:WireframesViewModel=new WireframesViewModel();
    constructor() { }
}
