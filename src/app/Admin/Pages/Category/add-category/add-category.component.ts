import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../../Services/category.service';
import { WarningService } from '../../../../Services/warning.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css',
})
export class AddCategoryComponent implements OnInit {
  categoryForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    parentCategoryId: new FormControl(null),
  });
  currentCategory: any;
  isEditMode: boolean = false;

  constructor(
    public categoryService: CategoryService,
    public warningservice: WarningService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories();
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.getCategoryById(id);
      }
    });
  }
  async getCategoryById(id: number) {
    var category: any = await this.categoryService.getCategoryById(id);
    if (category) {
      this.currentCategory = category;
      this.categoryForm.patchValue({
        id: category.categoryId,
        name: category.name,
        image: category.image,
        parentCategoryId: category.parentCategoryId,
      });
    }
  }
  addCategory() {
    if (!this.categoryService.isLoading) {
      this.categoryService.addCategory(this.categoryForm.value);
      this.categoryForm.reset();
      this.categoryForm.patchValue({
        id: 0
      })
    }
  }

  updateCategory() {
    this.categoryService.UpdateCategory(this.categoryForm.value);
  }
}
