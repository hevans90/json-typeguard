import { SearchResult } from './search-result';
import { MemberEventTag } from './../tag';

export interface MemberEventSearchResult extends SearchResult {
    tags: MemberEventTag[];

    //#region name_xyz
    name_en_gb: string;
    name_en_us?: any;
    name_en_ca?: any;
    name_es_es?: any;
    name_fr_ca?: any;
    name_pt_br?: any;
    name_ar_ae?: any;
    name_zh_hans?: any;
    name_zh_hant?: any;
    name_ja?: any;
    name_ko?: any;
    //#endregion

    brands: Brand[];
    country: Country;
    images: Image[];
    latitude?: any;
    longitude?: any;
    address_line1: string;
    address_line2: string;
    city: string;
    state: string;
    postcode: string;
    type: string;
    complimentary_ticket_type: string;
    capacity: number;
    limited_availability_threshold: number;
    max_tickets_per_member: number;
    adult_ticket_price_currency: string;
    adult_ticket_price: string;
    child_ticket_price_currency: string;
    child_ticket_price: string;

    description: string;
    //#region description_xyz
    description_en_gb: string;
    description_en_us: string;
    description_en_ca: string;
    description_es_es: string;
    description_fr_ca: string;
    description_pt_br: string;
    description_ar_ae: string;
    description_zh_hans: string;
    description_zh_hant: string;
    description_ja: string;
    description_ko: string;
    //#endregion

    supplier: string;
    //#region supplier_xyz
    supplier_en_gb: string;
    supplier_en_us: string;
    supplier_en_ca: string;
    supplier_es_es: string;
    supplier_fr_ca: string;
    supplier_pt_br: string;
    supplier_ar_ae: string;
    supplier_zh_hans: string;
    supplier_zh_hant: string;
    supplier_ja: string;
    supplier_ko: string;
    //#endregion

    agenda: string;
    //#region agenda_xyz
    agenda_en_gb: string;
    agenda_en_us: string;
    agenda_en_ca: string;
    agenda_es_es: string;
    agenda_fr_ca: string;
    agenda_pt_br: string;
    agenda_ar_ae: string;
    agenda_zh_hans: string;
    agenda_zh_hant: string;
    agenda_ja: string;
    agenda_ko: string;
    //#endregion

    dress_code: string;
    //#region dress_code_xyz
    dress_code_en_gb: string;
    dress_code_en_us: string;
    dress_code_en_ca: string;
    dress_code_es_es: string;
    dress_code_fr_ca: string;
    dress_code_pt_br: string;
    dress_code_ar_ae: string;
    dress_code_zh_hans: string;
    dress_code_zh_hant: string;
    dress_code_ja: string;
    dress_code_ko: string;
    //#endregion

    is_food_and_drink_served: boolean;
    food_and_drink: string;
    is_outdoors: boolean;
    is_refundable: boolean;
    vendor_id?: any;
    categories: any[];
    sites: string[];
    number_of_benefits?: number;
    member_benefit_categories: any[];
    tag_image: TagImage;
    number_of_events?: number;
}

export interface Brand {
    url: string;
    name: string;
    website: string;
    image: string;
    accessibility_description: string;
}

export interface Country {
    url: string;
    code: string;
    name: string;
    alpha3_code: string;
}

export interface Image {
    url: string;
    sequence: number;
    image: string;
    accessibility_description: string;
    is_main_image: boolean;
    event: string;
}

export interface TagImage {
    image?: any;
    accessibility_description: string;
    title: string;
    caption: string;
}
