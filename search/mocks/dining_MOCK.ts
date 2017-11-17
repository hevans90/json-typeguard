import { DiningSearchResult } from '../search-results/dining-search-result';

export class DiningSearchResultMockClass implements DiningSearchResult {

    constructor(
        public name: '',
        public url: '',
        public object_type: '',
        public tags: null,
        public cuisine: null,
        public city: null,
        public price_indicator: any,
        public walk_in_only: false,
        public privacy_policy: null,
        public reservation_policy: '',
        public has_hot_table: false,
        public has_member_benefit: false,
        public has_private_dining: false,
        public images: null,
        public rating: 0,
        public number_of_restaurants: 0,
        public image: null,
        public tag_image: null,
        public restaurant: null,
        public number_of_seats: 0,
        public is_guaranteed: false,
        public no_show_charge_currency: '',
        public no_show_charge: '',
        public is_preauth_required: false,
        public status: '',
        public available_at: null,
        public site: string
    ) { }
}

// export class DiningSearchResult implements SearchResult {

//     constructor(
//         public name: string = null,
//         public url: string = null,
//         public object_type: string = null,
//         public tags: DiningTag[] = null,
//         public cuisine: string = null,
//         public city: string = null,
//         public walk_in_only: boolean = null,
//         public reservation_policy: string = null,
//         public has_hot_table: boolean = null,
//         public has_member_benefit: boolean = null,
//         public has_private_dining: boolean = null,
//         public images: Image[] = null,
//         public rating: number = null,
//         public tag_image: TagImage = null,
//         public restaurant: Restaurant = null,
//         public no_show_charge_currency: string = null,
//         public no_show_charge: string = null,
//         public status: string = null,
//         public site: string = null,

//         public price_indicator?: any,
//         public privacy_policy?: any,
//         public number_of_restaurants?: number,
//         public image?: any,
//         public is_guaranteed?: boolean,
//         public number_of_seats?: number,
//         public is_preauth_required?: boolean,
//         public available_at?: Date,
//     ) { }
// }
