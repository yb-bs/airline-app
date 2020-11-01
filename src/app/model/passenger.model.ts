import { AncillaryService } from './ancillaryservice.enum';
import { ShopItem } from './shopitem.enum';
import { SpecialMeal } from './specialmeal.enum';

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