import { Component } from '@angular/core';
import { OptionService } from '../../../../Services/option.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import moment from 'moment';
import { optionType } from '../../../../Enums/optionType';
import { Router } from '@angular/router';
import { ExportService } from '../../../../Export/export.service';

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
    public warningService: WarningService,
    public exportService: ExportService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.optionService.getOptions();
  }
  editOption(option: any) {
    this.router.navigate(['UpdateOption', option.optionId]);
  }

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
      this.selectedOptions = []
      alert('option successfully deleted');
    }
  }
  exportData() {
    const options: { optionId: number; name: string; value: string, optionTypeName: string,  optionTypeId : number }[] = [];
    this.optionService.options.map((option) => {
      options.push({
        optionId: option.optionId!,
        name: option.name,
        value: option.value,
        optionTypeName: option!.optionType.name,
        optionTypeId: option.optionId!
      });
    });
    this.exportService.exportExcel(options, "options")
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}