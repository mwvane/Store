import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './Components/language-selector/language-selector.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopOfferComponent } from './Shared/top-offer/top-offer.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './Components/menu/menu.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import { AddProductComponent } from './Admin/Pages/add-product/add-product.component';
import { AdminSidebarComponent } from './Admin/Shared/admin-sidebar/admin-sidebar.component';
import { FileUploderComponent } from './Components/file-uploder/file-uploder.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { SpinnerModule } from 'primeng/spinner';

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
    ButtonModule,
    MenuModule,
    ReactiveFormsModule,
    CarouselModule,
    DialogModule,
    DataViewModule,
    MultiSelectModule,
    DropdownModule,
    SpinnerModule
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateloader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
