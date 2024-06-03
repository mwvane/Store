import { Component, OnInit } from '@angular/core';
import { LanguageService } from './language-selector/language.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { IMenuItem } from './Models/menuIte';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currency : IMenuItem[] = [
    {id: 1, text: "Dollar", icon: "bi bi-currency-dollar"},
    {id: 2, text: "Euro", icon: "bi bi-currency-euro"},
    {id: 3, text: "Pound", icon: "bi bi-currency-pound"},

  ]

  bannerItems: IMenuItem[] = [
    {id: 1,text: "", image: "../assets/images/slider-1-1230x647.jpg"},
    {id: 2,text: "", image: "../assets/images/slider-2-1230x647.jpg"}
  ]

  
  title = 'store_front';

  currencyChange(item: IMenuItem){
    alert(item.text)
  }
}
