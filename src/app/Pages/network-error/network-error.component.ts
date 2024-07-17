import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { StyleService } from '../../helpers/style.service';

@Component({
  selector: 'app-network-error',
  templateUrl: './network-error.component.html',
  styleUrl: './network-error.component.css',
})
export class NetworkErrorComponent {
  constructor(private location: Location, public styleService: StyleService) {}

  retry(): void {
    this.location.back(); // Reloads the current page
  }
}
