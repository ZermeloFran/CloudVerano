import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes : Routes = [
  {path: 'signup', component: SignupComponent},
  {path: 'dashboard', component: DashboardComponent}
];

const config: SocketIoConfig = {url: 'https://streamer.cryptocompare.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
