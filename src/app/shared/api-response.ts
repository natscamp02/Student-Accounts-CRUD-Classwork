export interface APIResponse<T = undefined> {
    status: string;
    data?: T;
    message?: string;
}
