import { Address } from './Address';

export class Merchant {
    constructor(
        public fantasyName?: string,
        public companyName?: string,
        public cnpj?: string,
        public address?: Address,
        public acceptTerms?: boolean,
        public active?: boolean,
        public logo?: string,
        public categories?: [],
        public ads?: [],
        public whatsapp?: string,
        public phones?: [],
        public ifood?: boolean,
        public uberEats?: boolean,
        public rappi?: boolean,
        public ownDelivery?: boolean,
        public displayAddress?: boolean,
        public note?: string) {
        this.address = {};
    }
}