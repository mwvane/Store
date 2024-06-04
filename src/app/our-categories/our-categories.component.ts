import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMenuItem } from '../Models/menuIte';

@Component({
  selector: 'app-our-categories',
  templateUrl: './our-categories.component.html',
  styleUrl: './our-categories.component.css'
})
export class OurCategoriesComponent implements OnInit {
  @Input() data : IMenuItem[] = []
  @Output() sliderClick = new EventEmitter()
  customOptions: any
  ngOnInit(): void {
    this.customOptions = {
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      mouseDrag: false,
      touchDrag: true,
      pullDrag: true,
      dots: false,
      navSpeed: 2,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1,
        },
        300: {
          items: 2
        },
        600: {
          items: 4
        },
        769: {
          items: 5,
        },
        940: {
          items: 7,
        },
        1400: {
          items: 9,
        },
      },
      nav: false,
    };
  }

  onItemClick(item: IMenuItem){
    this.sliderClick.emit(item)
  }
}
