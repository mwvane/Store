import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../../../../app/core/Services/country.service';
import { ModalService } from '../../../../../app/core/Services/modal.service';
import { IContry } from '../../../../shared/Models/country';
import { WarningService } from '../../../../shared/Services/warning.service';

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
  });
  selectedFile: File | null = null;

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
      });
    }
  }

  onImageSelected(files: any) {
    this.selectedFile = files[0];
  }


  // updateCountry(){
  //   var country: IContry = { id: this.countryForm.controls.id.value!, name: this.countryForm.controls.name.value!, image: this.countryForm.controls.image.value!}
  //   this.countryService.updateCountry(country)
  // }

  addCountry() {
    const formData = new FormData();
    formData.append("name",this.countryForm.controls.name.value!)
    formData.append("image",this.selectedFile!)
    this.countryService.addCountry(formData);
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
