import { Merchant } from './Merchant';
export class ResponseMerchant {

    public content: Merchant[];
    public pageNumber: number;
    public pageSize: number;
    public totalElements: number;
    public totalPages: number;
    public first: boolean;
    public last: boolean;
}