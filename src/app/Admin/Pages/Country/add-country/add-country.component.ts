import { Component } from '@angular/core';
import { CountryService } from '../../../../Services/country.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css',
})
export class AddCountryComponent {
  selectedOptions: any = [];
  countryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  constructor(
    public countryService: CountryService,
    private modalService: ModalService,
    public warningService: WarningService
  ) {}
  ngOnInit(): void {
    this.countryService.getCountries();
  }
  async addCountry() {
    try {
      const isAdded = await this.countryService.addCountry({
        name: this.countryForm.controls.name.value!,
        image: this.countryForm.controls.image.value!,
      });
      if (isAdded) {
        alert('option type successfully added');
        this.countryForm.reset();
      }
    } catch (error) {
      alert('Failed to add option type');
      // Handle the error appropriately
    }
  }
  editCountry(country: any) {}

  confirmDialog(country: any = null) {
    this.modalService.confirmDilaog = true;
    if (country) {
      this.selectedOptions = [country];
    }
  }

  async deleteOption() {
    //   const isdeleted = await this.optionService.deleteOption(
    //     this.selectedOptions
    //   );
    //   if (isdeleted) {
    //     alert('category deleted');
    //   }
  }
}
