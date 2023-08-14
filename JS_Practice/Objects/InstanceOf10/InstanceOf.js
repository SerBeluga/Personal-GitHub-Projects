"use strict"; 

class Vehicle{

    constructor(make, model, price){
        this.make = make;
        this.model = model; 
        this.price = price; 
    }
}

let myCar = new Vehicle("Volkswagen", "GTI", 29000);

let yourCar = JSON.parse(JSON.stringify(myCar)); 
let herCar = {...myCar}; 
let hisCar = Object.create(myCar); 
//creates a new object by prototyping 
//the object passed in and using that as a template

console.log("Is myCar a Vehicle?", myCar instanceof Vehicle);
console.log("Is yourCar(deep copy) a Vehicle?", yourCar instanceof Vehicle);
console.log("Is herCar(spread syntax) a Vehicle?", herCar instanceof Vehicle);
console.log("Is hisCar(Object.create) a Vehicle?", hisCar instanceof Vehicle);

console.log("Type of myCar", typeof myCar);
console.log("Type of yourCar", typeof yourCar);
console.log("Type of herCar", typeof herCar);
console.log("Type of hisCar", typeof hisCar);

console.log("myCar: ", myCar);
console.log("yourCar: ", yourCar);
console.log("herCar: ", herCar);
console.log("hisCar: ", hisCar);

class Motorcycle extends Vehicle {

    constructor(make, model, price, seatHeight){
        super(make, model, price);
        this.seatHeight = seatHeight; 
    }
}

let myBike = new Motorcycle("Ducati", "Monster", 10000);

console.log("Is myBike a Motorcycle?", myBike instanceof Motorcycle);
console.log("Is myBike a Vehicle?", myBike instanceof Vehicle);

function City(name, area, population){
    this.name = name;
    this.area = area; 
    this.population = population;
}

let myCity = new City("Bangalore", 8000, 9000000);

console.log("Is myCity a City? ", myCity instanceof City); 