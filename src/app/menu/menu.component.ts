import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { IMenuItem } from '../Models/menuIte';
import { Helpers } from '../helpers';
import { style } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  ngOnInit(): void {
    this.menuId = `dropbtn-${Helpers.generateRandomString(8)}`;
  }
  menuId: string = '';
  @Input() data: IMenuItem[] = [];
  @Input() name: string = 'menu';
  @Output() optionClick = new EventEmitter();
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.id != this.menuId) {
        openDropdown.classList.remove('show');
      }
    }
  }

  onItemClick(item: IMenuItem) {
    this.optionClick.emit(item);
  }

  toggle(event: any, menuPanel: Element) {
    event.preventDefault();
    event.stopPropagation();
    this.onDocumentClick(event);
    menuPanel.classList.toggle('show');
    this.setDirection(menuPanel);
  }

  setDirection(el: any) {
    const location = el.getBoundingClientRect();
    const width = el.clientWidth;
    const height = el.clientHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const gap = 20;
    if (location.right > windowWidth) {
      el.style.left = `${windowWidth - location.right - gap}px`;
    }
    if (location.left < 0) {
      el.style.left = 0;
    }
  }
}
