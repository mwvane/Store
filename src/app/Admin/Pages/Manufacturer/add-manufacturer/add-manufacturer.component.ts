import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManufacturerService } from '../../../../Services/manufacturer.service';
import { CountryService } from '../../../../Services/country.service';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrl: './add-manufacturer.component.css',
})
export class AddManufacturerComponent {
  selectedManufacturers: any = [];
  manufacturerForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    country: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.countryService.getCountries();
  }

  constructor(public manufacturerService: ManufacturerService, public countryService: CountryService) {}

  async addManufacturer() {
    try {
      const isAdded = await this.manufacturerService.addManufacturer(
        {
          name: this.manufacturerForm.controls.name.value!,
          country: this.manufacturerForm.controls.country.value!
        }
      );
      if (isAdded) {
        alert('manufacturer successfully added');
        this.manufacturerForm.reset();
      }
    } catch (error) {
      alert('Failed to add option type');
      // Handle the error appropriately
    }
  }
}
