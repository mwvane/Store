import { Injectable, signal } from '@angular/core';
import { ICategory } from '../Models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}
  // temp
  categories: ICategory[] = [
    {
      id: 1,
      name: 'console',
      icon: 'bi bi-controller',
      subCategories: [
        { id: 2, name: 'playstation', icon: 'bi bi-joystick' },
        { id: 3, name: 'xbox', icon: 'bi bi-xbox' },
      ],
    },
    {
      id: 4,
      name: 'clothes',
      icon: 'bi bi-backpack2',
      subCategories: [
        { id: 5, name: 'hat', icon: 'bi bi-mortarboard' },
        { id: 6, name: 'jacket', icon: 'bi bi-scissors' },
      ],
    },
    {
      id: 7,
      name: 'tecnics',
      icon: 'bi bi-laptop',
      subCategories: [
        { id: 8, name: 'smarthones', icon: 'bi bi-tablet' },
        { id: 9, name: 'TV', icon: 'bi bi-tv' },
        { id: 10, name: 'watches', icon: 'bi bi-watch' },
      ],
    },
    {
      id: 11,
      name: 'software',
      icon: 'bi bi-braces',
    },
    {
      id: 12,
      name: 'laptop components',
      icon: 'bi bi-memory',
      subCategories: [
        { id: 13, name: 'RAM', icon: 'bi bi-nvme' },
        { id: 14, name: 'video cards', icon: 'bi bi-nvidia' },
        { id: 15, name: 'webcam', icon: 'bi bi-webcam' },
        { id: 16, name: 'mouse', icon: 'bi bi-mouse2' },
        { id: 17, name: 'keyboard', icon: 'bi bi-keyboard' },
        { id: 18, name: 'SSD', icon: 'bi bi-device-ssd' },
      ],
    },
  ];
}
