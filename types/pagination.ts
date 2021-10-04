export interface IPagination<T = any> {
    data: T[];
    page: number;
    per_page: number;
    total: number;
}
