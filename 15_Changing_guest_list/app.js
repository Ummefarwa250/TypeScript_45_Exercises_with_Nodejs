"use strict";
let guestList = ['warda', 'mirha', 'zimal khan', 'yusra', 'qainat'];
let notPresent = 'yusra';
let newGuest = 'fariha';
guestList[3] = newGuest;
for (let i = 0; i < guestList.length; i++) {
    console.log('My honourable guest: ' + guestList[i] + ' ,\nYou are invited  on tomorrow come dine with us.\nThank you\n');
}
console.log(`Miss. ${notPresent} will not coming tomorrow for dinner.`);
