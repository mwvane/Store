import { Injectable, Signal, signal } from '@angular/core';
import { IContry } from '../Models/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../env';
import { IResponse } from '../Models/response';
import { ToastService } from '../toast/toast.service';
import { ICategory } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _countries = signal<IContry[]>([]);
  isloading: boolean = false;
  constructor(private http: HttpClient, private toastService: ToastService) {}

  getCountries() {
    this.isloading = true;
    this.http
      .get<IResponse<IContry[]>>(`${env.baseUrl}Country/GetCountries`)
      .subscribe((response) => {
        if (response.data) {
          this._countries.set(response.data);
        }
        this.isloading = false;
      });
  }

  get countries() {
    return this._countries();
  }

  addCountry(country: IContry) {
    this.http
      .post<IResponse<IContry>>(`${env.baseUrl}Country/AddCountry`, country)
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
          this.getCountries();
        }
      });
  }

  deleteCountry(countries: any[]) {
    var countryIds: number[] = [];
    countries.map((m) => countryIds.push(m.id));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .delete<IResponse<IContry>>(`${env.baseUrl}Country/DeleteCountry`, {
        headers,
        body: countryIds,
      })
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getCountries()
      });
  }
}
