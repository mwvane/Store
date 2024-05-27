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
  viewChild,
} from '@angular/core';
import { IMenuItem } from '../Models/menuIte';
import { Helpers } from '../helpers';
import { style } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
    this.menuId = `dropbtn-${Helpers.generateRandomString(8)}`;
  }

  constructor(private elRef: ElementRef){}

  ngAfterViewInit(): void {
    var parent = this.elRef.nativeElement.parentElement
    if(parent.classList.contains("menu")){
      parent.addEventListener('click',this.toggle.bind(this))
      parent.style.position = "relative"
    }
    //  parent.id = this.menuId
  }

  menuId: string = '';
  //@Input() data: IMenuItem[] = [];
  @Input() template!: TemplateRef<any>;
  @Input() closeParent: boolean = true;
  @Output() optionClick = new EventEmitter();
  @ViewChild('menuPanel')  menuPanel: any
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
    this.menuPanel.nativeElement.classList.toggle('show');
    this.setDirection(this.menuPanel.nativeElement);
  }

  setDirection(el: any) {
    el.style.left = 0;
    const location = el.getBoundingClientRect();
    const width = el.clientWidth;
    const height = el.clientHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const gap = 20;
    if (location.right > windowWidth) {
      el.style.left = `${windowWidth - location.right - gap}px`;
      return
    }
    if (location.left < 0) {
      el.style.left = 0;
      return
    }
  }
}
