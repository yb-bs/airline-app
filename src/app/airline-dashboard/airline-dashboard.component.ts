import { Component } from '@angular/core';
import { Role } from '../model/role.enum';

@Component({
  selector: 'app-airline-dashboard',
  templateUrl: './airline-dashboard.component.html',
  styleUrls: ['./airline-dashboard.component.scss']
})
export class AirlineDashboardComponent {

  userRole: Role = Role.Admin;
  // userRole: Role = Role.FlightStaff;

  get showAdminDashboard() {
    return this.userRole === Role.Admin;
  }

  get showFlightStaffDashboard() {
    return this.userRole === Role.FlightStaff;
  }

}
