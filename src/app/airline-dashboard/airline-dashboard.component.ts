import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Airline } from '../model/airline.model';
import { Airport } from '../model/airport.model';
import { AncillaryService } from '../model/ancillaryservice.model';
import { Flight } from '../model/flight.model';
import { Role } from '../model/role.enum';
import { ShopItem } from '../model/shopitem.model';
import { SpecialMeal } from '../model/specialmeal.model';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-airline-dashboard',
  templateUrl: './airline-dashboard.component.html',
  styleUrls: ['./airline-dashboard.component.scss']
})
export class AirlineDashboardComponent implements OnInit {

  userRole: Role = Role.Admin;
  // userRole: Role = Role.FlightStaff;

  get showAdminDashboard() {
    return this.userRole === Role.Admin;
  }

  get showFlightStaffDashboard() {
    return this.userRole === Role.FlightStaff;
  }

  get getFlightDetailsFunction() {
    return this.getFlightDetails.bind(this);
  }

  airlines: Airline[] = [];
  airports: Airport[] = [];
  ancillaryServices: AncillaryService[] = [];
  shopItems: ShopItem[] = [];
  specialMeals: SpecialMeal[] = [];
  flights: Flight[] = [];
  tempFlightData: any = [];

  constructor(private flightService: FlightService) { }
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

  getFlightDetails() {
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

}
