import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import {
  controlTypes,
  IForm,
  IFormControl,
  IValidator,
} from '../../models/form.interface';
import { FormValidator } from '../../enum/form.validator-enums';
import { FormService } from '../../form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.css',
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  @Input() showRequired: boolean = true;
  @Input() url: string = '';
  @Output() submit = new EventEmitter();
  controlType = controlTypes;
  inputTypes: string[] = [];
  loading: boolean = false;
  constructor(private fb: FormBuilder, private formService: FormService) {}
  dynamicFormGroup: FormGroup = this.fb.group({});

  ngOnInit(): void {
    this.inputTypes = [
      this.controlType.email,
      this.controlType.nubmer,
      this.controlType.password,
      this.controlType.text,
    ];
    if (this.url) {
      this.loading = true;
      this.formService.loadForm(this.url).subscribe((response) => {
        if (response.data) {
          this.form = response.data;
          this.loading = false;
          this.createForm();
        }
      });
    }
  }

  createForm() {
    for (let section of this.form!.sections) {
      this.addControl(section.formControls);
    }
  }

  addControl(control: IFormControl[]) {
    if (control) {
      let formGroup: any = {};
      control.forEach((control: IFormControl) => {
        let controlValidators: any = [];
        if (control.validators) {
          control.validators.forEach((val: IValidator) => {
            if (val.validatorName === FormValidator.required) {
              controlValidators.push(Validators.required);
            }
            if (val.validatorName === FormValidator.email) {
              controlValidators.push(Validators.email);
            }
            if (val.validatorName === FormValidator.maxLength) {
              controlValidators.push(
                Validators.maxLength(val.minLength as number)
              );
            }
            if (val.validatorName === FormValidator.minLength) {
              controlValidators.push(
                Validators.minLength(val.maxLength as number)
              );
            }
            if (val.validatorName === FormValidator.pattern) {
              controlValidators.push(Validators.pattern(val.pattern as string));
            }
          });
        }
        formGroup[control.name] = [control.value || '', controlValidators];
      });
      this.dynamicFormGroup = this.fb.group(formGroup);
    }
  }

  isRequired(control: IFormControl) {
    for (let validator of control.validators) {
      if (validator.required) {
        return true;
      }
    }
    return false;
  }

  onSubmit() {
    this.submit.emit(this.dynamicFormGroup.value);
  }
}
