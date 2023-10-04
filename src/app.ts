import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';

interface IsPerson {
    name: string,
    speak(s: string): void,
    spend(a: number): number,
}

const me: IsPerson = {
    name: "Nurzhas",
    
    speak(word: string): void {
        console.log(`I said: ${word}`);
    },

    spend(amount: number): number {
        console.log(`I spent ${amount} dollars`);
        return amount;
    },
}

const greet = (person: IsPerson): void => {
   console.log(person.speak('Salem World!')); 
}

greet(me);

// const invoice1 = new Invoice("Jack", "Lunch", 2000);
// const invoice2 = new Invoice("Magzhan", "Tennis", 3000);

// let invoices: Invoice[] = [];
// invoices.push(invoice1);
// invoices.push(invoice2);

// invoices.forEach(invoice => {
//     console.log(invoice.format());
// });



const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const button = document.querySelector('#add') as HTMLButtonElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;

    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }

    console.log(doc);
});