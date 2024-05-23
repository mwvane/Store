import { ILanguage } from "./Models/language";

export class StaticFiles {
  static languages: ILanguage[] = [
    { id: 1, name: 'English', shortName: 'ENG', code: 'en', image: '../../assets/flags/gb-eng.svg', },
    { id: 2, name: 'Georgian', shortName: 'GEO', code: 'ge', image: '../../assets/flags/ge.svg', },
  ];
}
