export class Invoice {
    constructor(
        readonly client: string,
        readonly details: string,
        readonly amount: number,
    ) {}

    format(): string {
        return `${this.client} owes $${this.amount} money for ${this.details}`;
    }
}