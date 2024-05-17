import { ILanguage } from "./Models/language";

export class StaticFiles {
  static languages: ILanguage[] = [
    { id: 1, name: 'English', shortName: 'ENG', code: 'en' },
    { id: 2, name: 'Georgian', shortName: 'GEO', code: 'ge' },
  ];
}
