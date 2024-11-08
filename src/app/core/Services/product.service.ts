import { Injectable, OnInit, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { env } from '../../env';
import { IProduct } from '../../../modules/shared/Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  formdata: FormData = new FormData();
  private _productsFromDb = signal<IProduct[]>([]);
  loading: boolean = false;
  constructor(private http: HttpClient) {
    //this.getProducts();
  }
  get productsFromDb() {
    return this._productsFromDb();
  }
  getProducts() {
    this.http.get<any>(`${env.baseUrl}Product/GetProducts`).subscribe((res) => {
      if (res.data) {
        this._productsFromDb.set(res.data);
        console.log(this._productsFromDb());
      }
    });
  }

  addProduct(formData: FormData): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .post<any>(`${env.baseUrl}Product/AddProduct`, formData)
        .subscribe(
          (res) => {
            this.loading = false;
            if (res.data) {
              this._productsFromDb.set([...this._productsFromDb(), res.data]);
              resolve(true);
            } else {
              reject(false);
            }
          },
          (error) => {
            this.loading = false;
            reject(false);
          }
        );
    });
  }

  deleteProduct(productId: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .delete<any>(`${env.baseUrl}Product/DeleteProduct/${productId}`)
        .subscribe(
          (response) => {
            const currentProducts = this.productsFromDb;
            const updatedProducts = currentProducts.filter(
              (product) => product.productId !== productId
            );
            this._productsFromDb.set(updatedProducts);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }
  deleteProducts(products: any[]): Promise<boolean> {
    var productIds: number[] = [];
    products.map((p) => productIds.push(p.productId));
    debugger;
    return new Promise((resolve, reject) => {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
      });
      this.http
        .delete<any>(`${env.baseUrl}Product/DeleteProducts`, {
          headers,
          body: productIds,
        })
        .subscribe(
          (response) => {
            var currentProducts = this.productsFromDb;
            const updatedProducts = currentProducts.filter(product => !productIds.includes(product.productId!));
            this._productsFromDb.set(updatedProducts);
            resolve(true);
          },
          (error) => reject(false)
        );
    });
  }

  products: IProduct[] = [
    {
      productId: 1,
      name: 'blue jacket',
      price: 99,
      quantity: 0,
      rating: 3,
      isFavorite: false,
      images: [
        '../../assets/images/products/pic-blue-100x110.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/pic-blue-100x110.jpg',
        '../../assets/images/products/pic-blue-100x110.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
      ],
      discount: {
        id: 1,
        value: 10,
        productId: 1,
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      productId: 5,
      name: 'blue balb',
      price: 12,
      quantity: 1,
      rating: 1,
      isFavorite: true,
      images: [
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colp-pink-620x679.jpg',
      ],
      discount: {
        id: 3,
        value: 30,
        productId: 5,
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      productId: 2,
      name: 'bottle cian',
      price: 20,
      quantity: 10,
      rating: 4,
      isFavorite: true,
      images: [
        '../../assets/images/products/bottle-cian-620x679.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/bottle-cian-620x679.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/bottle-cian-620x679.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/bottle-cian-620x679.jpg',
      ],
    },
    {
      productId: 3,
      name: 'yellow jacket',
      price: 999,
      quantity: 10,
      rating: 5,
      isFavorite: false,
      images: [
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/pic-blue-100x110.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/pic-yellow-620x679.jpg',
        '../../assets/images/products/pic-blue-100x110.jpg',
        '../../assets/images/products/pic-blue-100x110.jpg',
      ],
    },
    {
      productId: 4,
      name: 'yellow balb',
      price: 50,
      quantity: 10,
      rating: 2,
      isFavorite: false,
      images: [
        '../../assets/images/products/colp-pink-620x679.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
      ],
      discount: {
        id: 2,
        value: 20,
        productId: 4,
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      productId: 6,
      name: 'rose dishes',
      price: 30,
      quantity: 9,
      rating: 0,
      isFavorite: true,
      images: [
        '../../assets/images/products/dishes-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
      ],
      discount: {
        id: 2,
        value: 20,
        productId: 4,
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      productId: 7,
      name: 'smart watch',
      price: 30,
      quantity: 9,
      rating: 0,
      isFavorite: false,
      images: [
        '../../assets/images/products/watch-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
      ],
      discount: {
        id: 2,
        value: 20,
        productId: 4,
        startDate: new Date(),
        endDate: new Date(),
      },
    },
    {
      productId: 8,
      name: 'ear buds',
      price: 140,
      quantity: 9,
      rating: 5,
      isFavorite: false,
      images: [
        '../../assets/images/products/earphone-620x679.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
        '../../assets/images/products/colb-blue-728x800.jpg',
      ],
      discount: {
        id: 2,
        value: 20,
        productId: 4,
        startDate: new Date(),
        endDate: new Date(),
      },
    },
  ];
}
