import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SpacialsComponent } from './Pages/spacials/spacials.component';
import { DashboardComponent } from './Admin/Pages/dashboard/dashboard.component';
import { AddProductComponent } from './Admin/Pages/add-product/add-product.component';

const routes: Routes = [
  // { path: '', title: 'home', component: HomeComponent },
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
  {path: "AddProduct", title: "AddProduct", component: AddProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
