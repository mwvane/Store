import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ICategory } from '../../Models/category';

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrl: './expand.component.css',
})
export class ExpandComponent {
  @Input() data: ICategory = { id: 0, name: 'category' };
  @Input() border: boolean = false;
  @Input() shadow: boolean = false;
  @Output() itemClick = new EventEmitter()

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
  onItemClick(item : ICategory){
    this.itemClick.emit(item)
  }
}
