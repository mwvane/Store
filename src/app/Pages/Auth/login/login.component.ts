import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/Services/auth.service';
import { IUserLogin } from '../../../../modules/shared/Models/userLogin';
import { FormValidator } from '../../../../modules/form/enum/form.validator-enums';
import { controlTypes, IForm } from '../../../../modules/form/models/form.interface';
import { FormService } from '../../../../modules/form/form.service';
import { env } from '../../../env';
import { Urls } from '../../../urls';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: IForm | null = null
  url: string = Urls.authUrls.loadForm(1)
  // testForm: IForm = {
  //   formTitle: '',
  //   resetBtnTitle: 'clear',
  //   submitButtonTitle: 'login',
  //   submitButtonIcon: 'bi bi-box-arrow-in-right',
  //   resetButtonIcon: "bi bi-arrow-clockwise",
  //   loading: false,
  //   sections: [
  //     {
  //       sectionName: 'customer',
  //       border: true,
  //       formControls: [
  //         {
  //           label: 'email',
  //           name: 'email',
  //           value: '',
  //           placeholder: 'email',
  //           type: controlTypes.email,
  //           validators: [
  //             {
  //               validatorName: FormValidator.email,
  //               required: true,
  //               message: 'required',
  //             },
  //           ],
  //           radioOptions: [],
  //         },
  //         {
  //           label: 'password',
  //           name: 'password',
  //           placeholder: 'password',
  //           type: controlTypes.password,
  //           value: '',
  //           validators: [{ validatorName: FormValidator.required, required: true }],
  //         },
  //         {
  //           additionalLinks: [{name: "forget password?", url: "/Home"}],
  //           type: controlTypes.link,
  //           name: "forgrt password",
  //           validators: []
  //         },

  //         {
  //           label: 'category',
  //           name: 'category',
  //           value: '',
  //           placeholder: 'select category text',
  //           type: 'select',
  //           validators: [
  //             {
  //               validatorName: FormValidator.required,
  //               required: true,
  //               message: 'required',
  //             },
  //           ],
  //           options: [{ id: 1, value: 1, name: 'test' }],
  //           url: 'https://192.168.1.22:5001/api/Option/GetOptions',
  //           radioOptions: ['test'],
  //         },
  //       ],
  //     },
  //   ],
  // };

  constructor(public authService: AuthService) {}

  login(formValue:any) {
    console.log(formValue)
    // this.authService.login(this.loginForm.value as IUserLogin);
  }
}
