import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from './language-selector/language.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { IMenuItem } from './Models/menuIte';
import { ViewportScroller } from '@angular/common';
import { IProduct } from './Models/product';
import { ModalService } from './Services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  scrollToUp: boolean = false;
  constructor(private viewportScroller: ViewportScroller) {}
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
