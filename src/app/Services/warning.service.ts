import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarningService {

  constructor() { }
  warnings: any = {
    none: '',
    deleteCategory: 'do you want to delete selected categoty? product(s) with this category will be deleted too',
    deleteManufacturer: 'do you want to delete selected manufacturer? product(s) with this manufacturers will be deleted too',
    deteteProduct: "do you want to delete selected product?"
  };
}
