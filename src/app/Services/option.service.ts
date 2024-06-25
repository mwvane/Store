import { Injectable, signal } from '@angular/core';
import { IOption } from '../Models/option';
import { HttpClient } from '@angular/common/http';
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
}
