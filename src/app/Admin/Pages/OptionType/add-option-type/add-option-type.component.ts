import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OptionService } from '../../../../Services/option.service';
import { ActivatedRoute } from '@angular/router';
import { ToastService } from '../../../../toast/toast.service';
import { Toast, toastType } from '../../../../toast/toast_model';

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
    optionTypeId: new FormControl(0),
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
    private route: ActivatedRoute,
    private toastService: ToastService
  ) {}

  async getOptionTypeById(id: number) {
    var optionType: any = await this.optionService.getOptionTypeById(id);
    if (optionType) {
      this.optionTypeForm.patchValue({
        optionTypeId: optionType.optionTypeId,
        name: optionType.name,
      });
    }
  }

  async addOptionType() {
    try {
      const isAdded = await this.optionService.addOptionType(
        this.optionTypeForm.value
      );
      if (isAdded) {
        this.toastService.show(
          new Toast(
            'successfully added',
            'option type successfully added',
            toastType.success
          )
        );
        this.optionTypeForm.reset();
      }
    } catch (error) {
      console.error('Failed to add option type', error);
      // Handle the error appropriately
    }
  }

  async updateOptionType() {
    try {
      if(!this.optionTypeForm.dirty){
        this.toastService.show(
          new Toast(
            'no changes',
            'there is no any changes! change something and try again',
            toastType.info
          )
        );
        return
      }
      const isUpdated = await this.optionService.upadateOptionType(
        this.optionTypeForm.value
      );
      if (isUpdated) {
        this.toastService.show(
          new Toast(
            'successfully updated',
            'option type successfully updated',
            toastType.success
          )
        );
      }
    } catch (error) {
      console.error(
        `faild to ${this.isEditMode ? 'update' : 'add'} option`,
        error
      );
    }
  }
}
