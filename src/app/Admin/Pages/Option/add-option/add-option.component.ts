import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';
import { optionType } from '../../../../Enums/optionType';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css',
})
export class AddOptionComponent implements OnInit {
  optionTypes: any = [];
  optionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    optionType: new FormControl("", [Validators.required]),
  });

  ngOnInit(): void {
    this.optionService.getOptions();
    this.optionService.getOptionTypes();
  }

  constructor(public optionService: OptionService) {}

  async addOption() {
    var optenForSave = {
      name: this.optionForm.controls.name.value,
      value: this.optionForm.controls.value.value,
      optionTypeId: this.optionForm.controls.optionType.value!
    }
    try {
      const isAdded = await this.optionService.addOption(optenForSave);
      if (isAdded) {
        alert('option successfully added');
        this.optionForm.reset();
      }
    } catch (error) {
      console.error('Failed to add option', error);
      // Handle the error appropriately
    }
  }
}
