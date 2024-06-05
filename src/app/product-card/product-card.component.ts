import { Component, Input } from '@angular/core';
import { IProduct } from '../Models/product';
import { CurencyService } from '../currency/curency.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() data?: IProduct
  constructor(public currencyService: CurencyService){
  }
  get descountedPrice(){
    if(this.data?.price && this.data.discount?.value){
      return this.data.price - (this.data.price * this.data.discount.value / 100)
    }
    return  this.data?.price
  }
  changeFavorite(){
    this.data!.isFavorite = !this.data?.isFavorite
  }
}
