import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../../Services/country.service';
import { ModalService } from '../../../../Services/modal.service';
import { WarningService } from '../../../../Services/warning.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContry } from '../../../../Models/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css',
})
export class AddCountryComponent implements OnInit {
  selectedOptions: any = [];
  currentCountry: any ;
  isEditMode: Boolean = false;
  countryForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  });
  constructor(
    public countryService: CountryService,
    private modalService: ModalService,
    public warningService: WarningService,
    public route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.countryService.getCountries();
    this.route.params.subscribe((params) => {
      var id = params['id'];
      if (id) {
        this.isEditMode = true;
        this.getCountryById(id);
      }
    });
  }

  async getCountryById(id: number) {
    var country: IContry  = await this.countryService.getCountryById(id) as IContry;
    if (country) {
      this.currentCountry = country;
      this.countryForm.patchValue({
        id: country.id,
        name: country.name,
        image: country.image,
      });
    }
  }

  updateCountry(){
    var country: IContry = { id: this.countryForm.controls.id.value!, name: this.countryForm.controls.name.value!, image: this.countryForm.controls.image.value!}
    this.countryService.updateCountry(country)
  }

  addCountry() {
    this.countryService.addCountry({
      name: this.countryForm.controls.name.value!,
      image: this.countryForm.controls.image.value!,
    });
    this.countryForm.reset();
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
