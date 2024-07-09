import { Component } from '@angular/core';
import { CountryService } from '../../../../Services/country.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {
  selectedCountries: any = [];
  constructor(
    public countryService: CountryService,
    private modalService: ModalService,
    public warningService: WarningService
  ) {}
  ngOnInit(): void {
    this.countryService.getCountries();
  }
  editOptionType(country: any) {}

  confirmDialog(country: any = null) {
    this.modalService.confirmDilaog = true;
    if (country) {
      this.selectedCountries = [country];
    }
  }

  async deleteCountry() {
    const isdeleted = await this.countryService.deleteCountry(
      this.selectedCountries
    );
    if (isdeleted) {
      alert('country successfully deleted');
    }
  }
}
