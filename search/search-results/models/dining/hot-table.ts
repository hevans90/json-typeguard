import { Restaurant } from './restaurant';
import { DiningSearchResult } from '../search-result';

export interface HotTable extends DiningSearchResult {
    restaurant: Restaurant;
    number_of_seats: number;
    is_guaranteed: boolean;
    no_show_charge_currency: string;
    no_show_charge: string;
    is_preauth_required: boolean;
    status: string;
    available_at: Date;
    site: string;
}
