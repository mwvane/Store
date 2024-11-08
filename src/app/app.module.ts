import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { TopOfferComponent } from './Shared/top-offer/top-offer.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './Components/carousel-holder/carousel-holder.component';
import { HomeComponent } from './Pages/home/home.component';
import { OurCategoriesComponent } from './Components/our-categories/our-categories.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { SpecialsComponent } from './specials/specials.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DialogModule } from 'primeng/dialog';
import { LoginModalComponent } from './Modals/login-modal/login-modal.component';
import { SpacialsComponent } from './Pages/spacials/spacials.component';
import { DataViewModule } from 'primeng/dataview';
import { ProductGridComponent } from './Components/product-grid/product-grid.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { BadgeModule } from 'primeng/badge';
import { NotifiactionComponent } from './Components/notifiaction/notifiaction.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { HttpErrorInterceptor } from './error handler/httpErrorInterceptor';
import { ServerErrorComponent } from './Pages/server-error/server-error.component';
import { NetworkErrorComponent } from './Pages/network-error/network-error.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './core/Services/auth.service';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { LanguageModule } from '../modules/language/language.module';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ToastComponent } from './toast/toast/toast.component';
import { AdminModule } from '../modules/admin/admin.module';
import { SharedModule } from '../modules/shared/shared.module';
import { FormModule } from '../modules/form/form.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    CarouselHolderComponent,
    HomeComponent,
    OurCategoriesComponent,
    SpecialsComponent,
    RegisterComponent,
    LoginComponent,
    LoginModalComponent,
    SpacialsComponent,
    ProductGridComponent,
    NotifiactionComponent,
    NotFoundComponent,
    ServerErrorComponent,
    NetworkErrorComponent,
    CategoriesComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    TopOfferComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7287'],
        //disallowedRoutes: ['localhost:5001/api/auth/login']
      },
    }),
    ButtonModule,
    MenuModule,
    CarouselModule,
    DialogModule,
    DataViewModule,
    MultiSelectModule,
    DropdownModule,
    SpinnerModule,
    TableModule,
    FormsModule,
    ToolbarModule,
    FileUploadModule,
    BadgeModule,
    LanguageModule,
    ReactiveFormsModule,
    SharedModule,
    AdminModule,
    FormModule,
    FormModule
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
