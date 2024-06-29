import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/product.service';
import moment from 'moment';
import { ModalService } from '../../../Services/modal.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  selectedProducts: any;
  constructor(
    public productService: ProductService,
    private modalService: ModalService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts()
  }
  editProduct(product: any) {}

  confirmDialog(product: any = null) {
    this.modalService.confirmDilaog = true;
    if(product){
      this.selectedProducts = [product];
    }
  }

  async deleteSelectedProducts() {
    const isdeleted = await this.productService.deleteProducts(
      this.selectedProducts
    );
    if (isdeleted) {
      alert('product deleted');
    }
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
