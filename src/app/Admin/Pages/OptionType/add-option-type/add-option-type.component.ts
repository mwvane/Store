import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';

@Component({
  selector: 'app-add-option-type',
  templateUrl: './add-option-type.component.html',
  styleUrl: './add-option-type.component.css'
})
export class AddOptionTypeComponent implements OnInit {
  optionTypes: any = [];
  optionTypeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.optionService.getOptions();
    this.optionService.getOptionTypes();
  }

  constructor(public optionService: OptionService) {}

  async addOptionType() {
    try {
      const isAdded = await this.optionService.addOptionType(this.optionTypeForm.value);
      if (isAdded) {
        alert('option type successfully added');
        this.optionTypeForm.reset();
      }
    } catch (error) {
      console.error('Failed to add option type', error);
      // Handle the error appropriately
    }
  }
}
