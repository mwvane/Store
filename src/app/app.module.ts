import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TopOfferComponent } from './Shared/top-offer/top-offer.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './Shared/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './currency/currency.component';
import { LinkmenuComponent } from './Shared/linkmenu/linkmenu.component';
import { ExpandComponent } from './expand/expand.component';
import { CategoriesComponent } from './categories/categories.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselHolderComponent } from './carousel-holder/carousel-holder.component';
import { HomeComponent } from './Pages/home/home.component';
import { OurCategoriesComponent } from './our-categories/our-categories.component';
import { RatingComponent } from './rating/rating.component';

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
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function httpTranslateloader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
