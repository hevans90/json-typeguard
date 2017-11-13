import { SearchResult } from './search-result';
import { MemberBenefitTag } from './../tag';

export interface MemberBenefitSearchResult extends SearchResult {
    tags: MemberBenefitTag[];
    available_from: Date;
    available_until: Date;
    description: string;
    terms_and_conditions: string;
    location: Location;
    opening_times: string;
    online_redemption_code: string;
    in_store_redemption?: any;
    url_redemption?: any;
    images: Image[];
    is_multi_time_redemption: boolean;
    sequence: number;
    has_limited_availability: boolean;
    is_expiring_soon: boolean;
    brand: Brand;
    categories: Category[];
    number_of_benefits?: number;
    member_benefit_categories: any[];
    tag_image?: any;
    brands: any[];
}


export interface Location {
    url: string;
    name: string;
    object_type: string;
    parent?: any;
}

export interface Parent {
    id: number;
    url: string;
    name: string;
    module: string;
    children_url: string;
    num_children: number;
    descendants_url: string;
    num_descendants: number;
    is_preferable: boolean;
    num_preferable_descendants: number;
}

export interface Image {
    url: string;
    sequence: number;
    image: string;
    accessibility_description: string;
    benefit: string;
}

export interface Brand {
    url: string;
    name: string;
    website: string;
    image: string;
    accessibility_description: string;
}

export interface Category {
    url: string;
    number_of_benefits: number;
    name: string;
    brands: any[];
    object_type: string;
    tag_image?: any;
}
