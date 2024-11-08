import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { IResponse } from '../../../shared/Models/response';

@Injectable({
  providedIn: 'root',
})
export class DropdownService {
  constructor(private http: HttpClient) {}
  getData(url: string) {
    return this.http.get<IResponse<any>>(url)
  }
}
