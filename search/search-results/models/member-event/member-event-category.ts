import { Image } from "../image";
import { MemberEventSearchResult } from "../search-result";
import { Brand } from './../brand';

export interface MemberEventCategory extends MemberEventSearchResult {
    name: string;
    number_of_events: number;
    brands: Brand[];
    tag_image: Image;
}
