import { EntertainmentSearchResult } from '../search-result';
import { Tag } from '../tag';

export interface Event extends EntertainmentSearchResult {
    tags: Tag[];
    category: string;
    description: string;
    terms_and_conditions: string;
    top_tips: string;
    review?: any;
    city_names: string[];
    number_of_venues: number;
    number_of_performances: number;
    next_performance: NextPerformance;
    minimum_price: number;
    maximum_price: number;
    currency: string;
    first_date: Date;
    last_date: Date;
    artists: Artist[];
    has_hot_tickets: boolean;
    images: any[];
    popularity: number;
}

export interface NextPerformance {
    url: string;
    event: string;
    venue: Venue;
    status: string;
    start_date: Date;
    end_date?: Date;
    has_vip_suites: boolean;
    is_hot_ticket: boolean;
    estimated_price_min?: any;
    estimated_price_min_currency: string;
    estimated_price_max?: any;
    estimated_price_max_currency: string;
}

export interface Venue {
    url: string;
    latitude?: any;
    longitude?: any;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    postcode: string;
    name: string;
    seat_plan_file: string;
    seat_plan_images: SeatPlanImage[];
    country: string;
    location: string;
    accessibility_description: string;
}

export interface SeatPlanImage {
    accessibility_description: string;
    sequence: number;
    is_main_image: boolean;
    image: string;
}

export interface Artist {
    url: string;
    name: string;
    images: any[];
    tags: string[];
    object_type: string;
}
