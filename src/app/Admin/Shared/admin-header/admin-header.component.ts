import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Directions } from '../../../Components/menu/menu.component';
import { FormControl, FormGroup } from '@angular/forms';
import { SidePanelService } from '../../Services/side-panel.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {
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

  search() {
    alert(this.searchForm.controls.text.value);
  }

  register() {
    this.router.navigateByUrl('Register');
  }

  login() {
    this.router.navigateByUrl('Login');
  }

  openSidebar() {
    this.sidebarService.show()
    // this.sidebar.nativeElement.style.display = 'block';
    // this.sidebarContainer.nativeElement.classList.add('show-sidebar');
  }

  closeSidebar() {
    this.sidebarService.hide()
  }
}
