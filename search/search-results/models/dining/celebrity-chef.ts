import { Cuisine } from './cuisine';
import { Image } from '../image';
import { DiningSearchResult } from '../search-result';

export interface CelebrityChef extends DiningSearchResult {
    name: string;
    number_of_restaurants: number;
    cuisine: Cuisine[];
    image?: Image;
}
