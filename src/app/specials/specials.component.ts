import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IMenuItem } from '../Models/menuIte';
import { IProduct } from '../Models/product';

@Component({
  selector: 'app-specials',
  templateUrl: './specials.component.html',
  styleUrl: './specials.component.css'
})
export class SpecialsComponent {
  @Input() data : IProduct[] = []
  @Output() sliderClick = new EventEmitter()
  customOptions: any
  ngOnInit(): void {
    this.customOptions = {
      loop: false,
      autoplay: false,
      autoplayTimeout: 4000,
      mouseDrag: true,
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
          items: 3
        },
        769: {
          items: 4,
        },
        940: {
          items: 5,
        },
        1400: {
          items: 6,
        },
      },
      nav: false,
    };
  }

  onItemClick(item: IProduct){
    alert()
  }
}
