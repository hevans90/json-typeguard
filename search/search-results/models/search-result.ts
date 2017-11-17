import { Brand } from './brand';

export interface SearchResult {
    object_type: string;
    url: string;
}

export interface DiningSearchResult extends SearchResult {
    object_type: 'restaurant' | 'hot_table' | 'celebrity_chef';
}

export interface EntertainmentSearchResult extends SearchResult {
    object_type: 'event';
}

export interface MemberBenefitSearchResult extends SearchResult {
    object_type: 'member_benefit' | 'member_benefit_category';
}

export interface MemberEventSearchResult extends SearchResult {
    object_type: 'member_event' | 'member_event_category';
}

export interface BrandSearchResult extends SearchResult, Brand {
    object_type: 'brand';
}
