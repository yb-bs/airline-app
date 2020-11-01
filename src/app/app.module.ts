import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './login/login.component';
import { AirlineDashboardComponent } from './airline-dashboard/airline-dashboard.component';
import { AdminDashboardComponent } from './airline-dashboard/admin-dashboard/admin-dashboard.component';
import { FlightstaffDashboardComponent } from './airline-dashboard/flightstaff-dashboard/flightstaff-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from "@angular/material/list";
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { FlightService } from './services/flight.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AirlineDashboardComponent,
    AdminDashboardComponent,
    FlightstaffDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatMenuModule,
    SocialLoginModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatListModule,
    MatTableModule
  ],
  providers: [
    FlightService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              'clientId'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
