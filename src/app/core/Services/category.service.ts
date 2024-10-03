import { Injectable, signal } from '@angular/core';
import { ICategory } from '../Models/category';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../env';
import { IResponse } from '../Models/response';
import { ToastService } from '../../toast/toast.service';
import { Urls } from '../../urls';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private _categories = signal<ICategory[]>([]);
  private _allCategories = signal<ICategory[]>([]);
  isLoading: boolean = false;
  isLoadingCategoryById: boolean = false;
  constructor(private http: HttpClient, private toastService: ToastService) {}

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
      .get<IResponse<ICategory[]>>(Urls.categoryUrls.getAllCategories)
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
      this.http
        .get<IResponse<ICategory>>(
          `${env.baseUrl}Category/GetCategoryById/${id}`
        )
        .subscribe(
          (response) => {
            this.isLoadingCategoryById = false;
            if (response.data) {
              resolve(response.data);
            }
          },
          (error) => reject('category not found')
        );
    });
  }

  addCategory(category: any) {
    this.isLoading = true;
    this.http
      .post<IResponse<ICategory>>(
        `${env.baseUrl}Category/AddCategory`,
        category
      )
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getCategories();
        this.getAllCategories();
      });
  }

  UpdateCategory(category: any) {
    this.isLoading = true;
    this.http
      .put<IResponse<ICategory>>(
        `${env.baseUrl}Category/UpdateCategory`,
        category
      )
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getCategories();
        this.getAllCategories();
      });
  }

  deleteCategory(categories: any[]) {
    var categoryIds: number[] = [];
    categories.map((c) => categoryIds.push(c.id));
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http
      .delete<IResponse<ICategory>>(`${env.baseUrl}Category/DeleteCategory`, {
        headers,
        body: categoryIds,
      })
      .subscribe((response) => {
        if (response.notification) {
          this.toastService.show(response.notification);
        }
        this.getCategories();
        this.getAllCategories();
      });
  }
}
