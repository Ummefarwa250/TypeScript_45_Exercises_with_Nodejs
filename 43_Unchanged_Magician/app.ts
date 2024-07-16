let magician : string[] = ['David Blaine', 'Shin Lim', 'Dynamo', 'Harry Potter', 'Chris Angel'];

function copyArray(arr:string[]){
    return[...arr]
}
function make_great (magicianArray : string[] ){
       
    for(let i=0; i<magicianArray.length; i++){
        magicianArray[i] ='the great ' + magicianArray[i]
    }

}
function show_magicians(magicians: string[]){
    magicians.forEach(element =>{
        console.log(element);
    });
}


const copyMagicianArray = copyArray(magician)
make_great(copyMagicianArray);

console.log('\n\nIts my original array:')
show_magicians(magician)

console.log('\n\nIts my modified copy of the array:')
show_magicians(copyMagicianArray);