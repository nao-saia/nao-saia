import { Geocode } from './Geocode';

export class Address {
    constructor(
        public location?: Geocode,
        public street?: string,
        public city?: string,
        public state?: string,
        public district?: string,
        public zipcode?: string,
        public additionalInfo?: string
    ) {
        this.location = new Geocode();
    }
}