import { Invoice } from './models/Invoice.js';
const invoice1 = new Invoice("Jack", "Lunch", 2000);
const invoice2 = new Invoice("Magzhan", "Tennis", 3000);
let invoices = [];
invoices.push(invoice1);
invoices.push(invoice2);
invoices.forEach(invoice => {
    console.log(invoice.format());
});
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const button = document.querySelector('#add');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
