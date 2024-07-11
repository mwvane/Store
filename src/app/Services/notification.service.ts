import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private _notification = signal<string>('');
  get error(){
    return this._notification()
  }
  opened: boolean = false;
  notification: any = {
    error: this._notification(),
    show: (message: string) =>  {
      this._notification.set(message);
      this.opened = true;
    },
    clear: () => {
      this._notification.set('');
      this.opened = false;
    },
  };

}
