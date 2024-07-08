import { Injectable, signal } from '@angular/core';
import { IManufacturer } from '../Models/manufacturer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { env } from '../env';

@Injectable({
  providedIn: 'root',
})
export class ManufacturerService {
  private _manufacturers = signal<IManufacturer[]>([]);
  isLoading: boolean = false;
  constructor(private http: HttpClient) {}

  get manufacturers() {
    return this._manufacturers();
  }

  getManufacturers() {
    this.isLoading = true;
    this.http
      .get<IManufacturer[]>(`${env.baseUrl}Manufacturer/GetManufacturers`)
      .subscribe((res) => {
        this.isLoading = false;
        if (res) {
          this._manufacturers.set(res);
        }
      });
  }

  addManufacturer(manufacturer: IManufacturer) {
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http
        .post(`${env.baseUrl}Manufacturer/AddManufacturer`, manufacturer)
        .subscribe(
          (response) => {
            if (response) {
              const currentManufacturers = this.manufacturers;
              const updatedManufacturers = [...currentManufacturers, response];
              this._manufacturers.set(updatedManufacturers as IManufacturer[]);
              this.isLoading = false;
              resolve(true);
            }
          },
          (error) => {
            this.isLoading = false;
            reject(false);
          }
        );
    });
  }

  upadetManufacturer(manufacturer: any){
    debugger
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http.put(`${env.baseUrl}Manufacturer/UpdateManufacturer`, manufacturer).subscribe(
        (response) => {
          this.isLoading = false;
          if (response) {
            const currentManufacturers = this.manufacturers;
            const updatedManufacturers = currentManufacturers.map((m) =>
              m.id == manufacturer.id ? { ...m, manufacturer } : m
            );
            this._manufacturers.set(updatedManufacturers);
            resolve(true);
          }
        },
        (error) => reject(false)
      );
    });
  }
  getManufacturerById(id:number){
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http.get(`${env.baseUrl}Manufacturer/GetManufacturerById/${id}`).subscribe(
        (res) => {
          this.isLoading = false;
          if (res) {
            resolve(res);
          }
        },
        (error) => reject('manufacturer not found')
      );
    });
  }

  deleteManufacturer(manufacturers: any[]): Promise<boolean> {
    var manufacturerIds: number[] = [];
    manufacturers.map((m) => manufacturerIds.push(m.id));
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .delete<any>(`${env.baseUrl}Manufacturer/DeleteManufacturer`, {
          headers,
          body: manufacturerIds,
        })
        .subscribe(
          (response) => {
            var currentCategories = this.manufacturers;
            const updatedCategories = currentCategories.filter(
              (category) => !manufacturerIds.includes(category.id!)
            );
            this._manufacturers.set(updatedCategories);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
}
