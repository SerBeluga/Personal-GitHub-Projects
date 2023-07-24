"use strict";

function Vehicle(type){
    this.type = type; 

    this.printDetails = () => {
        console.log("The type of this vehicle is:", this.type)
    }
}

function Car(make, model, driveTrain){
    this.make = make;
    this.model = model; 
    this.driveTrain = driveTrain; 

    this.printDetails = () => {
        console.log("This %s is a %s %s.", this.type, this.make, this.model); 
    }
}

function Airplane(make, model, numEngines, engineType){
    this.make = make;
    this.model = model; 
    this.numEngines = numEngines; 
    this.engineType = engineType; 
}

Car.prototype = new Vehicle("Car"); 
var vwGTI = new Car("Volkswagen", "GTI", "4 Wheel");

console.log("The VW GTI object: ", vwGTI); 

console.log("The details of the VW GTI: ")
vwGTI.printDetails(); 

Airplane.prototype = new Vehicle("Aircraft");
var airbus320 = new Airplane("Airbus", "A320", 2, "Turbofan"); 

console.log("The Airbus A320 object: ", airbus320); 

console.log("The details of the Airbus A320: ")
airbus320.printDetails();

function AirbusA320(variantName, wingspan, factoryLocation){
    this.variantName = variantName; 
    this.wingspan = wingspan; 
    this.factoryLocation = factoryLocation; 

    this.printDetails = () => {
        console.log("This %s is a %s %s %s which was made in %s " + 
        "and has a wingspan of %im. It has %i %s engines.",
        this.type, this.make, this.model, this.variantName, this.factoryLocation,
        this.wingspan, this.numEngines, this.engineType); 
    }
}

AirbusA320.prototype = airbus320;
var a320neo = new AirbusA320("Neo", 36, "Hamburg, Germany"); 

console.log("The details of the Airbus A320neo: ");
a320neo.printDetails(); 

console.log("The Airbus A320 Neo object: ", a320neo); 