import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Airline } from 'src/app/model/airline.model';
import { Airport } from 'src/app/model/airport.model';
import { AncillaryService } from 'src/app/model/ancillaryservice.model';
import { SpecialMeal } from 'src/app/model/specialmeal.model';
import { ShopItem } from 'src/app/model/shopitem.model';
import { Flight } from 'src/app/model/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  displayedColumns = ["pnr", "airline", "from", "to", "depTime", "arrTime", "ancillaryServices", "passengers"];

  airlines: Airline[] = [];
  airports: Airport[] = [];
  ancillaryServices: AncillaryService[] = [];
  shopItems: ShopItem[] = [];
  specialMeals: SpecialMeal[] = [];
  flights: Flight[] = [];
  tempFlightData: any = [];

  constructor(private breakpointObserver: BreakpointObserver, private flightService: FlightService) { }
  ngOnInit(): void {
    this.flightService.getAllAirlines().subscribe((data: Airline[]) => {
      if (!environment.production) {
        console.log("Airline data :");
        console.log(data);
      }
      this.airlines = data;
    })
    this.flightService.getAllAirports().subscribe((data: Airport[]) => {
      if (!environment.production) {
        console.log("Airport data :");
        console.log(data);
      }
      this.airports = data;
    })
    this.flightService.getAllAncillaryServices().subscribe((data: AncillaryService[]) => {
      if (!environment.production) {
        console.log("Ancillary service data :");
        console.log(data);
      }
      this.ancillaryServices = data;
    })
    this.flightService.getAllShopItems().subscribe((data: ShopItem[]) => {
      if (!environment.production) {
        console.log("Shop item data :");
        console.log(data);
      }
      this.shopItems = data;
    })
    this.flightService.getAllSpecialMeals().subscribe((data: SpecialMeal[]) => {
      if (!environment.production) {
        console.log("Special meal data :");
        console.log(data);
      }
      this.specialMeals = data;
    })
    this.flightService.getAllFlights().subscribe((data: any) => {
      if (!environment.production) {
        console.log("Flight data :");
        console.log(data);
      }
      this.tempFlightData = data;
    })
  }

  get getFlightDetails() {
    this.flights = [];
    this.tempFlightData.forEach(element => {
      var flight: Flight = element;
      flight.airline = this.getAirlineById(element.airlineId);
      flight.from = this.getAirportById(element.airportFrom);
      flight.to = this.getAirportById(element.airportTo);
      this.flights.push(flight);
    });
    if (!environment.production) {
      console.log("Flights :");
      console.log(this.flights);
    }
    return this.flights;
  }

  getAirlineById(airlineId: number) {
    return this.airlines.find(airline => airline.id == airlineId);
  }

  getAirportById(airportId: number) {
    return this.airports.find(airport => airport.id == airportId);
  }

  getAncillaryServiceById(asId: number) {
    return this.ancillaryServices.find(as => as.id == asId);
  }

  getSpecialMealById(mealId: number) {
    return this.specialMeals.find(meal => meal.id == mealId);
  }

  getShopItemById(itemId: number) {
    return this.shopItems.find(item => item.id == itemId);
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
