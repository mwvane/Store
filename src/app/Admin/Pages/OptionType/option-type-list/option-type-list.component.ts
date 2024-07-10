import { Component } from '@angular/core';
import { OptionService } from '../../../../Services/option.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import { Router } from '@angular/router';
import { IOptionType } from '../../../../Models/optionType';

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
    public warningService: WarningService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.optionService.getOptionTypes();
  }
  editOptionType(optionType: IOptionType) {
    this.router.navigate(['UpdateOptionType', optionType.id]);
  }

  confirmDialog(option: any = null) {
    this.modalService.confirmDilaog = true;
    if (option) {
      this.selectedOptions = [option];
    }
  }

  async deleteOptionType() {
    const isdeleted = await this.optionService.deleteOptionType(
      this.selectedOptions
    );
    if (isdeleted) {
      alert('option type successfully deleted');
    }
  }
}
