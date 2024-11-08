import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateloader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [
    TranslateModule
  ]
})
export class LanguageModule { }
export function httpTranslateloader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
