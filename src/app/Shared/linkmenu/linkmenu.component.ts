import { Component } from '@angular/core';
import { Directions } from '../../Components/menu/menu.component';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-linkmenu',
  templateUrl: './linkmenu.component.html',
  styleUrl: './linkmenu.component.css',
})
export class LinkmenuComponent {
  right: Directions = Directions.right;
  constructor(public categoryService: CategoryService) {}
}
