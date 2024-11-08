import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './Pages/Category/add-category/add-category.component';
import { CategoryListComponent } from './Pages/Category/category-list/category-list.component';
import { AddCountryComponent } from './Pages/Country/add-country/add-country.component';
import { CountryListComponent } from './Pages/Country/country-list/country-list.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { AddManufacturerComponent } from './Pages/Manufacturer/add-manufacturer/add-manufacturer.component';
import { ManufacturerListComponent } from './Pages/Manufacturer/manufacturer-list/manufacturer-list.component';
import { AddOptionComponent } from './Pages/options/add-option/add-option.component';
import { OptionListComponent } from './Pages/options/option-list/option-list.component';
import { AddOptionTypeComponent } from './Pages/OptionType/add-option-type/add-option-type.component';
import { OptionTypeListComponent } from './Pages/OptionType/option-type-list/option-type-list.component';
import { AddProductComponent } from './Pages/product/add-product/add-product.component';
import { ProductListComponent } from './Pages/product/product-list/product-list.component';
import { AddUserComponent } from './Pages/User/add-user/add-user.component';
import { UserListComponent } from './Pages/User/user-list/user-list.component';

const routes: Routes = [
  { path: '', title: 'dashboard', component: DashboardComponent },
  // admin
  { path: 'AddProduct', title: 'AddProduct', component: AddProductComponent },
  {
    path: 'ProductList',
    title: 'ProductList',
    component: ProductListComponent,
  },
  {
    path: 'CategoryList',
    title: 'CategoryList',
    component: CategoryListComponent,
  },
  {
    path: 'ManufacturerList',
    title: 'ManufacturerList',
    component: ManufacturerListComponent,
  },
  {
    path: 'AddManufacturer',
    title: 'AddManufacturer',
    component: AddManufacturerComponent,
  },
  {
    path: 'UpdateManufacturer/:id',
    title: 'UpdateManufacturer',
    component: AddManufacturerComponent,
  },
  { path: 'OptionList', title: 'OptionList', component: OptionListComponent },
  { path: 'NewOption', title: 'NewOption', component: AddOptionComponent },
  {
    path: 'UpdateOption/:id',
    title: 'UpdateOption',
    component: AddOptionComponent,
  },
  {
    path: 'AddOptionType',
    title: 'AddOptionType',
    component: AddOptionTypeComponent,
  },
  {
    path: 'UpdateOptionType/:id',
    title: 'UpdateOptionType',
    component: AddOptionTypeComponent,
  },
  {
    path: 'OptionTypeList',
    title: 'OptionTypeList',
    component: OptionTypeListComponent,
  },
  {
    path: 'AddCategory',
    title: 'AddCategory',
    component: AddCategoryComponent,
  },
  {
    path: 'UpdateCategory/:id',
    title: 'UpdateCategory',
    component: AddCategoryComponent,
  },
  { path: 'AddCountry', title: 'AddCountry', component: AddCountryComponent },
  {
    path: 'CountryList',
    title: 'CountryList',
    component: CountryListComponent,
  },
  {
    path: 'UpdateCountry/:id',
    title: 'CountryList',
    component: AddCountryComponent,
  },
  {
    path: 'AddUser',
    title: 'AddUser',
    component: AddUserComponent,
  },
  {
    path: 'UserList',
    title: 'UserList',
    component: UserListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
