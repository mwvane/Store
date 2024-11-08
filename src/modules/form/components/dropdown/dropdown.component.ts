import { Component, forwardRef, Input, OnInit, Type } from '@angular/core';
import { DropdownService } from './dropdown.service';
import { IDropdownItem } from '../../models/form.interface';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true,
    },
  ],
})
export class DropdownComponent implements OnInit, ControlValueAccessor {
  @Input() options: IDropdownItem[] | undefined = undefined;
  @Input() webMethod: string | undefined = '';
  @Input() type!: Type<any>;
  @Input() filter: boolean = false;
  isLoading: boolean = false;
  constructor(private dropdownService: DropdownService) {}
  ngOnInit(): void {
    if (this.webMethod) {
      this.getOptions(this.webMethod);
    }
  }

  value: any;

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state if needed
  }

  handleChange(event: any): void {
    this.value = event.value;
    this.onChange(this.value);
    this.onTouched();
  }

  getOptions(webMethod: string) {
    this.isLoading = true;
    this.dropdownService.getData(webMethod).subscribe({
      next: (response) => {
        this.options = response.data;
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error fetching data:', error);
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
