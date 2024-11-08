import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../core/Services/product.service';
import { ModalService } from '../../core/Services/modal.service';
import { CurencyService } from '../../../modules/shared/currency/curency.service';
import { IMenuItem } from '../../../modules/shared/Models/menuIte';
import { IProduct } from '../../../modules/shared/Models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct;
  currentImage: string = '';
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.product = this.productService.products.find((item) => {
        return item.productId == params['id'];
      });
      this.currentImage = this.product!.images![0];
    });
  }
  constructor(
    private route: ActivatedRoute,
    public productService: ProductService,
    public currensyService: CurencyService,
    public modalService: ModalService
  ) {}
  get tumbnails() {
    let arr: IMenuItem[] = [];
    for (let i = 0; i < this.product!.images!.length; i++) {
      arr.push({ id: i + 1, text: '', image: this.product!.images![i] });
    }
    return arr;
  }
  changeCurrentImage(item: IMenuItem) {
    this.currentImage = item.image!;
  }
  addToCart() {
    this.modalService.loginDialog = true; //temp
  }
}
