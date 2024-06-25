import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../Services/category.service';
import { ManufacturerService } from '../../../Services/manufacturer.service';
import { OptionService } from '../../../Services/option.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    manufacturer: new FormControl(0, [Validators.required]),
    category: new FormControl(0, [Validators.required]),
    productImages: new FormControl('', [Validators.required]),
    options: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.categoryService.getAllCategories();
    this.manufacturerServcie.getManufacturers();
    this.optionService.getOptions()
  }

  constructor(
    public categoryService: CategoryService,
    public manufacturerServcie: ManufacturerService,
    public optionService: OptionService
  ) {}

  addProduct() {
    console.log(this.productForm.controls);
  }
}
