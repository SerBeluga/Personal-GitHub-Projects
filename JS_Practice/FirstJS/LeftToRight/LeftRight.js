"use strict"; 

var x = "5" + 2 + 3;
console.log("x = ",x); // output is 523 because of implicit type conversion to strings

var x = 2 + 3 + "7"; 
console.log("Redefined x = ", x);

let y = "5" + 2 + 3;
console.log("y = ", y);

let z = 2 + 3 + "5"; 
console.log("z = ", z);