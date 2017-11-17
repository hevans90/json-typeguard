import { Cuisine } from './cuisine';
import { Image } from './../image';
import { Tag } from './../tag';
import { DiningSearchResult } from './../search-result';

export interface Restaurant extends DiningSearchResult {
    name: string;
    cuisine: Cuisine[];
    tags: Tag[];
    city: string;
    price_indicator?: any;
    walk_in_only: boolean;
    privacy_policy?: any;
    reservation_policy: string;
    has_hot_table: boolean;
    has_member_benefit: boolean;
    has_private_dining: boolean;
    images: Image[];
    rating: number;
}
