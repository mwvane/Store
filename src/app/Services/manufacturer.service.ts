import { Injectable, signal } from '@angular/core';
import { IManufacturer } from '../Models/manufacturer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { env } from '../env';

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService {

  private _manufacturers = signal<IManufacturer[]>([])
  isLoading : boolean = false
  constructor(private http : HttpClient) {}
  
  get manufacturers(){
    return this._manufacturers()
  }

  getManufacturers(){
    this.isLoading = true
    this.http.get<IResponse>(`${env.baseUrl}Manufacturer/GetManufacturers`).subscribe(res => {
      this.isLoading = false
      if(res.data){
        this._manufacturers.set(res.data)
        return true
      }
      return res.error
    })
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
            const updatedCategories = currentCategories.filter(category => !manufacturerIds.includes(category.id!));
            this._manufacturers.set(updatedCategories);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
}
