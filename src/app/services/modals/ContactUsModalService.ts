export class ContactUsModalService {
  constructor() {}

  show() {
    let modalClasses = document.getElementById('modal')!.className;

    modalClasses = modalClasses.replace('hidden', 'show');

    document.getElementById('modal')!.className = modalClasses;
  }

  hide() {
    let modalClasses = document.getElementById('modal')!.className;

    modalClasses = modalClasses.replace('show', 'hidden');

    document.getElementById('modal')!.className = modalClasses;
  }
}
