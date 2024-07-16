interface item {
    name: string
    price: number
}
const dress: item ={
    name: 'Sana safinaz',
    price: 500
}
const mobile: item ={
    name: 'vivo',
    price: 900
}
const shoe: item ={
    name: 'addidas',
    price: 400
}
console.log(`dress name: ${dress.name},  price: $${dress.price}`)
console.log(`mobile name: ${mobile.name},  price: $${mobile.price}`)
console.log(`shoe name: ${shoe.name}, price: $${shoe.price}`)