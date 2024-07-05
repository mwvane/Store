import { Injectable, Signal, signal } from '@angular/core';
import { IContry } from '../Models/country';
import { HttpClient } from '@angular/common/http';
import { env } from '../env';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private _countries = signal<IContry[]>([]);
  isloading: boolean = false;
  constructor(private http: HttpClient) {}

  getCountries() {
    return new Promise((resolve, reject) => {
      this.isloading = true;
      this.http.get<any>(`${env.baseUrl}Country/GetCountries`).subscribe(
        (response) => {
          if (response) {
            this._countries.set(response);
            resolve(true);
          }
          this.isloading = false;
        },
        (error) => reject(false)
      );
    });
  }

  get countries() {
    return this._countries();
  }

  addCountry(country: IContry) {
    return new Promise((resolve, reject) => {
      this.http.post(`${env}Country/AddCountry`, country).subscribe(
        (response) => {
          if (response) {
            const currentCountries = this.countries;
            const updatedCountries = [...currentCountries, response];
            this._countries.set(updatedCountries as IContry[]);
            resolve(true);
          }
        },
        (error) => reject(false)
      );
    });
  }
}
