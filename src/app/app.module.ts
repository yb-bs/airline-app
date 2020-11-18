import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SocialLoginModule, GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from 'src/environments/environment';
import { AdminDashboardComponent } from './airline-dashboard/admin-dashboard/admin-dashboard.component';
import { ManagePassengersComponent } from './airline-dashboard/admin-dashboard/manage-passengers/manage-passengers.component';
import { ManageServicesComponent } from './airline-dashboard/admin-dashboard/manage-services/manage-services.component';
import { AirlineDashboardComponent } from './airline-dashboard/airline-dashboard.component';
import { CheckinComponent } from './airline-dashboard/flightstaff-dashboard/checkin/checkin.component';
import { FlightstaffDashboardComponent } from './airline-dashboard/flightstaff-dashboard/flightstaff-dashboard.component';
import { InflightComponent } from './airline-dashboard/flightstaff-dashboard/inflight/inflight.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlightService } from './services/flight.service';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AirlineDashboardComponent,
    AppComponent,
    CheckinComponent,
    FlightstaffDashboardComponent,
    InflightComponent,
    LoginComponent,
    ManagePassengersComponent,
    ManageServicesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    SocialLoginModule
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
