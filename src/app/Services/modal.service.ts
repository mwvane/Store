import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}
  loginDialog: boolean = false;

  // ----CONFIRM DIALOG------
  confirmDilaog: boolean = false
}
