import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrl: './network-error.component.css',
})
export class NetworkErrorComponent {
  constructor(private location: Location) {}

  retry(): void {
    this.location.back(); // Reloads the current page
  }
}
