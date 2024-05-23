import { Component, Input } from '@angular/core';
import { IMenuItem } from '../../Models/menuIte';
import { ILanguage } from '../../Models/language';
import { LanguageService } from '../../Services/language.service';
import { StaticFiles } from '../../staticFiles';

@Component({
  selector: 'app-top-offer',
  templateUrl: './top-offer.component.html',
  styleUrl: './top-offer.component.css',
})
export class TopOfferComponent {
  @Input() offer = 'Get 30% Off On Selected Items';
  currentCurrency = '$ Dollar';

  constructor(public languageService: LanguageService) {}

  currency: IMenuItem[] = [
    { id: 1, text: '$ Dollar' },
    { id: 2, text: '€ Euro' },
    { id: 3, text: '£ Pound' },
    { id: 4, text: '₾ Lari' },
  ];

  language: IMenuItem[] = [
    { id: 1, text: 'English', image: '../../assets/flags/gb-eng.svg' },
    { id: 2, text: 'Georgian', image: '../../assets/flags/ge.svg' },
  ];

  currencyChange(item: IMenuItem) {
    this.currentCurrency = item.text;
  }

  languageChange(item: ILanguage) {
    if (item.id == 1) {
      this.languageService.changeLanguage(StaticFiles.languages[0]);
    } else if (item.id == 2) {
      this.languageService.changeLanguage(StaticFiles.languages[1]);
    }
  }
}
