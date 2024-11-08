import { Component } from '@angular/core';
import moment from 'moment';
import { ProductService } from '../../../../../app/core/Services/product.service';
import { ModalService } from '../../../../../app/core/Services/modal.service';
import { ExportService } from '../../../../../app/Export/export.service';
import { WarningService } from '../../../../shared/Services/warning.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
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
        viewCount: product.ViewCount!,
      });
    });
    this.exportService.exportExcel(products, 'categories');
  }

  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }

  getReport() {
    if (window.innerWidth < 569) {
      return '{totalRecords} entries';
    }
    return 'Showing {first} to {last} of {totalRecords} entries';
  }
}
