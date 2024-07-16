
function create_car_info(manufacturer:string,  modelName:string, ...extraoption: { [key: string] : any } [] ):

object {

    let my_car ={
        manufacturer: manufacturer,
        model: modelName,
        ...Object.assign({}, ...extraoption)
    }
 
    return my_car;
};

let my_car = create_car_info("Suzuki","Swift" , {color: 'Metallic grey'} , {Sunroof: 'True'});
console.log(my_car);