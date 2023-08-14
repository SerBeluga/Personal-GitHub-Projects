"use strict"; 
/*
console.log("Is this === window?", this === window); 
console.log("Is this? ", this); 

var age = 35; 
console.log("window.age? ", window.age);
console.log("this.age? ", this.age);

this.age = 55;
console.log("window.age? ", window.age);
console.log("this.age? ", this.age);

let someFnct = () => this;
console.log("the this keywoard returned from a function: ", someFnct());
*/

//all global scope until here, 'this' is referring to global everything in the above code
//arrow funct inherit the scope from parent scope/funct(window/global scope in this case)\
/*
let myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    printDetails() {
        console.log(`
            Make: ${this.make},
            Model: ${this.model},
            Price: ${this.price}`);
    },
    engine: {

        cylinders: 4,
        displacement: 2000,
        horsepower: 250,
        printDetails() {
            console.log(`
                Displacement: ${this.displacement}cc, 
                Horsepower: ${this.horsepower}bhp`);
        }
    } 
};

console.log("The fields of myCar: "); 
myCar.printDetails(); 

console.log("Engine details: \n"); 
myCar.engine.printDetails();
*/
//examples above show how the values displayed with the this keyword change based on 
//where they are declared essentially. 

let myCar = {

    make: "Volvo",
    model: "S60",
    price: 42000,
    engine: {
        cylinders: 4,
        displacement: 2000,
        horsepower: 250,
    }
};

function printCarDetails(){
    
    console.log(`        Make: ${this.make},
        Model: ${ this.model},
        Price: $${this.price}`);
}

function printEngineDetails(){

    console.log(`        Displacement: ${this.displacement}cc, 
        Horsepower: ${this.horsepower}bhp`);
}

console.log("Car details: \n"); 
printCarDetails.call(myCar);

console.log("Engine details: \n"); 
printEngineDetails.call(myCar.engine);

let yourCar = {
    make: "Porsche",
    model: "718 Cayman",
    price: 61000,
    engine: {
        cylinders: 4,
        displacement: 2500,
        horsepower: 350,
    }
};

console.log("Car details: \n"); 
printCarDetails.call(yourCar);

console.log("Engine details: \n"); 
printEngineDetails.call(yourCar.engine);

//the 'call' function defines waht exactly 'this' will refer to 
//within the scope of the function calls