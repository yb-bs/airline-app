import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Airline } from '../model/airline.model';
import { Airport } from '../model/airport.model';
import { AncillaryService } from '../model/ancillaryservice.model';
import { SpecialMeal } from '../model/specialmeal.model';
import { ShopItem } from '../model/shopitem.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private REST_API_URL_ALL_AIRLINES = "http://localhost:3000/airlines";
  private REST_API_URL_ALL_AIRPORTS = "http://localhost:3000/airports";
  private REST_API_URL_ALL_ANCILLARYSERVICES = "http://localhost:3000/ancillaryServices";
  private REST_API_URL_ALL_SPECIALMEALS = "http://localhost:3000/specialMeals";
  private REST_API_URL_ALL_SHOPITEMS = "http://localhost:3000/shopItems";
  private REST_API_URL_ALL_FLIGHTS = "http://localhost:3000/flights";

  constructor(private httpClient: HttpClient) { }

  public getAllAirlines(): Observable<Airline[]> {
    return <Observable<Airline[]>>this.httpClient.get(this.REST_API_URL_ALL_AIRLINES);
  }

  public getAllAirports(): Observable<Airport[]> {
    return <Observable<Airport[]>>this.httpClient.get(this.REST_API_URL_ALL_AIRPORTS);
  }

  public getAllAncillaryServices(): Observable<AncillaryService[]> {
    return <Observable<AncillaryService[]>>this.httpClient.get(this.REST_API_URL_ALL_ANCILLARYSERVICES);
  }

  public getAllSpecialMeals(): Observable<SpecialMeal[]> {
    return <Observable<SpecialMeal[]>>this.httpClient.get(this.REST_API_URL_ALL_SPECIALMEALS);
  }

  public getAllShopItems(): Observable<ShopItem[]> {
    return <Observable<ShopItem[]>>this.httpClient.get(this.REST_API_URL_ALL_SHOPITEMS);
  }

  public getAllFlights() {
    return this.httpClient.get(this.REST_API_URL_ALL_FLIGHTS);
  }

  public getAirlineById(id: number) {
    return this.httpClient.get(this.REST_API_URL_ALL_AIRLINES + "/" + id);
  }

  public getAirportById(id: number) {
    return this.httpClient.get(this.REST_API_URL_ALL_AIRPORTS + "/" + id);
  }

  public getAncillaryServiceById(id: number) {
    return this.httpClient.get(this.REST_API_URL_ALL_ANCILLARYSERVICES + "/" + id);
  }

  public getSpecialMealById(id: number) {
    return this.httpClient.get(this.REST_API_URL_ALL_SPECIALMEALS + "/" + id);
  }

  public getShopItemById(id: number) {
    return this.httpClient.get(this.REST_API_URL_ALL_SHOPITEMS + "/" + id);
  }

  public getFlightById(id: number) {
    return this.httpClient.get(this.REST_API_URL_ALL_FLIGHTS + "/" + id);
  }

}
