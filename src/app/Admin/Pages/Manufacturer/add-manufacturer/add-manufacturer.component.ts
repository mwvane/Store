import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ManufacturerService } from '../../../../core/Services/manufacturer.service';
import { CountryService } from '../../../../core/Services/country.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-manufacturer',
  templateUrl: './add-manufacturer.component.html',
  styleUrl: './add-manufacturer.component.css',
})
export class AddManufacturerComponent {
  selectedManufacturers: any = [];
  isEditMode: boolean = false;
  currentManufacturer: any;
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

  async getManufacturerById(id: number) {
    var manufacturer: any = await this.manufacturerService.getManufacturerById(
      id
    );
    if (manufacturer) {
      this.currentManufacturer = manufacturer;
      this.manufacturerForm.patchValue({
        id: manufacturer.id,
        name: manufacturer.name,
        country: manufacturer.country,
      });
    }
  }

  addManufacturer() {
    this.manufacturerService.addManufacturer({
      name: this.manufacturerForm.controls.name.value!,
      country: this.manufacturerForm.controls.country.value!,
    });
    this.manufacturerForm.reset();
  }

  updateManufacturer() {
    this.manufacturerService.upadetManufacturer(this.manufacturerForm.value);
  }
}
