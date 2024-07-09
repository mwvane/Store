import { Injectable, Signal, signal } from '@angular/core';
import { IContry } from '../Models/country';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
      this.http.post(`${env.baseUrl}Country/AddCountry`, country).subscribe(
        (response) => {
          debugger
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
  deleteCountry(countries: any[]): Promise<boolean> {
    var countryIds: number[] = [];
    countries.map((m) => countryIds.push(m.id));
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http.delete<any>(`${env.baseUrl}Country/DeleteCountry`, {
          headers,
          body: countryIds,
        })
        .subscribe(response => {
            var currentCountries = this.countries;
            const updatedCountries = currentCountries.filter(
              (country) => !countryIds.includes(country.id!)
            );
            this._countries.set(updatedCountries);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
}
