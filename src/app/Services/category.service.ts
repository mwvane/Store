import { Injectable, signal } from '@angular/core';
import { ICategory } from '../Models/category';
import { HttpClient } from '@angular/common/http';
import { env } from '../env';
import { IResponse } from '../Models/response';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _categories = signal<ICategory[]>([])
  private _allCategories = signal<ICategory[]>([])
  isLoading : boolean = false
  constructor(private http : HttpClient) {}

  get categories(){
    return this._categories()
  }
  get allCategories(){
    return this._allCategories()
  }

  getCategories(){
    this.isLoading = true
    this.http.get<IResponse>(`${env.baseUrl}Category/GetCategories`).subscribe(res => {
      this.isLoading = false
      if(res.data){
        this._categories.set(res.data)
        return true
      }
      return res.error
    })
  }
  getAllCategories(){
    this.isLoading = true
    this.http.get<IResponse>(`${env.baseUrl}Category/GetAllCategories`).subscribe(res => {
      this.isLoading = false
      if(res.data){
        this._allCategories.set(res.data)
        return true
      }
      return res.error
    })
  }

  addCategory(category: ICategory){
    this.isLoading = true
    this.http.post<IResponse>(`${env.baseUrl}Category/AddCategory`,category).subscribe(res => {
      this.isLoading = false
      if(res.data){
        this._categories().push(res.data)
        return res.data
      }
      return res.error
    })
  }
}
