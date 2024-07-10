import { Injectable, signal } from '@angular/core';
import { IOption } from '../Models/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { env } from '../env';
import { IOptionType } from '../Models/optionType';
import { ReorderableColumn } from 'primeng/table';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  private _options = signal<IOption[]>([]);
  private _optionTypes = signal<IOptionType[]>([])
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
      .get<IResponse<IOption[]>>(`${env.baseUrl}Option/GetOptions`)
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
      .get<IResponse<IOptionType[]>>(`${env.baseUrl}Option/GetOptionTypes`)
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
          this.getOptions()
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
          this.getOptions()
          resolve(true);
        },
        (error) => reject(false)
      );
    });
  }

  upadateOption(option: any){
    debugger
    return new Promise((resolve, reject) => {
      this.isLoadingOptions = true;
      this.http.put<IResponse<IOption>>(`${env.baseUrl}Option/UpdateOption`, option).subscribe(
        (response) => {
          this.isLoadingOptions = false;
          if (response.success) {
            this.getOptions()
            resolve(response.success);
          }
          else{
            reject(response.error?.join("\n"))
          }
        },
        (error) => reject(false)
      );
    });
  }

  upadateOptionType(optionType: any){
    return new Promise((resolve, reject) => {
      this.http.put<IResponse<IOptionType>>(`${env.baseUrl}Option/UpdateOptionType`, optionType).subscribe(
        (response) => {
         if (response.success) {
            this.getOptionTypes()
            resolve(response.success);
          }
          else{
            reject(response.error?.join("\n"))
          }
        },
        (error) => reject(false)
      );
    });
  }

  getOptionById(id:number){
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
  getOptionTypeById<IOptionType>(id:number){
    return new Promise((resolve, reject) => {
      this.loadinOptionTypes = true;
      this.http.get<IResponse<IOptionType>>(`${env.baseUrl}Option/GetOptionTypeById/${id}`).subscribe(
        (res) => {
          if (res.data) {
            resolve(res.data);
          }
          this.loadinOptionTypes = false
        },
        (error) => reject('option type not found')
      );
    });
  }

  deleteOption(options: any[]): Promise<boolean> {
    var optionIds: number[] = [];
    options.map((m) => optionIds.push(m.optionId));
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .delete<IResponse<IOption>>(`${env.baseUrl}Option/DeleteOption`, {
          headers,
          body: optionIds,
        })
        .subscribe(
          (response) => {
            this.getOptions()
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }

  deleteOptionType(optionTypes: any[]): Promise<boolean> {
    var optionTypeIds: number[] = [];
    optionTypes.map((o) => optionTypeIds.push(o.id));
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .delete<IResponse<IOptionType>>(`${env.baseUrl}Option/DeleteOptionType`, {
          headers,
          body: optionTypeIds,
        })
        .subscribe(
          response => {
            var currentOptionTypes = this.optionTypes;
            const updatedOptionTypes = currentOptionTypes.filter(
              (optionType) => !optionTypeIds.includes(optionType.id!)
            );
            this._optionTypes.set(updatedOptionTypes);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
}
