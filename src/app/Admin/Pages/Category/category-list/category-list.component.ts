import { Component } from '@angular/core';
import { CategoryService } from '../../../../core/Services/category.service';
import { ModalService } from '../../../../core/Services/modal.service';
import moment from 'moment';
import { WarningService } from '../../../../core/Services/warning.service';
import { Router } from '@angular/router';
import { ExportService } from '../../../../Export/export.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css',
})
export class CategoryListComponent {
  selectedCategories: any = [];
  constructor(
    public categoryService: CategoryService,
    private modalService: ModalService,
    public warningService: WarningService,
    private exportService: ExportService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

  getReport(){
    if(window.innerWidth < 569){
      return "{totalRecords} entries"
    }
    return "Showing {first} to {last} of {totalRecords} entries"
  }
  editCategory(category: any) {
    this.router.navigate(['UpdateCategory', category.id]);
  }

  confirmDialog(category: any = null) {
    this.modalService.confirmDilaog = true;
    if (category) {
      this.selectedCategories = [category];
    }
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.selectedCategories);
    this.selectedCategories = []
  }
  exportData() {
    const categories: { id: number; name: string; image: string }[] = [];
    this.categoryService.allCategories.map((category) => {
      categories.push({
        id: category.id!,
        name: category.name,
        image: category.image!,
      });
    });
    this.exportService.exportExcel(categories, 'categories');
  }

  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
