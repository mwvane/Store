import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageModule } from '../language/language.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CurrencyComponent } from './currency/currency.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SectionComponent } from './section/section.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { TooltipModule } from 'primeng/tooltip';
import { ExpandComponent } from './expand/expand.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { LinkmenuComponent } from './linkmenu/linkmenu.component';
import { SolidButtonComponent } from './solid-button/solid-button.component';
import { FormErrorComponent } from './form-error/form-error.component';
import { RatingComponent } from './rating/rating.component';
import { ConfirmDialogComponent } from './Modals/confirm-dialog/confirm-dialog.component';
import { DialogModule } from 'primeng/dialog';
import { SpinnerModule } from 'primeng/spinner';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    CurrencyComponent,
    LanguageSelectorComponent,
    SpinnerComponent,
    SectionComponent,
    FileUploaderComponent,
    ExpandComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    LinkmenuComponent,
    SolidButtonComponent,
    FormErrorComponent,
    RatingComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    LanguageModule,
    ReactiveFormsModule,
    TooltipModule,
    DialogModule,
    SpinnerModule,
    DropdownModule,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    CurrencyComponent,
    LanguageSelectorComponent,
    SpinnerComponent,
    SectionComponent,
    FileUploaderComponent,
    ExpandComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    LinkmenuComponent,
    SolidButtonComponent,
    FormErrorComponent,
    RatingComponent,
    ConfirmDialogComponent,
  ],
})
export class SharedModule {}
