import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Airline } from 'src/app/model/airline.model';
import { Airport } from 'src/app/model/airport.model';
import { AncillaryService } from 'src/app/model/ancillaryservice.model';
import { SpecialMeal } from 'src/app/model/specialmeal.model';
import { ShopItem } from 'src/app/model/shopitem.model';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-flightstaff-dashboard',
  templateUrl: './flightstaff-dashboard.component.html',
  styleUrls: ['./flightstaff-dashboard.component.scss']
})
export class FlightstaffDashboardComponent {

  displayedColumns = ["pnr", "airline", "from", "to", "depTime", "arrTime", "ancillaryServices", "passengers"];

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
  //   map(({ matches }) => {
  //     if (matches) {
  //       return [
  //         { title: 'Card 1', cols: 1, rows: 1 },
  //         { title: 'Card 2', cols: 1, rows: 1 },
  //         { title: 'Card 3', cols: 1, rows: 1 },
  //         { title: 'Card 4', cols: 1, rows: 1 }
  //       ];
  //     }

  //     return [
  //       { title: 'Card 1', cols: 2, rows: 1 },
  //       { title: 'Card 2', cols: 1, rows: 1 },
  //       { title: 'Card 3', cols: 1, rows: 2 },
  //       { title: 'Card 4', cols: 1, rows: 1 }
  //     ];
  //   })
  // );

  loadFlightDetails = true;
  loadCheckInComponent = false;
  loadInFlightComponent = false;

  adminHome() {
    this.loadFlightDetails = true;
    this.loadCheckInComponent = false;
    this.loadInFlightComponent = false;
  }

  checkIn(flight: Flight, event: Event) {
    this.loadFlightDetails = false;
    this.loadCheckInComponent = true;
    this.loadInFlightComponent = false;
  }

  inFlight(flight: Flight, event: Event) {
    this.loadFlightDetails = false;
    this.loadCheckInComponent = false;
    this.loadInFlightComponent = true;
  }

  updateFlightPassengers(originalFlightData: Flight, updatedFlightData:Flight) {
    // let index = this.flights.indexOf(originalFlightData);
    // this.flights[index] = updatedFlightData;
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

// get getFlightDetails() {
//   return this.flights;
// }

}
