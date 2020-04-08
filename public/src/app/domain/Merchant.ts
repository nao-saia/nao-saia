import { Address } from './Address';

export class Merchant {

    static of(merchant: Merchant): Merchant {
        return new Merchant(
            merchant.id,
            merchant.fantasyName,
            merchant.companyName,
            merchant.cnpj,
            merchant.address,
            merchant.acceptTerms,
            merchant.active,
            merchant.logo,
            merchant.categories,
            merchant.ads,
            merchant.whatsapp,
            merchant.phones,
            merchant.ifood,
            merchant.uberEats,
            merchant.rappi,
            merchant.ownDelivery,
            merchant.displayAddress,
            merchant.note,
            merchant.userId);
    }

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
        if (!this.address) {
            this.address = new Address();
        }
        if (this.displayAddress === undefined) {
            this.displayAddress = true;
        }
        if (!this.phones) {
            this.phones = [];
        }
        if (!this.categories) {
            this.categories = [];
        }
        this.active = true;
        this.acceptTerms = true;
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
