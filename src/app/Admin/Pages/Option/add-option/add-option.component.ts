import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';
import { optionType } from '../../../../Enums/optionType';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css',
})
export class AddOptionComponent implements OnInit, AfterViewInit {
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
  ngAfterViewInit(): void {
    this.optionTypes = this.getOptionTypeNames();
  }

  async addOption() {
    var optenForSave = {
      name: this.optionForm.controls.name.value,
      value: this.optionForm.controls.value.value,
      optionTypeId: this.optionForm.controls.optionType.value!
    }
    try {
      const isAdded = await this.optionService.addOption(optenForSave);
      if (isAdded) {
        console.log('option successfully added');
        this.optionForm.reset();
      }
    } catch (error) {
      console.error('Failed to add option', error);
      // Handle the error appropriately
    }
  }

  getOptionTypeNames() {
    const optionsTpes: { id: number; name: string}[] = [];
    for (let key of Object.keys(optionType)) {
      optionsTpes.push({ id: 1, name: key});
    }
    return optionsTpes;
  }
}
