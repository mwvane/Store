import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-option-type',
  templateUrl: './add-option-type.component.html',
  styleUrl: './add-option-type.component.css',
})
export class AddOptionTypeComponent implements OnInit {
  optionTypes: any = [];
  isEditMode: boolean = false;
  currentOptionType: any;
  optionTypeForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.optionService.getOptions();
    this.optionService.getOptionTypes();
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.getOptionTypeById(id);
      }
    });
  }

  constructor(
    public optionService: OptionService,
    private route: ActivatedRoute
  ) {}

  async getOptionTypeById(id: number) {
    var optionType: any = await this.optionService.getOptionTypeById(id);
    if (optionType) {
      this.optionTypeForm.patchValue({
        id: optionType.id,
        name: optionType.name,
      });
    }
  }

  addOptionType() {
    try {
      this.optionService.addOptionType(this.optionTypeForm.value);
      this.optionTypeForm.patchValue({
        id: 0,
        name: '',
      });
    } catch (error) {
      console.error('Failed to add option type', error);
    }
  }

  async updateOptionType() {
    this.optionService.upadateOptionType(this.optionTypeForm.value);
  }
}
