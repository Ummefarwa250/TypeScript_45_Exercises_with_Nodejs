"use strict";
let guestList = ['warda', 'mirha', 'zimal khan', 'yusra', 'qainat'];
console.log('\nunfortunelty we can not arrange a  big table . only two people allow.');
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`we are sorry Miss ${removeGuest} you are not invited for dinner.`);
}
for (let i = 0; i < guestList.length; i++) {
    console.log('\nMy honourable guest: ' + guestList[i] + ' ,\Yes you are still invited on tomorrow dinner\nThank you\n');
}
guestList.splice(0, 2);
console.log(guestList);
