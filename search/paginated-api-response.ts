export interface PaginatedApiResponse<T> {
    page_size: number;
    current: number;
    count: number;
    next: string;
    previous?: any;
    results: T[];
}
