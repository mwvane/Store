import { Component } from '@angular/core';
import { CategoryService } from '../../../../Services/category.service';
import { ModalService } from '../../../../Services/modal.service';
import moment from 'moment';
import { WarningService } from '../../../../Services/warning.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  selectedCategories:any = []
  constructor(
    public categoryService: CategoryService,
    private modalService: ModalService,
    public warningService: WarningService
  ) {}
  ngOnInit(): void {
    this.categoryService.getAllCategories()
  }
  editCategory(category: any) {}

  confirmDialog(category: any = null) {
    this.modalService.confirmDilaog = true;
    if(category){
      this.selectedCategories = [category];
    }
  }

  async deleteCategory() {
    const isdeleted = await this.categoryService.deleteCategory(
      this.selectedCategories
    );
    if (isdeleted) {
      alert('category deleted');
    }
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
