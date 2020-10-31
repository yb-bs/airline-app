import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export type Role = 'Admin' | 'FlightStaff';
export type SocialMedia = 'Google' | 'Facebook' | 'Twitter';
export type User = { username: string, socialMedia: SocialMedia, role: Role }
export type Flight = { pnr: string, airline: string, from: string, to: string, depTime: Time, arrTime: Time};

@Component({
  selector: 'app-airline-dashboard',
  templateUrl: './airline-dashboard.component.html',
  styleUrls: ['./airline-dashboard.component.scss']
})
export class AirlineDashboardComponent {
  userRole: Role = 'Admin';
  passengers: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  get showAdminDashboard() {
    return this.userRole ==='Admin';
  }

  get showFlightStaffDashboard() {
    return this.userRole ==='FlightStaff';
  }

}
