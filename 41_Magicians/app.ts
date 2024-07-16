let magician : string[] = ['David Blaine', 'Shin Lim', 'Dynamo', 'Harry Potter','Chris Angel'];

function show_magicians(magicians: string[]){
    magicians.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician);