import { Injectable, signal } from '@angular/core';
import { IOption } from '../Models/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { env } from '../env';
import { IOPtenType } from '../Models/optionType';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  private _options = signal<IOption[]>([]);
  private _optionTypes = signal<IOPtenType[]>([])
  isLoadingOptions: boolean = false;
  loadinOptionTypes = false;
  constructor(private http: HttpClient) {}

  get options() {
    return this._options();
  }

  get optionTypes(){
    return this._optionTypes()
  }

  getOptions() {
    this.isLoadingOptions = true;
    this.http
      .get<IResponse>(`${env.baseUrl}Option/GetOptions`)
      .subscribe((res) => {
        this.isLoadingOptions = false;
        if (res.data) {
          this._options.set(res.data);
          return true;
        }
        return res.error;
      });
  }
  getOptionTypes() {
    this.loadinOptionTypes = true;
    this.http
      .get<IResponse>(`${env.baseUrl}Option/GetOptionTypes`)
      .subscribe((res) => {
        this.loadinOptionTypes = false;
        if (res.data) {
          this._optionTypes.set(res.data);
          return true;
        }
        return res.error;
      });
  }
  
  addOption(option: any) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${env.baseUrl}Option/AddOption`, option).subscribe(
        (response) => {
          var currentOptions = this.options;
          var updatedOptions = [...currentOptions, response];
          this._options.set(updatedOptions);
          resolve(true)
        },
        (error) => reject(false)
      );
    });
  }
  addOptionType(optionType: any) {
    return new Promise((resolve, reject) => {
      this.http.post<any>(`${env.baseUrl}Option/AddOptionType`, optionType).subscribe(
        (response) => {
          var currentOptionTypes = this.optionTypes;
          var updatedOptions = [...currentOptionTypes, response];
          this._options.set(updatedOptions);
          resolve(true);
        },
        (error) => reject(false)
      );
    });
  }

  upadateOption(option: any){
    return new Promise((resolve, reject) => {
      this.isLoadingOptions = true;
      this.http.put(`${env.baseUrl}Option/UpdateOption`, option).subscribe(
        (response) => {
          this.isLoadingOptions = false;
          if (response) {
            const currentOptions = this.options;
            const updatedOptions = currentOptions.map((o) =>
              o.id == option.id ? { ...o, option } : o
            );
            this._options.set(updatedOptions);
            resolve(true);
          }
        },
        (error) => reject(false)
      );
    });
  }

  getOptionById(id:number){
    debugger
    return new Promise((resolve, reject) => {
      this.isLoadingOptions = true;
      this.http.get(`${env.baseUrl}Option/GetOptionById/${id}`).subscribe(
        (res) => {
          this.isLoadingOptions = false;
          if (res) {
            resolve(res);
          }
        },
        (error) => reject('option not found')
      );
    });
  }

  deleteOption(options: any[]): Promise<boolean> {
    var optionIds: number[] = [];
    options.map((m) => optionIds.push(m.id));
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .delete<any>(`${env.baseUrl}Option/DeleteOption`, {
          headers,
          body: optionIds,
        })
        .subscribe(
          (response) => {
            var currentOptions = this.options;
            const updatedOptions = currentOptions.filter(
              (option) => !optionIds.includes(option.id!)
            );
            this._options.set(updatedOptions);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
}
