import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GreetingWithTextViewModel } from 'src/app/viewModels/greetingWithTextViewModel';

@Component({
  selector: 'greetingWithText',
  templateUrl: './greetingWithText.component.html',
  styleUrls: ['./greetingWithText.component.css'],
})
export class GreetingWithTextComponent {
  @Input() vm!: GreetingWithTextViewModel;
  @Input() paddingBottom: string = '0';

  constructor(private router: Router) {}

  isMainPage = this.router.url == '/';
}
