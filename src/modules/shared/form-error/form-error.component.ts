import { Component, Input } from '@angular/core';
import { ErrorService } from '../../../app/core/Services/error.service';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css',
})
export class FormErrorComponent {
  @Input() formControl: any;
  @Input() errorId: number = 1;
  constructor(public errorService: ErrorService) {}
  ngAfterContentInit(): void {
    console.log(this.formControl);
  }
}
