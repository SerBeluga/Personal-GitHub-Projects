"use strict"; 

function Car(make, model, price, engine){

    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;
}

let s60Engine = {
    cylinders: 4,
    displacement: 2000,
    horsepower: 250
}

let caymanEngine = {
    cylinders: 4,
    displacement: 2500,
    horsepower: 350
}

let myCar = new Car("Volvo", "S60", 42000, s60Engine);

console.log(`My car is a ${myCar.make} ${myCar.model}`);

let yourCar = new Car("Porsche", "718 Cayman",61000, caymanEngine);

console.log(`My car is a ${yourCar.make} ${yourCar.model}`);

function Car(make, model, price, engine){

    this.make = make;
    this.model = model;
    this.price = price;
    this.engine = engine;

    this.details = function() {
        console.log(`            Make: ${this.make},
            Model: ${this.model},
            Price: $${this.price}`);
    }

    this.engine.details = function() {
        console.log(`            Displacement: ${this.displacement}cc,
            Horsepower: ${this.horsepower}bhp`);
    }

}

myCar = new Car("Volvo", "S60", 42000, s60Engine); 

console.log("My car details: \n"); 
myCar.details(); 

console.log("My engine details: \n"); 
myCar.engine.details(); 

class Vehicle{

    constructor(make, model, price, engine){
        this.make = make;
        this.model = model;
        this.price = price;
        this.engine = engine;

    }

    details = function() {
        console.log(`            Make: ${this.make},
            Model: ${this.model},
            Price: $${this.price}`);
    };
};

myCar = new Vehicle("Volvo", "S60", 42000, s60Engine);

console.log("My vehicle details: \n"); 
myCar.details(); 

//the 'class' keyword is essentially the same as using function Car(make, model, price, engine)
//just easier to type out for people coming from other languages, constructors included