import { Injectable, signal } from '@angular/core';
import { IOption } from '../Models/option';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IResponse } from '../Models/response';
import { env } from '../env';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  private _options = signal<IOption[]>([])
  isLoading : boolean = false
  constructor(private http : HttpClient) {}
  
  get options(){
    return this._options()
  }

  getOptions(){
    this.isLoading = true
    this.http.get<IResponse>(`${env.baseUrl}Option/GetOptions`).subscribe(res => {
      this.isLoading = false
      if(res.data){
        this._options.set(res.data)
        return true
      }
      return res.error
    })
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
            const updatedOptions = currentOptions.filter(option => !optionIds.includes(option.id!));
            this._options.set(updatedOptions);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }

}
