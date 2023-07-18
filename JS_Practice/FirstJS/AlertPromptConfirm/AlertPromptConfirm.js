"use strict"; 

alert("This is an alert message!");

//gathering input from user in really basic JS with prompt
let name1 = prompt("The prompt message is: \nPlease eneter your name here:");
console.log("Entered name was: " + name1); 

//apparently you can provide placeholders in prompts by just specifiying a string kind of like a variable in a let declaration, interesting
let subject = prompt("Please enter your selected subject: ", "JavaScript"); 
console.log("Your selected subject is: " + subject); 

let a = prompt("Enter a number to get its square value: ");
let b = a * a; 
alert("Square root of " + a + " is: " + b); 

let output = confirm("Confirmation message: \nReady to move on to the next Demo?");

if(output) { 
    console.log("You pressed OK")
}
else { 
    console.log("You pressed Cancel"); 
}