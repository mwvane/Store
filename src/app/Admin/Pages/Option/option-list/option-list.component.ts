import { Component } from '@angular/core';
import { OptionService } from '../../../../Services/option.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import moment from 'moment';
import { optionType } from '../../../../Enums/optionType';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.css'
})
export class OptionListComponent {
  selectedOptions: any = [];
  constructor(
    public optionService: OptionService,
    private modalService: ModalService,
    public warningService: WarningService
  ) {}
  ngOnInit(): void {
    this.optionService.getOptions();
  }
  editOption(option: any) {}

  confirmDialog(option: any = null) {
    this.modalService.confirmDilaog = true;
    if (option) {
      this.selectedOptions = [option];
    }
  }

  async deleteOption() {
    const isdeleted = await this.optionService.deleteOption(
      this.selectedOptions
    );
    if (isdeleted) {
      alert('category deleted');
    }
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
  getOptionTypeName(value: number){
    const colorEnum = optionType[value];
    return colorEnum
  }
}
