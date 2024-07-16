"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car_info(manufacturer, modelName, ...extraoption) {
    let my_car = {
        manufacturer: manufacturer,
        model: modelName,
        ...Object.assign({}, ...extraoption)
    };
    return my_car;
}
;
let my_car = create_car_info("Suzuki", "Swift", { color: 'Metallic grey' }, { Sunroof: 'True' });
console.log(my_car);
