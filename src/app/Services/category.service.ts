import { Injectable, signal } from '@angular/core';
import { ICategory } from '../Models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../env';
import { IResponse } from '../Models/response';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _categories = signal<ICategory[]>([]);
  private _allCategories = signal<ICategory[]>([]);
  isLoading: boolean = false;
  isLoadingCategoryById: boolean = false;
  constructor(private http: HttpClient) {}

  get categories() {
    return this._categories();
  }
  get allCategories() {
    return this._allCategories();
  }

  getCategories() {
    this.isLoading = true;
    this.http
      .get<IResponse<ICategory[]>>(`${env.baseUrl}Category/GetCategories`)
      .subscribe((res) => {
        this.isLoading = false;
        if (res.data) {
          this._categories.set(res.data);
          return true;
        }
        return res.error;
      });
  }
  getAllCategories() {
    this.isLoading = true;
    this.http
      .get<IResponse<ICategory[]>>(`${env.baseUrl}Category/GetAllCategories`)
      .subscribe((res) => {
        this.isLoading = false;
        if (res.data) {
          this._allCategories.set(res.data);
          return true;
        }
        return res.error;
      });
  }

  getCategoryById(id: number) {
    return new Promise((resolve, reject) => {
      this.isLoadingCategoryById = true;
      this.http.get(`${env.baseUrl}Category/GetCategoryById/${id}`).subscribe(
        (res) => {
          this.isLoadingCategoryById = false;
          if (res) {
            resolve(res);
          }
        },
        (error) => reject('category not found')
      );
    });
  }

  addCategory(category: any) {
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http
        .post<IResponse<ICategory>>(`${env.baseUrl}Category/AddCategory`, category)
        .subscribe(
          (response) => {
            this.getAllCategories();
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
  UpdateCategory(category: any) {
    return new Promise((resolve, reject) => {
      this.isLoading = true;
      this.http
        .put(`${env.baseUrl}Category/UpdateCategory`, category)
        .subscribe(
          (response) => {
            this.getAllCategories();
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }

  deleteCategory(categories: any[]): Promise<boolean> {
    var categoryIds: number[] = [];
    categories.map((c) => categoryIds.push(c.id));
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .delete<any>(`${env.baseUrl}Category/DeleteCategory`, {
          headers,
          body: categoryIds,
        })
        .subscribe(
          (response) => {
            this.getAllCategories()
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
}
