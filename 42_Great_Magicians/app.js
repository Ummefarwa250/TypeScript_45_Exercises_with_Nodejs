"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['David Blaine', 'Shin Lim', 'Dynamo', 'Harry Potter', 'Chris Angel'];
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'the great ' + magicianArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
