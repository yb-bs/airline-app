import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Flight } from '../model/flight.model';
import { ShopItem } from '../model/shopitem.enum';
import { SpecialMeal } from '../model/specialmeal.enum';
import { AncillaryService } from '../model/ancillaryservice.enum';
import { Airline } from '../model/airline.enum';
import { Airport } from '../model/airport.enum';

@Injectable()
export class FlightService {

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

    getAllFlights() {
        return of(this.flights);
    }

}