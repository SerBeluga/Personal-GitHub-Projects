"use strict"; 

const myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    color: "Grey",

    seats: {
        material: "Leather", 
        color: "Brown"
    }
}

var samsCar = Object.create(myCar);

samsCar.seats.color = "White";

// console.log("The effect of Object.create(): ");
// console.log("Sam's car: ", samsCar); 
// console.log(`My car: `, myCar);

// console.log("What are the Object's keys? ");
// console.log(Object.keys(myCar));

// console.log("What are the Object's values? ");
// console.log(Object.values(myCar));

// console.log("What are the Object's entries: ");
// console.log(Object.entries(myCar));

let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

let yourCar = Object.assign(myCar, {engine: s60Engine});

// console.log("The effect of Object.assign(): ");
// console.log("Your car: ", yourCar);
// console.log("My car: ", myCar);

let herCar = Object.freeze(myCar); 

//herCar.color = "Yellow";
herCar.seats.color = "Red";

//herCar.tires = "Pirelli";
herCar.seats.bucket = true; 

// console.log("The effect of Object.freeze(): ");
// console.log("Hercar: ", herCar);
// console.log("My car: ", myCar);

let hisCar = Object.seal(myCar); 

//hisCar.color = "White";
hisCar.seats.color ="White";

//hisCar.weight = 1632; 
hisCar.engine.torque = 350; 

console.log("The effect of Object.seal(): ");
console.log("His car: ", hisCar);
console.log("My car: ", myCar);