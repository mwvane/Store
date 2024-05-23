import { Component, OnInit } from '@angular/core';
import { LanguageService } from './Services/language.service';
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
  title = 'store_front';

  currencyChange(item: IMenuItem){
    alert(item.text)
  }
}
