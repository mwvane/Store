import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  constructor() { }
  private readonly_color = {
    error: "#ff4c39",
    gray: "#f5f5f5",
    lightGray: "#f6f4f5",
    lightGreen: "#95bf46",
    disabled: "#d5efa4",
    disabledGray: "#878984"
  }
  get color(){return this.readonly_color}
}
