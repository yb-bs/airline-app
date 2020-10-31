import { Component, OnInit } from '@angular/core';

export type Role = 'Admin' | 'FlightStaff'

@Component({
  selector: 'app-airline-dashboard',
  templateUrl: './airline-dashboard.component.html',
  styleUrls: ['./airline-dashboard.component.scss']
})
export class AirlineDashboardComponent {
  userRole: Role = 'Admin';

  get showAdminDashboard() {
    return this.userRole ==='Admin';
  }

  get showFlightStaffDashboard() {
    return this.userRole ==='FlightStaff';
  }

}
