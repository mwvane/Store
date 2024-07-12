import { Injectable, signal } from '@angular/core';
import { IOption } from '../Models/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { IOptionType } from '../Models/optionType';
import { Urls } from '../urls';
import { env } from '../env';

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
      .get<IResponse<IOption[]>>(Urls.optionUrls.getOptions)
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
      .get<IResponse<IOptionType[]>>(Urls.optionUrls.getOptionTypes)
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
      this.http.post<any>(Urls.optionUrls.addOption, option).subscribe(
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
      this.http.post<any>(Urls.optionUrls.addOptionType, optionType).subscribe(
        (response) => {
          this.getOptions()
          resolve(true);
        },
        (error) => reject(false)
      );
    });
  }

  upadateOption(option: any){
    return new Promise((resolve, reject) => {
      this.isLoadingOptions = true;
      this.http.put<IResponse<IOption>>(Urls.optionUrls.updateOption, option).subscribe(
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
      this.http.put<IResponse<IOptionType>>(Urls.optionUrls.updateOptionType, optionType).subscribe(
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
      this.http.get(Urls.optionUrls.getOptionById(id)).subscribe(
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
      this.http.get<IResponse<IOptionType>>(Urls.optionUrls.getOptionTypeById(id)).subscribe(
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
        .delete<IResponse<IOption>>(Urls.optionUrls.deleteOption, {
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
        .delete<IResponse<IOptionType>>(Urls.optionUrls.deleteOptionType, {
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
