import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SpacialsComponent } from './Pages/spacials/spacials.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { ServerErrorComponent } from './Pages/server-error/server-error.component';
import { NetworkErrorComponent } from './Pages/network-error/network-error.component';


const routes: Routes = [
  { path: 'admin', loadChildren: () => import('../modules/admin/admin.module').then(m => m.AdminModule) },
  { path: '', title: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  // { path: '**', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'network-error', component: NetworkErrorComponent },
  { path: 'Home', title: 'Home', component: HomeComponent },
  { path: 'Register', title: 'Register', component: RegisterComponent },
  { path: 'Login', title: 'Login', component: LoginComponent },
  { path: 'Specials', title: 'Specials', component: SpacialsComponent },
  {
    path: 'ProductDetails/:id',
    title: 'ProductDetails',
    component: ProductDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
