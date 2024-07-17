import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SpacialsComponent } from './Pages/spacials/spacials.component';
import { DashboardComponent } from './Admin/Pages/dashboard/dashboard.component';
import { AddProductComponent } from './Admin/Pages/product/add-product/add-product.component';
import { ProductListComponent } from './Admin/Pages/product/product-list/product-list.component';
import { CategoryListComponent } from './Admin/Pages/Category/category-list/category-list.component';
import { ManufacturerListComponent } from './Admin/Pages/Manufacturer/manufacturer-list/manufacturer-list.component';
import { OptionListComponent } from './Admin/Pages/Option/option-list/option-list.component';
import { AddOptionComponent } from './Admin/Pages/Option/add-option/add-option.component';
import { AddOptionTypeComponent } from './Admin/Pages/OptionType/add-option-type/add-option-type.component';
import { OptionTypeListComponent } from './Admin/Pages/OptionType/option-type-list/option-type-list.component';
import { AddCategoryComponent } from './Admin/Pages/Category/add-category/add-category.component';
import { AddManufacturerComponent } from './Admin/Pages/Manufacturer/add-manufacturer/add-manufacturer.component';
import { AddCountryComponent } from './Admin/Pages/Country/add-country/add-country.component';
import { CountryListComponent } from './Admin/Pages/Country/country-list/country-list.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ServerErrorComponent } from './Pages/server-error/server-error.component';
import { NetworkErrorComponent } from './Pages/network-error/network-error.component';

const routes: Routes = [
  // { path: '', title: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'network-error', component: NetworkErrorComponent },
  { path: '', title: 'dashboard', component: DashboardComponent },
  { path: 'Home', title: 'Home', component: HomeComponent },
  { path: 'Register', title: 'Register', component: RegisterComponent },
  { path: 'Login', title: 'Login', component: LoginComponent },
  { path: 'Specials', title: 'Specials', component: SpacialsComponent },
  {
    path: 'ProductDetails/:id',
    title: 'ProductDetails',
    component: ProductDetailsComponent,
  },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
