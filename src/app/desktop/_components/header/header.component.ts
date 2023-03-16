import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener, Input, IterableDiffers } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsModalService } from 'src/app/services/modals/ContactUsModalService';
import {
  HeaderSelectionViewModel,
  HeaderViewModel,
} from 'src/app/viewModels/headerViewModel';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('hamburguerX', [
      state('hamburguer', style({})),
      state(
        'topX',
        style({
          transform: 'rotate(45deg)',
          transformOrigin: 'left',
          margin: '8 0px',
        })
      ),
      state(
        'bottomX',
        style({
          transform: 'rotate(-45deg)',
          transformOrigin: 'left',
          margin: '8px 0px',
        })
      ),
      transition('* => *', [animate('0.2s')]),
    ]),
  ],
})
export class HeaderComponent {
  @Input() vm!: HeaderViewModel;
  title = 'threeunits';

  constructor(
    private contactUsModalService: ContactUsModalService,
    private router: Router
  ) {}

  openModal() {
    this.contactUsModalService.show();
  }

  isAnySelectedSelection = false;
  selectedSelection = new HeaderSelectionViewModel();
  isFixedDropDown = false;
  selectionsHovered = false;
  isAnyHovered = false;

  // flag be consumed by the template
  isHamburguer = true;
  isWhiteTheme: boolean = true;

  isInArea: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    this.calculateHeaderColorByScroll();
  }

  onClick() {
    this.isHamburguer = !this.isHamburguer;
    this.isAnySelectedSelection = false;

    if (this.isHamburguer) {
      this.calculateHeaderColorByScroll();
    } else {
      this.isWhiteTheme = true;
    }
  }

  /* OPEN/CLOSE DESKTOP MENU */
  onSelectionClick(selection: HeaderSelectionViewModel) {
    if (selection.title != 'About us') {
      if (
        this.selectedSelection.title == selection.title &&
        this.isFixedDropDown
      ) {
        this.closeSelections();
      } else {
        this.selectedSelection = selection;
        this.isFixedDropDown = true;
      }
    } else {
      this.router.navigateByUrl('/about_us_page').then(() => {
        window.location.reload();
        window.scrollTo(0, 0);
      });
    }
  }

  onSelectionClickMobile(selection: HeaderSelectionViewModel) {
    if (selection.title != 'About us') {
      this.isAnySelectedSelection = true;
      this.selectedSelection = selection;
    } else {
      this.router
        .navigateByUrl('/about_us_page')
        .then(() => window.location.reload());
    }
  }

  onSelectionHover(selection: HeaderSelectionViewModel) {
    if (selection.title != 'About us') {
      this.selectionsHovered = true;
      this.isAnyHovered = true;
      if (!this.isFixedDropDown) {
        this.selectedSelection = selection;
        this.isAnySelectedSelection = true;
        this.isWhiteTheme = true;
      }
    }
  }

  backClickHandler() {
    this.isAnySelectedSelection = false;
  }

  closeSelections() {
    this.isAnySelectedSelection = false;
    this.selectedSelection = new HeaderSelectionViewModel();
    this.isFixedDropDown = false;
  }

  setSelectionsHovered(val: boolean) {
    if (this.selectionsHovered === val) return;
    this.selectionsHovered = val;

    if (!this.isFixedDropDown && !val) {
      setTimeout(() => {
        if (!this.selectionsHovered) {
          this.isAnySelectedSelection = false;
          this.selectedSelection = new HeaderSelectionViewModel();
          this.calculateHeaderColorByScroll();
        }
      }, 100);
    }
  }

  closeSelectionsMouseLeave(selection: HeaderSelectionViewModel) {
    this.selectionsHovered = false;
    setTimeout(() => {
      this.isAnyHovered = false;
      if (
        !this.selectionsHovered &&
        !this.isFixedDropDown &&
        this.selectedSelection.title == selection.title &&
        this.isAnySelectedSelection &&
        !this.isAnyHovered
      ) {
        this.isAnySelectedSelection = false;
        this.selectedSelection = new HeaderSelectionViewModel();
      }
      this.calculateHeaderColorByScroll();
    }, 300);
  }

  /* CHANGE OF HEADER COLOR */
  calculateHeaderColorByScroll() {
    const scrollPosition = window.scrollY;
    this.calculateHeaderColor(scrollPosition);
  }

  calculateHeaderColor(scrollPosition: number): void {
    if (this.isAnySelectedSelection || !this.isHamburguer) return;

    const blockName = 'page-content-block';
    const blocks = document.getElementsByClassName(blockName);

    for (let i = 0; i < blocks.length; i++) {
      if (this.isElementInArea(blocks[i], scrollPosition)) {
        const block: any = blocks[i];
        const backgroundColor = block.style.background;

        // todo: Set the resulting color to the header
        // the color of the text is determined from two options dark / light
        if (backgroundColor == 'rgb(17, 29, 25)') this.isWhiteTheme = false;
        else this.isWhiteTheme = true;
      }
    }
  }

  isElementInArea(target: Element, scrollPosition: number): boolean {
    const top = scrollPosition + 40;
    const bottom = scrollPosition - 40;
    const targetTop = window.pageYOffset + target.getBoundingClientRect().top;
    const targetBottom =
      window.pageYOffset + target.getBoundingClientRect().bottom;

    return targetTop < top && targetBottom > bottom;
  }
}
