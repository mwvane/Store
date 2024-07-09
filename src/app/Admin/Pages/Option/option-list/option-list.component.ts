import { Component } from '@angular/core';
import { OptionService } from '../../../../Services/option.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import moment from 'moment';
import { optionType } from '../../../../Enums/optionType';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}
  ngOnInit(): void {
    this.optionService.getOptions();
  }
  editOption(option: any) {
    this.router.navigate(['UpdateOption', option.id]);
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
      alert('option successfully deleted');
    }
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}