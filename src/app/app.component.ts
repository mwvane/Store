import { Component, HostListener, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { AuthService } from './core/Services/auth.service';
import { SidePanelService } from '../modules/admin/services/side-panel.service';
import { IMenuItem } from '../modules/shared/Models/menuIte';
import { IForm } from '../modules/form/models/form.interface';
import { FormValidator } from '../modules/form/enum/form.validator-enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  scrollToUp: boolean = false;
  
  constructor(
    private viewportScroller: ViewportScroller,
    public authService: AuthService,
    public sideBarService: SidePanelService
  ) {}
  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

  onWindowScroll() {
    this.scrollToUp = window.pageYOffset >= 100;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.onWindowScroll.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onWindowScroll.bind(this));
  }
  currency: IMenuItem[] = [
    { id: 1, text: 'Dollar', icon: 'bi bi-currency-dollar' },
    { id: 2, text: 'Euro', icon: 'bi bi-currency-euro' },
    { id: 3, text: 'Pound', icon: 'bi bi-currency-pound' },
  ];

  title = 'store_front';

  currencyChange(item: IMenuItem) {
    alert(item.text);
  }
}
