import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../Services/product.service';
import { IProduct } from '../../Models/product';

@Component({
  selector: 'app-spacials',
  templateUrl: './spacials.component.html',
  styleUrl: './spacials.component.css'
})
export class SpacialsComponent {
  @ViewChild("listView") listView!: ElementRef
  @ViewChild("gridView") gridView!: ElementRef
  products: IProduct[] = []
  layout: any = 'list';
  
}
