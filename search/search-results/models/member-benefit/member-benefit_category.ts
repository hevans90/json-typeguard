import { MemberBenefitSearchResult } from './../search-result';
import { Tag } from '../tag';
import { Brand } from './../brand';

export interface MemberBenefitCategory extends MemberBenefitSearchResult {
    number_of_benefits: number;
    name: string;
    brands: Brand[];
}
