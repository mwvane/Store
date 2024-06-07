import { Injectable, signal } from '@angular/core';
import { ICurrency } from './currencyModel';

@Injectable({
  providedIn: 'root',
})
export class CurencyService {
  constructor() {}
  currencies: ICurrency[] = [
    { id: 1, fullName: 'lari', shortName: 'gel', symbol: '₾' },
    { id: 2, fullName: 'dollar', shortName: 'usd', symbol: '$' },
    { id: 3, fullName: 'euro', shortName: 'eur', symbol: '€' },
    { id: 4, fullName: 'pound', shortName: 'gbp', symbol: '£' },
  ];
  currentCurency = signal<ICurrency>(this.getCurrentCurrency());

  updateCurrency(currency: ICurrency) {
    localStorage.setItem('currency', JSON.stringify(currency));
    this.currentCurency.set(currency);
  }

  getCurrentCurrency() {
    var currency = localStorage.getItem('currency');
    if (currency) {
      return JSON.parse(currency);
    } else {
      return this.currencies[0];
    }
  }
}
