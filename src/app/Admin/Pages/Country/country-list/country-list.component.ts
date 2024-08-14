import { Component } from '@angular/core';
import { CountryService } from '../../../../Services/country.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import { ExportService } from '../../../../Export/export.service';
import { Router } from '@angular/router';

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
}
