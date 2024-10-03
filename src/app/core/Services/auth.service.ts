import { Injectable, signal } from '@angular/core';
import { IUser, UserRole } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';
import { IUserLogin } from '../Models/userLogin';
import { IResponse } from '../Models/response';
import { ToastService } from '../../toast/toast.service';
import { Urls } from '../../urls';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _currentUser = signal<IUser | null>({
    role: UserRole.admin,
    email: '',
    firstname: 'test',
    lastname: 'test',
    password: 'test',
    phone: '598456033',
  }); //temp

  userRoles = {
    admin: UserRole.admin,
    client: UserRole.client,
    manager: UserRole.manager,
  };

  loadingLogin = false;
  loadingRegistration = false;
  get currentUser() {
    return this._currentUser();
  }

  constructor(private http: HttpClient, private toastService: ToastService) {}

  login(credentials: IUserLogin) {
    this.loadingLogin = true;
    this.http
      .post<IResponse<string>>(Urls.authUrls.login, credentials)
      .subscribe({
        next: (response) => {
          if (response.data) {
            this.setToken(response.data);
            if (response.notification) {
              this.toastService.show(response.notification);
            }
            this.loadingLogin = false;
          }
        },
        error: (error) => {
          this.loadingLogin = false;
        },
      });
  }

  setToken(token: string) {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  register(user: IUser) {
    this.loadingRegistration = true;
    this.http
      .post<IResponse<IUser>>(Urls.authUrls.regiter, user)
      .subscribe({
        next: (response) => {
          this.loadingRegistration = false;
          if (response.notification) {
            this.toastService.show(response.notification);
          }
        },
        error: () => {
          this.loadingRegistration = false;
        },
      });
  }
}
