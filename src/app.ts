import { Invoice } from './models/Invoice.js';

const invoice1 = new Invoice("Jack", "Lunch", 2000);
const invoice2 = new Invoice("Magzhan", "Tennis", 3000);

let invoices: Invoice[] = [];
invoices.push(invoice1);
invoices.push(invoice2);

invoices.forEach(invoice => {
    console.log(invoice.format());
});

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const button = document.querySelector('#add') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber,
    );
});