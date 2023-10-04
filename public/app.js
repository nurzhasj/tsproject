import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
const me = {
    name: "Nurzhas",
    speak(word) {
        console.log(`I said: ${word}`);
    },
    spend(amount) {
        console.log(`I spent ${amount} dollars`);
        return amount;
    },
};
const greet = (person) => {
    console.log(person.speak('Salem World!'));
};
greet(me);
// const invoice1 = new Invoice("Jack", "Lunch", 2000);
// const invoice2 = new Invoice("Magzhan", "Tennis", 3000);
// let invoices: Invoice[] = [];
// invoices.push(invoice1);
// invoices.push(invoice2);
// invoices.forEach(invoice => {
//     console.log(invoice.format());
// });
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const button = document.querySelector('#add');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
