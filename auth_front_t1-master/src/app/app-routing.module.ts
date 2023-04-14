import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './component/login-page/login-page.component';
import {RegisterPageComponent} from './component/register-page/register-page.component';

import { CandidatComponent } from './component/candidat/candidat.component';
import { HomeComponent } from './component/home/home.component';
import { GestionUtilisateursComponent } from './component/gestion-utilisateurs/gestion-utilisateurs.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: 'register', component: RegisterPageComponent
  },
  {
    path: 'candidat', component: CandidatComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'utilisateur', component: GestionUtilisateursComponent
  },
  {
    path: 'forgot_password', component: ForgotPasswordComponent
  },
  {
    path: 'reset_password', component: ResetPasswordComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
