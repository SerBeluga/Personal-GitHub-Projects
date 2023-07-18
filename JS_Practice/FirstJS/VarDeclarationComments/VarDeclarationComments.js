"use strict"; 

//Assign value using var 
var price1 = 5;
var price2 = 10; 
var total = price1 + price2; 

console.log("Sum of price 1 and price2 = ", total);

//updating variables declared with var 

price1 = 21;
price2 = 14;
total = price1 + price2; 

console.log("Updated sum of price 1 and price2 = ", total); 

//re-declaring the variables with var
var price1 = 500;
var price2 = 310;
var total = price1 + price2; 

console.log("Sum of the re-declared price 1 and price2 =", total); 

// assign value using let 

let dividend = 420; 
let divisor = 20; 

console.log("The division result:  ", dividend/divisor); 

// update value using let keyword

dividend = 720; 
divisor = 30; 

console.log("The updated division result:  ", dividend/divisor); 

//Let does not permit re-declaration. Once a variable has been declared with let, it can be updated but not redeclared. 

/*
let dividend = 880; 
let divisor = 40; 

console.log("The division result after redeclaration: ", dividend/divisor); 
*/

//The const keyword represents constants. Constants can only be defined once. Updates and redefinitions are not permitted. 

const MY_BDAY = "02.14.1998"; 
console.log("My birthday is on ", MY_BDAY);

//MY_BDAY = "02.14.1988"; 

//const MY_BDAY = "02.14.1998";

//When using var, a variable can be used before initialization this is known as variable hoisting. See below
a = 5; 
console.log("The value of a =", a); 
var a; 

//With let and const, variable hoisting is not possible.

// b=5; 
// console.log("The value of b = ", b); 
// let b; 

// c=5; 
// console.log("The value of c = ", c); 
// const c; 