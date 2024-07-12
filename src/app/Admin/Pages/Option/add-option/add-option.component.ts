import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';
import { optionType } from '../../../../Enums/optionType';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css',
})
export class AddOptionComponent implements OnInit {
  optionTypes: any = [];
  isEditMode: boolean = false;
  currentOption: any
  optionForm = new FormGroup({
    optionId: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    optionTypeId: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.optionService.getOptions();
    this.optionService.getOptionTypes();
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.getOptionById(id);
      }
    });
  }

  constructor(
    public optionService: OptionService,
    private route: ActivatedRoute
  ) {}

  async getOptionById(id: number){
    var option: any = await this.optionService.getOptionById(id);
    debugger
    if (option) {
      this.currentOption = option;
      this.optionForm.patchValue({
        optionId: option.optionId,
        name: option.name,
        value: option.value,
        optionTypeId: option.optionTypeId
      });
    }
  }

  async addOption() {
    var optenForSave = {
      name: this.optionForm.controls.name.value,
      value: this.optionForm.controls.value.value,
      optionTypeId: this.optionForm.controls.optionTypeId.value!,
    };
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

  async updateOption() {
    try {
      const isUpdated = await this.optionService.upadateOption(
        this.optionForm.value
      );
      if (isUpdated) {
        alert('option successfully updated');
        this.optionForm.reset();
      }
    } catch (error) {
      console.error(`faild to ${this.isEditMode ? 'update' : 'add'} option` , error);
    }
  }
}
