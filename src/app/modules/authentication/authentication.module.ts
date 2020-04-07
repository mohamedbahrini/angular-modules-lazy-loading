import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HelpComponent } from './components/help/help.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, HelpComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule
  ],
  exports: [LoginComponent, RegisterComponent, HelpComponent, PageNotFoundComponent],
})
export class AuthenticationModule { }
