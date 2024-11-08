import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from '../../core/Services/modal.service';
import { CurencyService } from '../../../modules/shared/currency/curency.service';
import { IProduct } from '../../../modules/shared/Models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() data?: IProduct;
  constructor(
    public currencyService: CurencyService,
    private modalService: ModalService
  ) {}
  get descountedPrice() {
    if (this.data?.price && this.data.discount?.value) {
      return (
        this.data.price - (this.data.price * this.data.discount.value) / 100
      );
    }
    return this.data?.price;
  }
  OnChangeFavorite(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.data!.isFavorite = !this.data?.isFavorite
  }
  OnAddToCart(e: any) {
    e.preventDefault();
    e.stopPropagation();
    this.modalService.loginDialog = true; // temp
  }
}
