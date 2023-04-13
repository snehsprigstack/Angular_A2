import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { NavBarComponent } from './MyComponents/nav-bar/nav-bar.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { ContactPageComponent } from './MyComponents/contact-page/contact-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoolSocialLoginButtonsModule } from '@angular-cool/social-login-buttons';
import { OAuthModule } from 'angular-oauth2-oidc';
import { NgToastModule } from 'ng-angular-popup';
import { ResetPasswordComponent } from './MyComponents/reset-password/reset-password.component';
import {  NgSelectModule } from '@ng-select/ng-select';
import { NgbDatepicker, NgbDatepickerModule, NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from '@danielmoncada/angular-datetime-picker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FlatpickrModule } from 'angularx-flatpickr';
import {
  NgxMatDatetimePickerModule, 
  NgxMatNativeDateModule, 
  NgxMatTimepickerModule 
} from '@angular-material-components/datetime-picker';
import { DateTimePickerModule} from 'ngx-datetime-picker';
import { VbsNgDatepickerModule } from 'vbs-ng-datepicker';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavBarComponent,
    LoginComponent,
    ContactPageComponent,
    ResetPasswordComponent,   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    Ng2FlatpickrModule,
    NgxMatDatetimePickerModule,
    VbsNgDatepickerModule,
    NgbDatepicker, 
    NgxMatNativeDateModule, 
    NgxMatTimepickerModule ,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,   
    FormsModule,
    CoolSocialLoginButtonsModule ,
    OAuthModule.forRoot(),
    NgToastModule,
    NgSelectModule,
    NgbModule,
    NgbModule,
    NgbDatepickerModule,
    DateTimePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    BrowserModule, 
    NgxMaterialTimepickerModule,
    FlatpickrModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
