import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { IProduct } from '../../Models/product';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrl: './product-grid.component.css',
})
export class ProductGridComponent implements AfterViewInit, OnInit {
  @Input() view: string = '';
  @ViewChild('listView') listView!: ElementRef;
  @ViewChild('gridView') gridView!: ElementRef;
  products: IProduct[] = [];
  layout: 'list' | 'grid' = 'grid';

  constructor(public producService: ProductService) {}
  ngAfterViewInit(): void {
    this.setGridView();
  }
  ngOnInit(): void {
    this.products = this.producService.products;
  }

  changeViewFormat(el: any) {
    el.style.color = 'var(--lightGreen)';
  }
  setListView() {
    this.gridView.nativeElement.classList.remove('active');
    this.listView.nativeElement.classList.add('active');
    this.layout = 'list';
  }
  setGridView() {
    this.gridView.nativeElement.classList.add('active');
    this.listView.nativeElement.classList.remove('active');
    this.layout = 'grid';
  }
}
