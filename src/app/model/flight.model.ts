import { Time } from '@angular/common';
import { Airline } from './airline.model';
import { Airport } from './airport.model';
import { AncillaryService } from './ancillaryservice.model';
import { ShopItem } from './shopitem.model';
import { SpecialMeal } from './specialmeal.model';
import { Passenger } from './passenger.model';

export interface Flight {
    id: number,
    pnr: string, 
    airline: Airline, 
    from: Airport, 
    to: Airport, 
    depTime: Time, 
    arrTime: Time, 
    ancillaryServices: AncillaryService[], 
    specialMeals: SpecialMeal[], 
    shopItems: ShopItem[], 
    passengers: Passenger[]
};