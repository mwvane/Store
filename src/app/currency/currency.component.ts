import { Component, Input } from '@angular/core';
import { CurencyService } from './curency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.css',
})
export class CurrencyComponent {
  @Input() closeParent: boolean = true;
  constructor(public currencyService: CurencyService) {}
}
