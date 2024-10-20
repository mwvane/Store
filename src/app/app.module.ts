import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './Components/language-selector/language-selector.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopOfferComponent } from './Shared/top-offer/top-offer.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './Components/menu/menu.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CurrencyComponent } from './Components/currency/currency.component';
import { LinkmenuComponent } from './Shared/linkmenu/linkmenu.component';
import { ExpandComponent } from './Components/expand/expand.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './Components/carousel-holder/carousel-holder.component';
import { HomeComponent } from './Pages/home/home.component';
import { OurCategoriesComponent } from './Components/our-categories/our-categories.component';
import { RatingComponent } from './Components/rating/rating.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { SpecialsComponent } from './specials/specials.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { LoginComponent } from './Pages/Auth/login/login.component';
import { SectionComponent } from './Components/section/section.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { DialogModule } from 'primeng/dialog';
import { LoginModalComponent } from './Modals/login-modal/login-modal.component';
import { SpacialsComponent } from './Pages/spacials/spacials.component';
import { DataViewModule } from 'primeng/dataview';
import { ProductGridComponent } from './Components/product-grid/product-grid.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { DashboardComponent } from './Admin/Pages/dashboard/dashboard.component';
import { AdminHeaderComponent } from './Admin/Shared/admin-header/admin-header.component';
import { AddProductComponent } from './Admin/Pages/product/add-product/add-product.component';
import { AdminSidebarComponent } from './Admin/Shared/admin-sidebar/admin-sidebar.component';
import { FileUploderComponent } from './Components/file-uploder/file-uploder.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';
import { FormErrorComponent } from './Components/form-error/form-error.component';
import { SolidButtonComponent } from './Components/solid-button/solid-button.component';
import { ProductListComponent } from './Admin/Pages/product/product-list/product-list.component';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmDialogComponent } from './Modals/confirm-dialog/confirm-dialog.component';
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
import { FileUploadModule } from 'primeng/fileupload';
import { UploadComponent } from './Components/upload/upload.component';
import { BadgeModule } from 'primeng/badge';
import { NotifiactionComponent } from './Components/notifiaction/notifiaction.component';
import { NotFoundComponent } from './Pages/not-found/not-found.component';
import { HttpErrorInterceptor } from './error handler/httpErrorInterceptor';
import { ServerErrorComponent } from './Pages/server-error/server-error.component';
import { NetworkErrorComponent } from './Pages/network-error/network-error.component';
import { ToastComponent } from './toast/toast/toast.component';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './core/Services/auth.service';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { AddUserComponent } from './Admin/Pages/User/add-user/add-user.component';
import { UserListComponent } from './Admin/Pages/User/user-list/user-list.component';
import { AdminModule } from '../modules/admin/admin/admin/admin.module';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LanguageSelectorComponent,
    TopOfferComponent,
    MenuComponent,
    HeaderComponent,
    CurrencyComponent,
    LinkmenuComponent,
    ExpandComponent,
    CategoriesComponent,
    CarouselHolderComponent,
    HomeComponent,
    OurCategoriesComponent,
    RatingComponent,
    ProductCardComponent,
    SpecialsComponent,
    RegisterComponent,
    LoginComponent,
    SectionComponent,
    ProductDetailsComponent,
    LoginModalComponent,
    SpacialsComponent,
    ProductGridComponent,
    SpinnerComponent,
    DashboardComponent,
    AdminHeaderComponent,
    AddProductComponent,
    AdminSidebarComponent,
    FileUploderComponent,
    FormErrorComponent,
    SolidButtonComponent,
    ProductListComponent,
    ConfirmDialogComponent,
    CategoryListComponent,
    ManufacturerListComponent,
    OptionListComponent,
    AddOptionComponent,
    AddOptionTypeComponent,
    OptionTypeListComponent,
    AddCategoryComponent,
    AddManufacturerComponent,
    AddCountryComponent,
    CountryListComponent,
    UploadComponent,
    NotifiactionComponent,
    NotFoundComponent,
    ServerErrorComponent,
    NetworkErrorComponent,
    ToastComponent,
    AddUserComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateloader,
        deps: [HttpClient],
      },
    }),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7287'],
        //disallowedRoutes: ['localhost:5001/api/auth/login']
      },
    }),
    ButtonModule,
    MenuModule,
    ReactiveFormsModule,
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
    AdminModule,
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
export function httpTranslateloader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
