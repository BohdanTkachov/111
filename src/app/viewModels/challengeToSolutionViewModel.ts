export class ChallengeToSolutionViewModel {
  challengeDescription: string;
  solutionDescription: string;
  services: string[];
  constructor() {
    this.challengeDescription =
      "<p>The 111 Minutes team had to create an MVP of an app <br><span style='color:#38BC64'>where users can choose interesting places nearby.</span></p><p>We needed to build an application that looks flat <br>and modern, as well as provides map integration.</p><p>It was expected to be a native iOS app that <br>is responsive and meets all client needs.</p><p>One more objective is that an application shouldn’t contain any malicious code to extract, share or distribute information.</p>";
    this.solutionDescription =
      "<p>Spotr is an <span style='color:#38BC64'>app</span> that helps travelers <span style='color:#38BC64'>choose places to go</span> <br>in the area, including museums, restaurants and nightclubs.</p><p>After picking some locations, Spotr builds a route <br>to each place using Google Maps.</p>";
    this.services = [
      'Consulting',
      'Visual Design',
      'Identity ',
      'Product Vision',
      'UX & UI Design',
      'iOS Development',
      'Product Strategy',
      'Interaction Design',
    ];
  }
}
// <span style='color:#38BC64'></span>
