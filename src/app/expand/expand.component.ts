import {
  Component,
  ElementRef,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ICategory } from '../Models/category';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.css',
})
export class ExpandComponent {
  @Input() data: ICategory = { id: 0, name: 'category' };
  @Input() border: boolean = false;
  @Input() shadow: boolean = false;

  isOpen = false;
  expand() {
    if (this.data.subCategories?.length) {
      if (this.isOpen) {
        this.isOpen = false;
      } else {
        this.isOpen = true;
      }
    }
  }
}
