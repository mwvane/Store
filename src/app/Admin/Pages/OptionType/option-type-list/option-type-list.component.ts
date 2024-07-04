import { Component } from '@angular/core';
import { OptionService } from '../../../../Services/option.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';

@Component({
  selector: 'app-option-type-list',
  templateUrl: './option-type-list.component.html',
  styleUrl: './option-type-list.component.css'
})
export class OptionTypeListComponent {
  selectedOptions: any = [];
  constructor(
    public optionService: OptionService,
    private modalService: ModalService,
    public warningService: WarningService
  ) {}
  ngOnInit(): void {
    this.optionService.getOptionTypes();
  }
  editOptionType(optionType: any) {}

  confirmDialog(option: any = null) {
    this.modalService.confirmDilaog = true;
    if (option) {
      this.selectedOptions = [option];
    }
  }

  async deleteOptionType() {
    const isdeleted = await this.optionService.deleteOption(
      this.selectedOptions
    );
    if (isdeleted) {
      alert('category deleted');
    }
  }
}
