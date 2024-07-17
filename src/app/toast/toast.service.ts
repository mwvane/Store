import { Injectable, signal } from '@angular/core';
import { Toast } from './toast_model';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private _toastList = signal<Toast[]>([]);
  constructor() {}
  private s4(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  get showToasts() {
    return this.toastlist.length > 0;
  }
  private getId() {
    return this.s4() + this.s4();
  }
  get toastlist() {
    return this._toastList();
  }

  show(toast: Toast) {
    if (toast) {
      toast.id = this.getId();
      const updatedToasts: Toast[] = [toast, ...this.toastlist];
      this._toastList.set(updatedToasts);
      if (toast.autoHide) {
        setTimeout(() => {
          this.hide(toast)
        }, toast.duration * 1000);
      }
    }
  }

  hide(toast: Toast){
    const newList = this.toastlist.filter((t) => toast.id != t.id);
    this._toastList.set(newList);
  }
}
