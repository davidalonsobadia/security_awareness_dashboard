import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppConfig } from './app-config';

import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { RoutingModule } from './routing.module';
import { AuthGuard } from './auth-guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './dashboard/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    AppConfig,
    UserService,
    AuthenticationService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
