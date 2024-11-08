import { Component, Input } from '@angular/core';
import { StaticFiles } from '../../staticFiles';
import { LanguageService } from '../../../modules/shared/language-selector/language.service';
import { ILanguage } from '../../../modules/shared/Models/language';
import { IMenuItem } from '../../../modules/shared/Models/menuIte';

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

  language: ILanguage[] = StaticFiles.languages;

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
