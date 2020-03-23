import { Address } from "./Address";

export interface Merchant {
    fantasyName?: string;
    companyName?: string;
    cnpj?: string;
    address?: Address;
    acceptTerms?: boolean;
    active?: boolean;
    logo?: string;
    categories?: [];
    ads?: [];
    whatsapp?: string;
    phones?: [];
    ifood?: boolean;
    uberEats?: boolean;
    rappi?: boolean;
    ownDelivery?: boolean;
    displayAddress?: boolean;
    note?: string;
}