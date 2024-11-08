import { Component } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { ModalService } from '../../../../../app/core/Services/modal.service';
import { OptionService } from '../../../../../app/core/Services/option.service';
import { ExportService } from '../../../../../app/Export/export.service';
import { ToastService } from '../../../../../app/toast/toast.service';
import { IOption } from '../../../../shared/Models/option';
import { WarningService } from '../../../../shared/Services/warning.service';

@Component({
  selector: 'app-option-list',
  templateUrl: './option-list.component.html',
  styleUrl: './option-list.component.css',
})
export class OptionListComponent {
  selectedOptions: any = [];
  constructor(
    public optionService: OptionService,
    private modalService: ModalService,
    public warningService: WarningService,
    public exportService: ExportService,
    private toastService: ToastService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.optionService.getOptions();
  }
  editOption(option: IOption) {
    this.router.navigate(['UpdateOption', option.id]);
  }

  confirmDialog(option: any = null) {
    this.modalService.confirmDilaog = true;
    if (option) {
      this.selectedOptions = [option];
    }
  }

  deleteOption() {
    this.optionService.deleteOption(this.selectedOptions);
    this.selectedOptions = [];
  }

  exportData() {
    const options: {
      optionId: number;
      name: string;
      value: string;
      optionTypeName: string;
      optionTypeId: number;
    }[] = [];
    this.optionService.options.map((option) => {
      options.push({
        optionId: option.id!,
        name: option.name,
        value: option.value,
        optionTypeName: option!.optionType.name,
        optionTypeId: option.id!,
      });
    });
    this.exportService.exportExcel(options, 'options');
  }
  getReport() {
    if (window.innerWidth < 569) {
      return '{totalRecords} entries';
    }
    return 'Showing {first} to {last} of {totalRecords} entries';
  }

  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
