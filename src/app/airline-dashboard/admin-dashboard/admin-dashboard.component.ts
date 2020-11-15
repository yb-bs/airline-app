import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Airline } from 'src/app/model/airline.enum';
import { Airport } from 'src/app/model/airport.enum';
import { AncillaryService } from 'src/app/model/ancillaryservice.enum';
import { SpecialMeal } from 'src/app/model/specialmeal.enum';
import { ShopItem } from 'src/app/model/shopitem.enum';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns = ["pnr", "airline", "from", "to", "depTime", "arrTime", "ancillaryServices", "passengers"];

  flights: Flight[] ;

  constructor(private breakpointObserver: BreakpointObserver, private flightService: FlightService) {}
  ngOnInit(): void {
    this.flightService.getAllFlights().subscribe((data: Flight[])=> {
      console.log(data);
      this.flights = data;
    })
  }

  get getFlightDetails() {
    return this.flights;
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
    console.log(event);
    console.log(flight);
    console.log(this.flights.indexOf(flight));
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
