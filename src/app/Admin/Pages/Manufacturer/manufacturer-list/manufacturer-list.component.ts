import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from '../../../../Services/manufacturer.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import moment from 'moment';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrl: './manufacturer-list.component.css',
})
export class ManufacturerListComponent implements OnInit {
  selectedManufacturers: any = [];
  constructor(
    public manufacturerService: ManufacturerService,
    private modalService: ModalService,
    public warningService: WarningService
  ) {}
  ngOnInit(): void {
    this.manufacturerService.getManufacturers();
  }
  editManufacturer(manufacturer: any) {}

  confirmDialog(manufacturer: any = null) {
    this.modalService.confirmDilaog = true;
    if (manufacturer) {
      this.selectedManufacturers = [manufacturer];
    }
  }

  async deleteManufacturer() {
    const isdeleted = await this.manufacturerService.deleteManufacturer(
      this.selectedManufacturers
    );
    if (isdeleted) {
      alert('category deleted');
    }
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
