"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userName = ['admin', 'kashaf', 'sara', 'maria', 'rida'];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === 'admin') {
        console.log('Hello admin, would you like to see a status report?');
    }
    else {
        console.log(`Hello ${userName[i]},  Thank you for logging in again.`);
    }
}
