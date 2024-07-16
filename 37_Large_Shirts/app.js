"use strict";
function make_shirt(size = 'Small', text = 'I love typescript.') {
    console.log(`Creating a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt('Medium');
make_shirt('large', 'I love python.');
