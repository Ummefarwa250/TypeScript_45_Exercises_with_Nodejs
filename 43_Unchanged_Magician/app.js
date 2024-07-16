"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['David Blaine', 'Shin Lim', 'Dynamo', 'Harry Potter', 'Chris Angel'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'the great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nIts my original array:');
show_magicians(magician);
console.log('\n\nIts my modified copy of the array:');
show_magicians(copyMagicianArray);
