import { Injectable, signal } from '@angular/core';
import { IUser, UserRole } from '../Models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = signal<IUser>({ id: 1, role: UserRole.admin });//temp
  userRoles = {
    admin : UserRole.admin,
    client : UserRole.client,
    manager: UserRole.manager
  }
  get currentUser() {
    return this._currentUser();
  }
  constructor() {}
}
