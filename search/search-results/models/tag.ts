export interface Tag {
    id?: number;
    url: string;
    name: string;
}

interface DetailedTag extends Tag {
    module: string;
    children_url: string;
    num_children: number;
    descendants_url: string;
    num_descendants: number;
    is_preferable: boolean;
    num_preferable_descendants: number;
    parent?: DetailedTag;
}

export interface DiningTag extends Tag { }

export interface EntertainmentTag extends DetailedTag { }

export interface MemberBenefitTag extends DetailedTag { }

export interface MemberEventTag extends DetailedTag {
    member_benefit_category: string;
    member_event_category: string;
}
