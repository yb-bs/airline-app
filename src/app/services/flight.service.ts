import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  public getAllAirlines() {
    return this.httpClient.get(this.REST_API_URL_ALL_AIRLINES);
  }

  public getAllAirports() {
    return this.httpClient.get(this.REST_API_URL_ALL_AIRPORTS);
  }

  public getAllAncillaryServices() {
    return this.httpClient.get(this.REST_API_URL_ALL_ANCILLARYSERVICES);
  }

  public getAllSpecialMeals() {
    return this.httpClient.get(this.REST_API_URL_ALL_SPECIALMEALS);
  }

  public getAllShopItems() {
    return this.httpClient.get(this.REST_API_URL_ALL_SHOPITEMS);
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
