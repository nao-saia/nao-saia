import { Geocode } from "./Geocode";

export interface Address {
    location: Geocode;
    street: string;
    city: string;
    state: string;
    district: string;
    zipcode: string;
}