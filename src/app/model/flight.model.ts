import { Time } from '@angular/common';
import { Airline } from './airline.enum';
import { Airport } from './airport.enum';
import { AncillaryService } from './ancillaryservice.enum';
import { ShopItem } from './shopitem.enum';
import { SpecialMeal } from './specialmeal.enum';
import { Passenger } from './passenger.model';

export interface Flight {
    // id: number,
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