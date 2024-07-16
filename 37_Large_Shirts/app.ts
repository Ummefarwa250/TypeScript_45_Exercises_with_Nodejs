function make_shirt(size:string = 'Small' ,text:string = 'I love typescript.'){

    console.log(`Creating a ${size} shirt with the message: ${text}`)
}

make_shirt()

make_shirt('Medium');

make_shirt('large', 'I love python.');
