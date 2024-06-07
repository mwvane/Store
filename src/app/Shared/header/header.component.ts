import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMenuItem } from '../../Models/menuIte';
import { Directions } from '../../Components/menu/menu.component';
import { CategoryService } from '../../Services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('sidebar') sidebar!: ElementRef<any>;
  @ViewChild('sidebarContainer') sidebarContainer!: ElementRef<any>;
  right: Directions = Directions.right;
  searchForm = new FormGroup({
    category: new FormControl(1),
    text: new FormControl(),
  });

  constructor(
    public categoryService: CategoryService,
    private router: Router
  ) {}

  search() {
    alert(this.searchForm.controls.text.value);
  }
  data: IMenuItem[] = [
    { id: 1, text: '$ Dollar' },
    { id: 2, text: '€ Euro' },
    { id: 3, text: '£ Pound' },
    { id: 4, text: '₾ Lari' },
  ];

  register() {
    this.router.navigateByUrl('Register');
  }

  login() {
    this.router.navigateByUrl('Login');
  }

  openSidebar() {
    this.sidebar.nativeElement.style.display = 'block';
    this.sidebarContainer.nativeElement.classList.add('show-sidebar');
  }

  closeCategories() {
    this.sidebar.nativeElement.style.display = 'none';
  }
}
