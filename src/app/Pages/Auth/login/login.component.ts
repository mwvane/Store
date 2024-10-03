import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/Services/auth.service';
import { IUserLogin } from '../../../core/Models/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(public authService: AuthService){}

  login() {
    this.authService.login(this.loginForm.value as IUserLogin)
  }
}
