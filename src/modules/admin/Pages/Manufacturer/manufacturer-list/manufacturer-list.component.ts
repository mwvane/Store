import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { Router } from '@angular/router';
import { ManufacturerService } from '../../../../../app/core/Services/manufacturer.service';
import { ModalService } from '../../../../../app/core/Services/modal.service';
import { ExportService } from '../../../../../app/Export/export.service';
import { WarningService } from '../../../../shared/Services/warning.service';

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
    public warningService: WarningService,
    public exportService: ExportService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.manufacturerService.getManufacturers();
  }
  editManufacturer(manufacturer: any) {
    this.router.navigate(['UpdateManufacturer', manufacturer.id]);
  }

  confirmDialog(manufacturer: any = null) {
    this.modalService.confirmDilaog = true;
    if (manufacturer) {
      this.selectedManufacturers = [manufacturer];
    }
  }

  deleteManufacturer() {
    this.manufacturerService.deleteManufacturer(this.selectedManufacturers);
    this.selectedManufacturers = []
  }

  exportData() {
    const manufacturers: { id: number; name: string; country: string }[] = [];
    this.manufacturerService.manufacturers.map((manufacturer) => {
      manufacturers.push({
        id: manufacturer.id!,
        name: manufacturer.name,
        country: manufacturer.country.name,
      });
    });
    this.exportService.exportExcel(manufacturers, 'Manufacturers');
  }

  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }

  getReport(){
    if(window.innerWidth < 569){
      return "{totalRecords} entries"
    }
    return "Showing {first} to {last} of {totalRecords} entries"
  }
}
