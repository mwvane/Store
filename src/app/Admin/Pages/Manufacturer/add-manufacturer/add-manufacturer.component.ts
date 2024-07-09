import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManufacturerService } from '../../../../Services/manufacturer.service';
import { CountryService } from '../../../../Services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrl: './add-manufacturer.component.css',
})
export class AddManufacturerComponent {
  selectedManufacturers: any = [];
  isEditMode: boolean = false
  currentManufacturer: any
  manufacturerForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    country: new FormControl(null, [Validators.required]),
  });

  ngOnInit(): void {
    this.countryService.getCountries();
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.getManufacturerById(id);
      }
    });
  }

  constructor(
    public manufacturerService: ManufacturerService,
    public countryService: CountryService,
    private route: ActivatedRoute
  ) {}

  async getManufacturerById(id: number){
    var manufacturer: any = await this.manufacturerService.getManufacturerById(id);
    if (manufacturer) {
      this.currentManufacturer = manufacturer;
      this.manufacturerForm.patchValue({
        id: manufacturer.id,
        name: manufacturer.name,
        country: manufacturer.country,
      });
    }
  }

  async addManufacturer() {
    try {
      const isAdded = await this.manufacturerService.addManufacturer({
        name: this.manufacturerForm.controls.name.value!,
        country: this.manufacturerForm.controls.country.value!,
      });
      if (isAdded) {
        alert('manufacturer successfully added');
        this.manufacturerForm.reset();
      }
    } catch (error) {
      alert('Failed to add option type');
      // Handle the error appropriately
    }
  }
  async updateManufacturer() {
    try {
      const isUpdated = await this.manufacturerService.upadetManufacturer(
        this.manufacturerForm.value
      );
      if (isUpdated) {
        alert('category successfully updated');
        this.manufacturerForm.reset();
      }
    } catch (error) {
      console.error('Failed to add product', error);
      // Handle the error appropriately
    }
  }
}
