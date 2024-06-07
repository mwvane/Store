import { Component, ElementRef, Input } from '@angular/core';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  constructor(public categoryService: CategoryService) {}
  @Input() open: boolean = true;
  expand(categories: any) {
    this.open = !this.open;
    if (!this.open) {
      categories.style.minHeight = 'auto';
    } else {
      categories.style.minHeight = '100%';
    }
  }
}
