import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from '../../../../../app/core/Services/country.service';
import { ModalService } from '../../../../../app/core/Services/modal.service';
import { ExportService } from '../../../../../app/Export/export.service';
import { WarningService } from '../../../../shared/Services/warning.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent {
  selectedCountries: any = [];
  constructor(
    public countryService: CountryService,
    private modalService: ModalService,
    private exportService: ExportService,
    public warningService: WarningService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.countryService.getCountries();
  }
  editOptionType(country: any) {
    this.router.navigate(['UpdateCountry', country.id])
  }

  confirmDialog(country: any = null) {
    this.modalService.confirmDilaog = true;
    if (country) {
      this.selectedCountries = [country];
    }
  }

  deleteCountry() {
    this.countryService.deleteCountry(this.selectedCountries);
    this.selectedCountries = []
  }

  exportData() {
    const countries: { id: number; name: string }[] = [];
    this.countryService.countries.map((country) => {
      countries.push({
        id: country.id!,
        name: country.name,
      });
    });
    this.exportService.exportExcel(countries, 'Manufacturers');
  }
  getReport(){
    if(window.innerWidth < 569){
      return "{totalRecords} entries"
    }
    return "Showing {first} to {last} of {totalRecords} entries"
  }
}
