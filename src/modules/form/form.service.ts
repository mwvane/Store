import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForm } from './models/form.interface';
import { IResponse } from '../shared/Models/response';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  loadForm(url: string){
    return this.http.get<IResponse<IForm>>(url)
  }
}
