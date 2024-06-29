import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  constructor() {}
  errors: any = {
    1: '',
    2: 'required',
    3: "name can't be less then 3 symbol",
  };
}
