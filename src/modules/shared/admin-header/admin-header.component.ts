import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Directions } from '../menu/menu.component';
import { SidePanelService } from '../../admin/services/side-panel.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css',
})
export class AdminHeaderComponent implements OnInit {
  @ViewChild('sidebar') sidebar!: ElementRef<any>;
  @ViewChild('sidebarContainer') sidebarContainer!: ElementRef<any>;
  right: Directions = Directions.right;
  searchForm = new FormGroup({
    text: new FormControl(),
  });

  constructor(
    private router: Router,
    private sidebarService: SidePanelService
  ) {}
  ngOnInit(): void {
    console.log("app-admin-header loaded")
  }

  search() {
    alert(this.searchForm.controls.text.value);
  }

  register() {
    this.router.navigateByUrl('Register');
  }

  login() {
    this.router.navigateByUrl('Login');
  }

  openSidebar(el: HTMLElement) {
    el.classList.remove('animate-rotate');
    el.classList.remove('reverse-rotate');

    if (this.sidebarService.isShow) {
      el.classList.add('reverse-rotate');
      this.sidebarService.hide();
    } else {
      el.classList.add('animate-rotate');
      this.sidebarService.show();
    }
    // this.sidebar.nativeElement.style.display = 'block';
    // this.sidebarContainer.nativeElement.classList.add('show-sidebar');
  }

  closeSidebar() {
    this.sidebarService.hide();
  }
}
