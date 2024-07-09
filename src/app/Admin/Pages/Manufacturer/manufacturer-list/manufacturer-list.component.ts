import { Component, OnInit } from '@angular/core';
import { ManufacturerService } from '../../../../Services/manufacturer.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import moment from 'moment';
import { Router } from '@angular/router';

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

  async deleteManufacturer() {
    const isdeleted = await this.manufacturerService.deleteManufacturer(
      this.selectedManufacturers
    );
    if (isdeleted) {
      alert('manufacturer sucessfully deleted');
    }
  }
  formatdate(date: any) {
    return moment(date).endOf('day').fromNow();
  }
}
