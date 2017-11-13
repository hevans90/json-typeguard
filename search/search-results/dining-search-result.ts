import { SearchResult } from './search-result';
import { DiningTag } from './../tag';

export interface DiningSearchResult extends SearchResult {
    tags: DiningTag[];
    cuisine: Cuisine[];
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
    number_of_restaurants?: number;
    image?: any;
    tag_image: TagImage;
    restaurant: Restaurant;
    number_of_seats?: number;
    is_guaranteed?: boolean;
    no_show_charge_currency: string;
    no_show_charge: string;
    is_preauth_required?: boolean;
    status: string;
    available_at?: Date;
    site: string;
}

export interface Cuisine {
    url: string;
    name: string;
    tags: any[];
}

export interface Image {
    url: string;
    sequence: number;
    image: string;
    accessibility_description: string;
    is_main_image: boolean;
    restaurant: string;
}

export interface TagImage {
    image?: any;
    accessibility_description: string;
    title: string;
    caption: string;
}

export interface Restaurant {
    url: string;
    name: string;
    cuisine: Cuisine[];
    price_indicator?: any;
    city: string;
    images: Image[];
    rating: number;
}
