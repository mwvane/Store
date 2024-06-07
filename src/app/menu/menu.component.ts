import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { IMenuItem } from '../Models/menuIte';
import { Helpers } from '../helpers';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.menuId = `dropbtn-${Helpers.generateRandomString(8)}`;
  }

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    var parent = this.elRef.nativeElement.parentElement;
    if (parent.classList.contains('menu')) {
      if (this.toggleOnHover) {
        parent.addEventListener('mouseenter', this.toggle.bind(this));
        parent.addEventListener('mouseleave', this.toggle.bind(this));
      } else {
        parent.addEventListener('click', this.toggle.bind(this));
      }
      parent.style.position = 'relative';
    }
    //  parent.id = this.menuId
  }

  menuId: string = '';
  @Input() template!: TemplateRef<any>;
  @Input() closeParent: boolean = true;
  @Input() toggleOnHover: boolean = false;
  @Input() direction: Directions = Directions.down;
  @Output() optionClick = new EventEmitter();
  @ViewChild('menuPanel') menuPanel: any;
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.id != this.menuId && this.closeParent) {
        openDropdown.classList.remove('show');
      }
    }
  }

  onItemClick(item: IMenuItem) {
    this.optionClick.emit(item);
  }

  toggle(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.onDocumentClick(event);
    this.setDirection(this.menuPanel.nativeElement);
  }

  setDirection(el: any) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    el.classList.toggle('show');
    el.style.left = 0;
    const location = el.getBoundingClientRect();
    const width = el.clientWidth;
    const height = el.clientHeight;
    const gap = 20;
    if (this.direction == Directions.right) {
      el.style.left = `${width + gap}px`;
      el.style.top = `${0}px`;
      return;
    }

    if (location.right > windowWidth) {
      el.style.left = `${windowWidth - location.right - gap}px`;
      return;
    }
    if (location.left < 0) {
      el.style.left = 0;
      return;
    }
  }
}

export enum Directions {
  right,
  left,
  up,
  down,
}
