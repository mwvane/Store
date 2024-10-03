import { AfterContentInit, Component, Input, input } from '@angular/core';
import { ErrorService } from '../../core/Services/error.service';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.css'
})
export class FormErrorComponent implements AfterContentInit {
  @Input() formControl: any
  @Input() errorId: number = 1
  constructor(public errorService: ErrorService){
  }ngAfterContentInit(): void {
    console.log(this.formControl);
    
  }
;
  
}
