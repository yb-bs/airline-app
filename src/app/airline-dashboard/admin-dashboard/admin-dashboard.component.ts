import { Component, Input, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  displayedColumns = ["pnr", "airline", "from", "to", "depTime", "arrTime", "ancillaryServices", "passengers"];

  @Input() getFlightDetails : Function;

  get getFlights() {
   return this.getFlightDetails();
  }

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
  loadManagePassengersComponent = false;
  loadManageServicesComponent = false;

  managePassengers(flight: Flight, event: Event) {
    this.loadFlightDetails = false;
    this.loadManagePassengersComponent = true;
    this.loadManageServicesComponent = false;
  }

  manageAncillaryServices(flight: Flight, event: Event) {
    this.loadFlightDetails = false;
    this.loadManagePassengersComponent = false;
    this.loadManageServicesComponent = true;
  }

  adminHome() {
    this.loadFlightDetails = true;
    this.loadManagePassengersComponent = false;
    this.loadManageServicesComponent = false;
  }

  // updateFlightPassengers(originalFlightData: Flight, updatedFlightData:Flight) {
  //   let index = this.flights.indexOf(originalFlightData);
  //   this.flights[index] = updatedFlightData;
  // }

}
