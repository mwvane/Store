import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidePanelService {

  constructor() { }
  _show = signal<boolean>(true)
  
  get isShow(){
    return this._show()
  }

  hide(){
    this._show.set(false)
  }
  show(){
    this._show.set(true)
  }
}
