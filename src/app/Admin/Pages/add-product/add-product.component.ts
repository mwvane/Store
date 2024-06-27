import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../../Services/category.service';
import { ManufacturerService } from '../../../Services/manufacturer.service';
import { OptionService } from '../../../Services/option.service';
import { ProductService } from '../../../Services/product.service';

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
    // productImages: new FormControl(new FormData(), [Validators.required]),
    options: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  imagesUrls: string[] = [];
  formData: FormData = new FormData();
  selectedFiles: any;
  ngOnInit(): void {
    this.categoryService.getAllCategories();
    this.manufacturerServcie.getManufacturers();
    this.optionService.getOptions();
  }

  constructor(
    public categoryService: CategoryService,
    public manufacturerServcie: ManufacturerService,
    public optionService: OptionService,
    private productService: ProductService
  ) {}

  addProduct() {
    console.log(this.productForm.controls);
    this.formData.append("product", JSON.stringify(this.productForm.value))
    this.productService.addProduct(this.formData);
  }

  selectImages(images: FileList) {
    for (let i = 0; i < images.length; i++) {
      this.formData.append(`images`, images[i], images[i].name);
    }
    this.selectedFiles = images;

    // priview images
    if (images.length) {
      for (let i = 0; i < images.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(images[i]);
        reader.onload = (event: any) => {
          this.imagesUrls.push(event.target.result);
        };
      }
    }
  }
}
