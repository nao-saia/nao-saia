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
        public categories?: string[],
        public ads?: [],
        public whatsapp?: string,
        public phones?: string[],
        public ifood?: boolean,
        public uberEats?: boolean,
        public rappi?: boolean,
        public ownDelivery?: boolean,
        public displayAddress?: boolean,
        public note?: string,
        public userId?: string) {
        this.address = new Address();
        this.displayAddress = true;
        this.phones = [];
        this.categories = [];
    }

    public valid(): boolean {
        return !!(this.fantasyName &&
                    this.companyName &&
                    this.categories && this.categories.length > 0 &&
                    this.cnpj &&
                    this.phones && this.phones.length > 0 && this.phones[0] && this.phones[0].length > 0 &&
                    this.address.state &&
                    this.address.city &&
                    this.note);
    }

    clearAddress() {
        this.address = new Address();
    }
}