import { Component, Input } from '@angular/core';
import { StaticFiles } from '../../../app/staticFiles';
import { ILanguage } from '../Models/language';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css',
})
export class LanguageSelectorComponent {
  @Input() languages: ILanguage[] = StaticFiles.languages;
  @Input() closeParent: boolean = true;
  constructor(public languageService: LanguageService) {}
}
