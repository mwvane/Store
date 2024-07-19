import { Injectable, signal } from '@angular/core';
import { IManufacturer } from '../Models/manufacturer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { env } from '../env';
import { ToastService } from '../toast/toast.service';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  private _manufacturers = signal<IManufacturer[]>([]);
  isLoading: boolean = false;
  constructor(private http: HttpClient, private toastService: ToastService) {}

  get manufacturers() {
    return this._manufacturers();
  }

  getManufacturers() {
    this.isLoading = true;
    this.http
      .get<IResponse<IManufacturer[]>>(
        `${env.baseUrl}Manufacturer/GetManufacturers`
      )
      .subscribe((res) => {
        this.isLoading = false;
        if (res.data) {
          this._manufacturers.set(res.data);
        }
      });
  }

  addManufacturer(manufacturer: IManufacturer) {
    this.isLoading = true;
    this.http
      .post<IResponse<IManufacturer>>(
        `${env.baseUrl}Manufacturer/AddManufacturer`,
        manufacturer
      )
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getManufacturers();
        this.isLoading = false;
      });
  }

  upadetManufacturer(manufacturer: any) {
    this.isLoading = true;
    this.http
      .put<IResponse<IManufacturer>>(
        `${env.baseUrl}Manufacturer/UpdateManufacturer`,
        manufacturer
      )
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getManufacturers();
        this.isLoading = false;
      });
  }

  getManufacturerById(id: number) {
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http
        .get<IResponse<IManufacturer>>(
          `${env.baseUrl}Manufacturer/GetManufacturerById/${id}`
        )
        .subscribe(
          (res) => {
            this.isLoading = false;
            if (res.data) {
              resolve(res.data);
            } else {
              reject(res.error);
            }
          },
          (error) => reject('manufacturer not found')
        );
    });
  }

  deleteManufacturer(manufacturers: any[]) {
    var manufacturerIds: number[] = [];
    manufacturers.map((m) => manufacturerIds.push(m.id));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .delete<IResponse<IManufacturer>>(
        `${env.baseUrl}Manufacturer/DeleteManufacturer`,
        {
          headers,
          body: manufacturerIds,
        }
      )
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getManufacturers();
      });
  }
}
