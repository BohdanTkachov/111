import { Component } from '@angular/core';
import { ChallengeToSolutionViewModel } from 'src/app/viewModels/challengeToSolutionViewModel';

@Component({
  selector: 'challengeToSolution',
  templateUrl: './сhallengeToSolution.component.html',
  styleUrls: ['./сhallengeToSolution.component.css'],
})
export class ChallengeToSolutionComponent {
  vm: ChallengeToSolutionViewModel = new ChallengeToSolutionViewModel();
}
