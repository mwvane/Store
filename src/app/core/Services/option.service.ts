import { Injectable, signal } from '@angular/core';
import { IOption } from '../Models/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { IOptionType } from '../Models/optionType';
import { Urls } from '../../urls';
import { env } from '../../env';
import { ToastService } from '../../toast/toast.service';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OptionService {
  private _options = signal<IOption[]>([]);
  private _optionTypes = signal<IOptionType[]>([]);
  isLoadingOptions: boolean = false;
  loadinOptionTypes = false;
  constructor(private http: HttpClient, private toastService: ToastService) {}

  get options() {
    return this._options();
  }

  get optionTypes() {
    return this._optionTypes();
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
    this.http
      .post<IResponse<IOption>>(Urls.optionUrls.addOption, option)
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getOptions();
      });
  }

  addOptionType(optionType: any) {
    this.http
      .post<IResponse<IOptionType>>(Urls.optionUrls.addOptionType, optionType)
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getOptions();
      });
  }

  upadateOption(option: any) {
    this.isLoadingOptions = true;
    this.http
      .put<IResponse<IOption>>(Urls.optionUrls.updateOption, option)
      .subscribe({
        next: (response) => {
          this.isLoadingOptions = false;
          if (response.notification) {
            this.toastService.show(response.notification);
          }
          this.getOptions();
        },
        error: () => {
          this.isLoadingOptions = false;
        },
      });
  }

  upadateOptionType(optionType: any) {
    this.http
      .put<IResponse<IOptionType>>(Urls.optionUrls.updateOptionType, optionType)
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getOptionTypes();
      });
  }

  getOptionById(id: number) {
    return new Promise((resolve, reject) => {
      this.isLoadingOptions = true;
      this.http
        .get<IResponse<IOption>>(Urls.optionUrls.getOptionById(id))
        .subscribe(
          (res) => {
            this.isLoadingOptions = false;
            if (res.data) {
              resolve(res.data);
            }
          },
          (error) => reject('option not found')
        );
    });
  }

  getOptionTypeById<IOptionType>(id: number) {
    return new Promise((resolve, reject) => {
      this.loadinOptionTypes = true;
      this.http
        .get<IResponse<IOptionType>>(Urls.optionUrls.getOptionTypeById(id))
        .subscribe(
          (res) => {
            if (res.data) {
              resolve(res.data);
            }
            this.loadinOptionTypes = false;
          },
          (error) => reject('option type not found')
        );
    });
  }

  deleteOption(options: IOption[]) {
    var optionIds: number[] = [];
    options.map((m) => optionIds.push(m.id!));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .delete<IResponse<IOption>>(Urls.optionUrls.deleteOption, {
        headers,
        body: optionIds,
      })
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getOptions();
      });
  }

  deleteOptionType(optionTypes: any[]) {
    var optionTypeIds: number[] = [];
    optionTypes.map((o) => optionTypeIds.push(o.id));

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .delete<IResponse<IOptionType>>(Urls.optionUrls.deleteOptionType, {
        headers,
        body: optionTypeIds,
      })
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getOptionTypes();
      });
  }
}
