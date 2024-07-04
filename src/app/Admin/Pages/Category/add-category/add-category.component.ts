import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../Services/category.service';
import { WarningService } from '../../../../Services/warning.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    parentCategoryId: new FormControl(null),
  });
  constructor(
    public categoryService: CategoryService,
    public warningservice: WarningService
  ){}
  ngOnInit(): void {
    this.categoryService.getAllCategories()
  }
  async addCategory() {
    try {
      if (!this.categoryService.isLoading) {
        const isAdded = await this.categoryService.addCategory(this.categoryForm.value);
        if (isAdded) {
          alert('category successfully added');
          this.categoryForm.reset();
        }
      }
    } catch (error) {
      console.error('Failed to add product', error);
      // Handle the error appropriately
    }
  }
}
