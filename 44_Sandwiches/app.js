"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeSandwich(item) {
    console.log('\nMaking your sandwich with:');
    item.forEach(element => console.log("-" + element));
    console.log('Enjoy your sandwich ! ');
}
makeSandwich(['Cheese', 'Musturd', 'Onions']);
makeSandwich(['Lettuce', 'Swiss', 'Hummus']);
makeSandwich(['Nutella', 'Peanuts']);
