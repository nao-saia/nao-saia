import { State } from "./State";

export class City {
    constructor(
        public name?: string,
        public state?: State,
        public country?: string,
        public codeIbge?: number
    ) {}
}
