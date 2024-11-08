import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { LanguageModule } from '../language/language.module';
import { DropdownModule } from 'primeng/dropdown';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DynamicFormComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    LanguageModule,
    DropdownModule,
    RouterModule
  ],
  exports: [
    DynamicFormComponent,
    DropdownComponent
  ]
})
export class FormModule { }
