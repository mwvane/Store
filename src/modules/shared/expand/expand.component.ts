import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ICategory } from '../Models/category';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.css',
  animations: [
    trigger('expandCollapse', [
      transition(':enter', [
        style({ transform: 'scale(0.9)', opacity: 0 }),
        animate('400ms ease-out', style({ transform: 'scale(1)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate(
          '300ms ease-in',
          style({ transform: 'scale(0.9)', opacity: 0 })
        ),
      ]),
    ]),
  ],

})
export class ExpandComponent {
  @Input() data: ICategory = { id: 0, name: 'category' };
  @Input() border: boolean = false;
  @Input() shadow: boolean = false;
  @Output() itemClick = new EventEmitter();
  @ViewChild('arrow') arrow!: ElementRef;

  isOpen = false;
  openIndex: number | null = null;
  expand() {
    if (this.data.subCategories?.length) {
      if (this.isOpen) {
        this.isOpen = false;
        this.arrow.nativeElement.classList.remove('rotate');
      } else {
        this.isOpen = true;
        this.arrow.nativeElement.classList.add('rotate');
      }
    }
  }

  onItemClick(item: ICategory, el: any) {
    let items: any = document.getElementsByClassName('sidebar-item');
    for (let i of items) {
      i.classList.remove('active');
    }
    el.classList.add('active');
    this.itemClick.emit(item);
  }
}
