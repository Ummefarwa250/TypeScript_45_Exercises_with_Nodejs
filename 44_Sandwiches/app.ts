function makeSandwich (item: string[]){
    console.log('\nMaking your sandwich with:')
    item.forEach(element => console.log("-" + element));
    
    console.log('Enjoy your sandwich ! ');
    
}

makeSandwich(['Cheese','Musturd','Onions']);

makeSandwich(['Lettuce','Swiss','Hummus']);

makeSandwich(['Nutella','Peanuts']);
