"use strict"; 

var myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather", 
        color: "Brown"
    }
}

//console.log(`My car: `, myCar);

var yourCar = myCar

//console.log(`Your car: `, yourCar); 

yourCar.tires = "Pirelli"; 
yourCar.seats.color = "Grey";

//console.log(`Your car: `, yourCar);
//console.log(`My car: `, myCar);

var hisCar = Object.assign({}, myCar); 

hisCar.color = "Red"; 
hisCar.seats.color = "Neon Green"; 

// console.log(`The effect of Object.assign(): `);
// console.log(`His car: `, hisCar);
// console.log(`My car: `, myCar);


//essentially aLL of the above ways of duplicating an object produce shallow copies
//that ultimately point to the same object, object.assign only makes a slightly less shallow
// a copy where the top level fields are independent or deep, but nested object are not, 
//still point to original object

var herCar = {...myCar}; //same as the object.assign function, a slightly less shallow copy

//console.log("Her car: ", herCar); 

herCar.seats.color = "Black";

// console.log("The effect of the spread syntax: ");
// console.log("Her car: ", herCar); 
// console.log(`My car: `, myCar);

myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather", 
        color: "Brown"
    }
}

yourCar = JSON.parse(JSON.stringify(myCar)); 

//json.stringify does not convert functions, so beware if your object contains functions

yourCar.tires = "Pirelli"; 
yourCar.seats.color = "Purple"; 

console.log("The effect of JSON.parse() and JSON.stringify(): ");
console.log("Your car: ", yourCar); 
console.log(`My car: `, myCar);