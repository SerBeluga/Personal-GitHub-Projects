"use strict"; 

var a = 10; 
var b = 50; 

console.log("The value of a is %i and b is %i ", a, b); 

//undefined is a reserved keyword as is private so you cant use them when strict mode is on or it throws errors
var privateVar = "Just a String"; 
var undefinedStr = "An undefined value"; 

console.log("The private string is: ", privateVar); 
console.log("The undefined string is: ", undefinedStr);