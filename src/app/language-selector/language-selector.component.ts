import { Component, Input, inject } from '@angular/core';
import { ILanguage } from '../Models/language';
import { StaticFiles } from '../staticFiles';
import { LanguageService } from '../Services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  @Input() languages: ILanguage[] = StaticFiles.languages

  constructor(public languageService: LanguageService){}
  
  onLanguageChange() {
    for (let i = 0; i < this.languages.length; i++) {
      if (this.languageService.selectedLanguage().id == this.languages[i].id) {
        if (i <= this.languages.length - 2){
          this.languageService.changeLanguage(this.languages[i + 1])
        }
        else{
          this.languageService.changeLanguage(this.languages[0])
        }
        break
      }
    }
  }
}
