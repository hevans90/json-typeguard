import { Tag } from '../tag';
import { Image } from '../image';
import { Brand } from './../brand';
import { MemberBenefitSearchResult } from '../search-result';
import { MemberBenefitCategory } from './member-benefit_category';

export interface MemberBenefit extends MemberBenefitSearchResult {
    tags: Tag[];
    available_from: Date;
    available_until: Date;
    name: string;
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
    categories: MemberBenefitCategory[];
}

export interface Location {
    url: string;
    name: string;
    object_type: string;
    parent?: any;
}
