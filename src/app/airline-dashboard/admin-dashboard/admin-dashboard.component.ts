import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AirlineDashboardComponent } from '../airline-dashboard.component';
import { Airline } from 'src/app/model/airline.enum';
import { Airport } from 'src/app/model/airport.enum';
import { AncillaryService } from 'src/app/model/ancillaryservice.enum';
import { SpecialMeal } from 'src/app/model/specialmeal.enum';
import { ShopItem } from 'src/app/model/shopitem.enum';
import { Flight } from 'src/app/model/flight.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  displayedColumns = ["pnr", "airline", "from", "to", "depTime", "arrTime", "ancillaryServices", "passengers"];

  // flights : Flight[] = AdminDashboardComponent.getFlightDetails();

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  

  flights: Flight[] = [
    // Flight 1
    { pnr: "ABC123", airline: Airline.Indigo, from: Airport.BLR, to: Airport.KUL, depTime: {hours: 11, minutes: 30}, arrTime: {hours: 15, minutes: 55}, 
  ancillaryServices: [ AncillaryService.CardiacMonitoring, AncillaryService.WoundCareServices ], 
  specialMeals: [ SpecialMeal.Vegan, SpecialMeal.Glutenfree ], 
  shopItems: [ ShopItem.CardPack, ShopItem.Fragrances, ShopItem.Mask, ShopItem.Watch ], 
  passengers: [{ name: "Passenger1", passport: "A1234567", address: "Address1", seat: "3A", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [ AncillaryService.CardiacMonitoring ], specialMeals:[], shopItems:[] }, { name: "Passenger2", passport: "B1234567", address: "Address2", seat: "5C", checkedIn: true, wheelchair: true, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }, { name: "Passenger3", passport: "C1234567", address: "Address3", seat: "4F", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }]},

    // Flight 2
  { pnr: "DEF456", airline: Airline.Indigo, from: Airport.KUL, to: Airport.BLR, depTime: {hours: 11, minutes: 30}, arrTime: {hours: 15, minutes: 55}, 
  ancillaryServices: [ AncillaryService.CardiacMonitoring, AncillaryService.WoundCareServices ], 
  specialMeals: [ SpecialMeal.Vegan, SpecialMeal.Glutenfree ], 
  shopItems: [ ShopItem.CardPack, ShopItem.Fragrances, ShopItem.Mask, ShopItem.Watch ], 
  passengers: [{ name: "Passenger1", passport: "A1234567", address: "Address1", seat: "3A", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [ AncillaryService.CardiacMonitoring ], specialMeals:[], shopItems:[] }, { name: "Passenger2", passport: "B1234567", address: "Address2", seat: "5C", checkedIn: true, wheelchair: true, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }, { name: "Passenger3", passport: "C1234567", address: "Address3", seat: "4F", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }]},

  // Flight 3
  { pnr: "GHI789", airline: Airline.AirAsia, from: Airport.BLR, to: Airport.KUL, depTime: {hours: 11, minutes: 30}, arrTime: {hours: 15, minutes: 55}, 
  ancillaryServices: [ AncillaryService.CardiacMonitoring, AncillaryService.WoundCareServices ], 
  specialMeals: [ SpecialMeal.Vegan, SpecialMeal.Glutenfree ], 
  shopItems: [ ShopItem.CardPack, ShopItem.Fragrances, ShopItem.Mask, ShopItem.Watch ], 
  passengers: [{ name: "Passenger1", passport: "A1234567", address: "Address1", seat: "3A", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [ AncillaryService.CardiacMonitoring ], specialMeals:[], shopItems:[] }, { name: "Passenger2", passport: "B1234567", address: "Address2", seat: "5C", checkedIn: true, wheelchair: true, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }, { name: "Passenger3", passport: "C1234567", address: "Address3", seat: "4F", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }]},

  // Flight 4
  { pnr: "JKL123", airline: Airline.AirAsia, from: Airport.KUL, to: Airport.BLR, depTime: {hours: 11, minutes: 30}, arrTime: {hours: 15, minutes: 55}, 
  ancillaryServices: [ AncillaryService.CardiacMonitoring, AncillaryService.WoundCareServices ], 
  specialMeals: [ SpecialMeal.Vegan, SpecialMeal.Glutenfree ], 
  shopItems: [ ShopItem.CardPack, ShopItem.Fragrances, ShopItem.Mask, ShopItem.Watch ], 
  passengers: [{ name: "Passenger1", passport: "A1234567", address: "Address1", seat: "3A", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [ AncillaryService.CardiacMonitoring ], specialMeals:[], shopItems:[] }, { name: "Passenger2", passport: "B1234567", address: "Address2", seat: "5C", checkedIn: true, wheelchair: true, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }, { name: "Passenger3", passport: "C1234567", address: "Address3", seat: "4F", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }]},

  // Flight 5
  { pnr: "MNO456", airline: Airline.AirIndia, from: Airport.BLR, to: Airport.KUL, depTime: {hours: 11, minutes: 30}, arrTime: {hours: 15, minutes: 55}, 
  ancillaryServices: [ AncillaryService.CardiacMonitoring, AncillaryService.WoundCareServices ], 
  specialMeals: [ SpecialMeal.Vegan, SpecialMeal.Glutenfree ], 
  shopItems: [ ShopItem.CardPack, ShopItem.Fragrances, ShopItem.Mask, ShopItem.Watch ], 
  passengers: [{ name: "Passenger1", passport: "A1234567", address: "Address1", seat: "3A", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [ AncillaryService.CardiacMonitoring ], specialMeals:[], shopItems:[] }, { name: "Passenger2", passport: "B1234567", address: "Address2", seat: "5C", checkedIn: true, wheelchair: true, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }, { name: "Passenger3", passport: "C1234567", address: "Address3", seat: "4F", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }]},

  // Flight 6
  { pnr: "PQR789", airline: Airline.AirIndia, from: Airport.KUL, to: Airport.BLR, depTime: {hours: 11, minutes: 30}, arrTime: {hours: 15, minutes: 55}, 
  ancillaryServices: [ AncillaryService.CardiacMonitoring, AncillaryService.WoundCareServices ], 
  specialMeals: [ SpecialMeal.Vegan, SpecialMeal.Glutenfree ], 
  shopItems: [ ShopItem.CardPack, ShopItem.Fragrances, ShopItem.Mask, ShopItem.Watch ], 
  passengers: [{ name: "Passenger1", passport: "A1234567", address: "Address1", seat: "3A", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [ AncillaryService.CardiacMonitoring ], specialMeals:[], shopItems:[] }, { name: "Passenger2", passport: "B1234567", address: "Address2", seat: "5C", checkedIn: true, wheelchair: true, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }, { name: "Passenger3", passport: "C1234567", address: "Address3", seat: "4F", checkedIn: false, wheelchair: false, infant: false, ancillaryServices: [], specialMeals:[], shopItems:[] }]}

];

get getFlightDetails() {
  return this.flights;
}

}
