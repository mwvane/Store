import { Injectable, OnInit, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from '../../Models/language';
import { StaticFiles } from '../../staticFiles';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  languages: ILanguage[] = [
    {
      id: 1,
      name: 'English',
      shortName: 'ENG',
      code: 'en',
      image: '../../assets/flags/gb-eng.svg',
    },
    {
      id: 2,
      name: 'Georgian',
      shortName: 'GEO',
      code: 'ge',
      image: '../../assets/flags/ge.svg',
    },
  ];

  selectedLanguage = signal<ILanguage>(this.getCurrentLanguage());

  changeLanguage(language: ILanguage) {
    localStorage.setItem('language', JSON.stringify(language));
    this.selectedLanguage.set(language);
    this.translate.use(language.code);
  }

  getCurrentLanguage() {
    var lang = localStorage.getItem('language');
    if (lang) {
      return JSON.parse(lang);
    } else {
      return this.languages[0];
    }
  }

  constructor(public translate: TranslateService) {
    this.changeLanguage(this.getCurrentLanguage());
  }
}
