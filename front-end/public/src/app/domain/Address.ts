import { Geocode } from "./Geocode";

export interface Address {
    constructor(
        location: Geocode,
        street: string,
        city: string,
        state: string,
        district: string,
        zipcode: string)
}