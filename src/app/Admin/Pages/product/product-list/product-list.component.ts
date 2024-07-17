import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Services/product.service';
import moment from 'moment';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import { ExportService } from '../../../../Export/export.service';
import { ICategory } from '../../../../Models/category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  selectedProducts: any;
  constructor(
    public productService: ProductService,
    private modalService: ModalService,
    public warningService: WarningService,
    private exportService: ExportService
  ) {}
  ngOnInit(): void {
    this.productService.getProducts();
  }
  editProduct(product: any) {}

  confirmDialog(product: any = null) {
    this.modalService.confirmDilaog = true;
    if (product) {
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
  exportData() {
    const products: {
      id: number;
      name: string;
      image: string;
      category: string;
      manufacturer: string;
      createDate: Date;
      price: number;
      rating: number;
      description: string;
      viewCount: number;

    }[] = [];
    this.productService.productsFromDb.map((product) => {
      products.push({
        id: product.productId!,
        name: product.name,
        image: product.images?.join('\n')!,
        category: product.category!.name,
        manufacturer: product.manufacturer!.name,
        createDate: product.createDate!,
        price: product.price,
        rating: product.rating!,
        description: product.description!,
        viewCount: product.ViewCount!
      });
    });
    this.exportService.exportExcel(products, 'categories');
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
