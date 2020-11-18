import { AncillaryService } from './ancillaryservice.model';
import { ShopItem } from './shopitem.model';
import { SpecialMeal } from './specialmeal.model';

export interface Passenger {
    name: string, 
    passport: string, 
    address: string, 
    seat: string, 
    checkedIn: boolean, 
    wheelchair: boolean, 
    infant: boolean, 
    ancillaryServices: AncillaryService[], 
    specialMeals: SpecialMeal[], 
    shopItems: ShopItem[]
}