import { Geocode } from './Geocode';

export class MerchanFilter {

    constructor(
        public fantasyName?: string,
        public category?: string,
        public city?: string,
        public state?: string,
        public distance?: number,
        public lat?: number,
        public lon?: number,
        public size?: number,
        public page?: number) {
    }

    clearLocation() {
        this.clearGeolocation();
        this.state = null;
        this.city = null;
    }

    clearGeolocation() {
        this.lat = null;
        this.lon = null;
    }
}
