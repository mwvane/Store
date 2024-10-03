import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { IMenuItem } from '../../core/Models/menuIte';

@Component({
  selector: 'app-carousel-holder',
  templateUrl: './carousel-holder.component.html',
  styleUrl: './carousel-holder.component.css',
})
export class CarouselHolderComponent implements OnInit {
  ngOnInit(): void {
    this.customOptions = {
      loop: this.loop,
      autoplay: true,
      autoplayTimeout: this.timeout * 1000,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: this.dots,
      navSpeed: 4,
      navText: ['', ''],
      responsive: {
        0: {
          items: this.itemsOnXsm,
        },
        400: {
          items: this.showSingle ? 1 : this.itemsOnSm,
        },
        769: {
          items: this.showSingle ? 1 : this.itemsOnMd,
        },
        940: {
          items: this.showSingle ? 1 : this.itemsOnLg,
        },
        1400: {
          items: this.showSingle ? 1 : this.itemsOnXlg,
        },
      },
      nav: this.nav,
    };
  }
  @Input() timeout: number = 4;
  @Input() data: IMenuItem[] = [];
  @Input() showSingle: boolean = false;
  @Input() itemsOnXsm: number = 1;
  @Input() itemsOnMd: number = 3;
  @Input() itemsOnSm: number = 2;
  @Input() itemsOnLg: number = 4;
  @Input() itemsOnXlg: number = 6;
  @Input() dots: boolean = true;
  @Input() nav: boolean = false;
  @Input() loop: boolean = true;
  @Output() itemClick = new EventEmitter();
  customOptions: any;
  OnItemClick(item: IMenuItem) {
    this.itemClick.emit(item);
  }
}
