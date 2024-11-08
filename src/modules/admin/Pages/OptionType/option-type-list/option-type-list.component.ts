import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from '../../../../../app/core/Services/modal.service';
import { OptionService } from '../../../../../app/core/Services/option.service';
import { ExportService } from '../../../../../app/Export/export.service';
import { IOptionType } from '../../../../shared/Models/optionType';
import { WarningService } from '../../../../shared/Services/warning.service';

@Component({
  selector: 'app-option-type-list',
  templateUrl: './option-type-list.component.html',
  styleUrl: './option-type-list.component.css',
})
export class OptionTypeListComponent {
  selectedOptions: any = [];
  constructor(
    public optionService: OptionService,
    private modalService: ModalService,
    public warningService: WarningService,
    public exportservice: ExportService,
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

  deleteOptionType() {
    this.optionService.deleteOptionType(this.selectedOptions);
    this.selectedOptions = [];
  }

  getReport() {
    if (window.innerWidth < 569) {
      return '{totalRecords} entries';
    }
    return 'Showing {first} to {last} of {totalRecords} entries';
  }
}
