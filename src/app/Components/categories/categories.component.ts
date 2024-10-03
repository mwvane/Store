import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { CategoryService } from '../../core/Services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {

  constructor(public categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategories()
  }
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
