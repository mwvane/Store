import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';
import { optionType } from '../../../../Enums/optionType';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../../../toast/toast.service';
import { Toast, toastType } from '../../../../toast/toast_model';
import { IOption } from '../../../../Models/option';

@Component({
  selector: 'app-add-option',
  templateUrl: './add-option.component.html',
  styleUrl: './add-option.component.css',
})
export class AddOptionComponent implements OnInit {
  optionTypes: any = [];
  isEditMode: boolean = false;
  currentOption: any;
  optionForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required]),
    optionTypeId: new FormControl("", [Validators.required]),
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
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  async getOptionById(id: number) {
    var option: IOption  = await this.optionService.getOptionById(id) as IOption;
    if (option) {
      this.currentOption = option;
      this.optionForm.patchValue({
        id: option.id,
        name: option.name,
        value: option.value,
        optionTypeId: option.optionType.id.toString(),
      });
    }
  }

  addOption() {
    var optenForSave = {
      name: this.optionForm.controls.name.value,
      value: this.optionForm.controls.value.value,
      optionTypeId: this.optionForm.controls.optionTypeId.value!,
    };
    try {
      this.optionService.addOption(optenForSave);
      this.optionForm.reset();
    } catch (error) {
      console.error('Failed to add option', error);
      // Handle the error appropriately
    }
  }

  updateOption() {
    this.optionService.upadateOption(this.optionForm.value);
  }
}
