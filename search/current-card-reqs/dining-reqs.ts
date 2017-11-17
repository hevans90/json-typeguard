
interface DiningCardData {
    
}

interface HotTableRequirements {
    title: string;

    cuisine: Array<ICuisine>;
    id: string | number;
    location: string;
    number_of_diners: number;
    time: string;
    date: string;
    price_range: number;
    image?: string;
    restaurant_id?: string;
}

interface RestaurantRequirements {
    name: string;

    url: string;
    has_member_benefit: boolean;
    city: string;
    cuisine_list: Array<ICuisine>;
    benefits: Array<string>;
    walk_in_only: boolean;
    has_private_dining: boolean;
    tags: Array<ITagItem>;
    images: Array<any>;
    price_indicator: number;
    price_range: string;
    has_hot_table: boolean;
}

interface UniversalRequirements {
    name: string;

    url: string;
    numberOfRestaurants?: number;
    image?: string;
    subtitle?: string;
    tags?: Array<ITagItem>;
    is_preferable?: boolean = false;
    has_hot_table?: boolean;
    has_private_dining?: boolean;
    cuisine: ICuisine = [];
    id: string | number;
    location: string;
    time: string;
    date: string;
    price_range: number;
    restaurant_id?: string
    member_benefit_category_url?: string;
    member_event_category_url?: string;
    celebrity_chef_url?: string;
}
