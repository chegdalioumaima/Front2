import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {RegisterPageComponent} from './component/register-page/register-page.component';
import { ComponentComponent } from './component/component.component';
import { ModelComponent } from './model/model.component';
import { ConeComponent } from './component/cone/cone.component';
import { CandidatComponent } from './component/candidat/candidat.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { GestionUtilisateursComponent } from './component/gestion-utilisateurs/gestion-utilisateurs.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ComponentComponent,
    ModelComponent,
    ConeComponent,
    CandidatComponent,
    HomeComponent,
    GestionUtilisateursComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:5000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates: true
    }),
    MatSlideToggleModule
  
  
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
