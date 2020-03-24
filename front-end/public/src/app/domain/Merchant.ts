import { Address } from './Address';

export class Merchant {
    constructor(
        public id?: string,
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
        public note?: string,
        public userId?: string) {
        this.address = {};
        this.displayAddress = true;
    }

    public valid(): boolean {
        return !!(this.fantasyName &&
                    this.companyName &&
                    this.cnpj &&
                    this.address.street &&
                    this.acceptTerms &&
                    this.active &&
                    this.logo &&
                    this.categories && this.categories.length > 0 &&
                    this.note);
    }
}