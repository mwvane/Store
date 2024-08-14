import { Component } from '@angular/core';
import { OptionService } from '../../../../Services/option.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import moment from 'moment';
import { optionType } from '../../../../Enums/optionType';
import { Router } from '@angular/router';
import { ExportService } from '../../../../Export/export.service';
import { ToastService } from '../../../../toast/toast.service';
import { Toast, toastType } from '../../../../toast/toast_model';
import { IOption } from '../../../../Models/option';

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
    this.selectedOptions = []
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
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
