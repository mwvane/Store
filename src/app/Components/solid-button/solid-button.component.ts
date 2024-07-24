import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-solid-button',
  templateUrl: './solid-button.component.html',
  styleUrl: './solid-button.component.css',
})
export class SolidButtonComponent extends Button {}
