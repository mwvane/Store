import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageModule } from '../language/language.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AddOptionComponent } from './Pages/options/add-option/add-option.component';
import { OptionListComponent } from './Pages/options/option-list/option-list.component';
import { AddProductComponent } from './Pages/product/add-product/add-product.component';
import { ProductListComponent } from './Pages/product/product-list/product-list.component';
import { AddOptionTypeComponent } from './Pages/OptionType/add-option-type/add-option-type.component';
import { OptionTypeListComponent } from './Pages/OptionType/option-type-list/option-type-list.component';
import { AddUserComponent } from './Pages/User/add-user/add-user.component';
import { UserListComponent } from './Pages/User/user-list/user-list.component';
import { ManufacturerListComponent } from './Pages/Manufacturer/manufacturer-list/manufacturer-list.component';
import { AddManufacturerComponent } from './Pages/Manufacturer/add-manufacturer/add-manufacturer.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AddCountryComponent } from './Pages/Country/add-country/add-country.component';
import { CountryListComponent } from './Pages/Country/country-list/country-list.component';
import { AddCategoryComponent } from './Pages/Category/add-category/add-category.component';
import { CategoryListComponent } from './Pages/Category/category-list/category-list.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddProductComponent,
    ProductListComponent,
    AddOptionComponent,
    OptionListComponent,
    AddOptionTypeComponent,
    OptionTypeListComponent,
    AddUserComponent,
    UserListComponent,
    ManufacturerListComponent,
    AddManufacturerComponent,
    DashboardComponent,
    AddCountryComponent,
    CountryListComponent,
    AddCategoryComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    LanguageModule,
    ReactiveFormsModule,
    DropdownModule,
    MultiSelectModule,
    ToolbarModule,
    ButtonModule,
    TableModule,
    AdminRoutingModule,
    SharedModule
  ],
})
export class AdminModule {}
