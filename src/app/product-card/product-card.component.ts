import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../Models/product';
import { CurencyService } from '../currency/curency.service';
import { ModalService } from '../Services/modal.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() data?: IProduct
  constructor(public currencyService: CurencyService, private modalService : ModalService){
  }
  get descountedPrice(){
    if(this.data?.price && this.data.discount?.value){
      return this.data.price - (this.data.price * this.data.discount.value / 100)
    }
    return  this.data?.price
  }
  OnChangeFavorite(e : any){
    e.preventDefault()
    e.stopPropagation()
    this.modalService.loginDialog = true // temp
  }
  OnAddToCart(e: any){
    e.preventDefault()
    e.stopPropagation()
    this.modalService.loginDialog = true // temp

  }
}
