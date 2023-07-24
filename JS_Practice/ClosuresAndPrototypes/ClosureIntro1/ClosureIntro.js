"use strict";

function Patient(id, name, address, bloodGroup){ 
    this.id = id 
    this.name = name

    var _address = address //essentially var variables are private scope when declared here, though still accessible in the console, they are not global scope but closure scope
    var _bloodGroup = bloodGroup 

    this.printDetails = function(){ 
        console.log(`The patient details are: 
            Patient ID: ${this.id}
            Name: ${this.name}
            Address: ${_address}
            Blood Group: ${_bloodGroup}
        `)
    }
}

var firstPatient = new Patient(12, "Tanya Wells", "Ashville", "B+")

console.log("The details for the firstPatient") 
console.log("The object: ", firstPatient)

console.log("The ID is %s and the name is %s ", firstPatient.id, firstPatient.name) 

console.log("From the outside, the address is %s and the blood group %s ", firstPatient._address, firstPatient._bloodGroup)

console.log("The invocation of printDetails function gives us: ")
firstPatient.printDetails()

var secondPatient = new Patient(12, "Dean Taylor", "Madison", "A-");
console.log(secondPatient) 
console.log("The second patient details are :");
secondPatient.printDetails()

firstPatient.name = "Deanna Thomas"; 

console.log("The invocation of printDetails after updating the name gives us: "); 
firstPatient.printDetails(); 