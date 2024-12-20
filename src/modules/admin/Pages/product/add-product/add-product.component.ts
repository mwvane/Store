import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ManufacturerService } from '../../../../../app/core/Services/manufacturer.service';
import { OptionService } from '../../../../../app/core/Services/option.service';
import { ProductService } from '../../../../../app/core/Services/product.service';
import { CategoryService } from '../../../../shared/Services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  isEditMode: boolean = false;
  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    manufacturer: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    productImages: new FormControl('', [Validators.required]),
    options: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  imagesUrls: string[] = [];
  formData: FormData = new FormData();
  selectedFiles: any;
  ngOnInit(): void {
    // this.categoryService.getAllCategories();
    this.manufacturerServcie.getManufacturers();
    this.optionService.getOptions();
  }

  constructor(
    public categoryService: CategoryService,
    public manufacturerServcie: ManufacturerService,
    public optionService: OptionService,
    public productService: ProductService
  ) {}

  async addProduct() {
    try {
      if (!this.productService.loading) {
        this.formData.append(
          'product',
          JSON.stringify({
            name: this.productForm.controls.name.value,
            price: this.productForm.controls.price.value,
            manufacturer: this.productForm.controls.manufacturer.value,
            category: this.productForm.controls.category.value,
            options: this.productForm.controls.options.value,
            description: this.productForm.controls.description.value,
          })
        );
        const isAdded = await this.productService.addProduct(this.formData);
        if (isAdded) {
          console.log('Product successfully added');
          this.productForm.reset();
          this.selectedFiles = [];
          this.formData = new FormData();
          this.imagesUrls = [];
        }
      }
    } catch (error) {
      console.error('Failed to add product', error);
      // Handle the error appropriately
    }
  }

  selectImages(images: FileList) {
    for (let i = 0; i < images.length; i++) {
      this.formData.append(`images`, images[i], images[i].name);
    }
    this.selectedFiles = images;
    if (this.selectedFiles.length >= 1) {
      this.productForm.patchValue({
        productImages: 'true',
      });
    }

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
