import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MarketServiceService } from './market-service/market-service.service';
import { ConnectService } from './http-service/connect.service';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes : Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: 'dashboard', /*canActivate: [AuthGuard],*/ component: DashboardComponent}
];

const config: SocketIoConfig = {url: 'https://streamer.cryptocompare.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SocketIoModule.forRoot(config),
    HttpModule,
    FormsModule
  ],
  providers: [MarketServiceService, ConnectService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
