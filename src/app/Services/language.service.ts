import { Injectable, OnInit, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ILanguage } from '../Models/language';
import { StaticFiles } from '../staticFiles';

@Injectable({
  providedIn: 'root'
})
export class LanguageService implements OnInit{

  selectedLanguage = signal<ILanguage>(StaticFiles.languages[0])

  changeLanguage(language: ILanguage) {
    this.selectedLanguage.update(lang => lang = language)
    localStorage.setItem("language", JSON.stringify(language))
    this.translate.use(language.code)
  }

  getCurrentLanguage(){
    var lang = localStorage.getItem("language")
    if(lang){
      this.changeLanguage(JSON.parse(lang))
    }
    else{
      this.changeLanguage(StaticFiles.languages[0])
    }
  }
  
  constructor(public translate: TranslateService) {
    let data = localStorage.getItem("language")
    if (data) {
      this.selectedLanguage.update(lang => lang = JSON.parse(data!))
    }
    else {
      this.selectedLanguage.update(lang => lang = StaticFiles.languages[0])
    }
  }
  ngOnInit(): void {
    this.getCurrentLanguage()
  }
}
