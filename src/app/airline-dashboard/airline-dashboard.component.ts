import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Airline } from '../model/airline.enum';
import { Airport } from '../model/airport.enum';
import { AncillaryService } from '../model/ancillaryservice.enum';
import { Flight } from '../model/flight.model';
import { Role } from '../model/role.enum';
import { ShopItem } from '../model/shopitem.enum';
import { SpecialMeal } from '../model/specialmeal.enum';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-airline-dashboard',
  templateUrl: './airline-dashboard.component.html',
  styleUrls: ['./airline-dashboard.component.scss']
})
export class AirlineDashboardComponent implements OnInit {
  
  userRole: Role = Role.Admin;
  // userRole: Role = Role.FlightStaff;

  constructor(private flightService: FlightService) {

  }

  flights$: Observable<Flight[]>;

  ngOnInit(): void {
    const flightDetails$ = this.flightService.getAllFlights();

    // this.flights$ = flightDetails$.pipe(
    //   map(flights => flights)
    // );
  }

  get showAdminDashboard() {
    return this.userRole === Role.Admin;
  }

  get showFlightStaffDashboard() {
    return this.userRole === Role.FlightStaff;
  }

}
