import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        readonly details: string,
        readonly amount: number,
    ) {}

    format(): string {
        return `${this.recipient} owed $${this.amount} for ${this.details}`;
    }
}