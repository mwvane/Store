import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/Services/auth.service';
import { IUserLogin } from '../../../../modules/shared/Models/userLogin';
import { FormValidator } from '../../../../modules/form/enum/form.validator-enums';
import { controlTypes, IForm } from '../../../../modules/form/models/form.interface';

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

  testForm: IForm = {
    formTitle: '',
    resetBtnTitle: 'clear',
    submitButtonTitle: 'login',
    submitButtonIcon: 'bi bi-box-arrow-in-right',
    resetButtonIcon: "bi bi-arrow-clockwise",
    loading: false,
    sections: [
      {
        sectionName: 'customer',
        border: true,
        formControls: [
          {
            label: 'email',
            name: 'email',
            value: '',
            placeholder: 'email',
            type: controlTypes.email,
            validators: [
              {
                validatorName: FormValidator.email,
                required: true,
                message: 'required',
              },
            ],
            radioOptions: [],
          },
          {
            label: 'password',
            name: 'password',
            placeholder: 'password',
            type: controlTypes.password,
            value: '',
            validators: [{ validatorName: FormValidator.required, required: true }],
          },
          {
            additionalLink: [{name: "forget password?", url: "/Home"}],
            type: controlTypes.link,
            name: "forgrt password",
            validators: []
          }

          // {
          //   label: 'category',
          //   name: 'category',
          //   value: '',
          //   placeholder: 'select category text',
          //   type: 'select',
          //   validators: [
          //     {
          //       validatorName: FormValidator.required,
          //       required: true,
          //       message: 'required',
          //     },
          //   ],
          //   options: [{ id: 1, value: 1, name: 'test' }],
          //   url: 'https://192.168.1.22:5001/api/Option/GetOptions',
          //   radioOptions: ['test'],
          // },
        ],
      },
    ],
  };

  constructor(public authService: AuthService) {}

  login() {
    this.authService.login(this.loginForm.value as IUserLogin);
  }
}
