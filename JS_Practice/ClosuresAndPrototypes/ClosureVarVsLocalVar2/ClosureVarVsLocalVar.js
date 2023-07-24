//"use strict"; 

const PI = 3;

function Circle(r){ 
    this.radius = r
}

let getAreaFirst = function(circle){

    console.log("Inside getAreaFirst"); 
    console.log("Area of circle: ", PI * circle.radius * circle.radius); 
}

let firstCircle = new Circle(10); 

function innerFunction() { 
    
    const PI = 3.1; 

    let getAreaSecond = function(circle){ 

        console.log("Inside getAreaSecond");
        console.log("Area of circle: ", PI * circle.radius * circle.radius);
    }

    let getAreaThird = function(circle){ 

        const PI = 3.14
        console.log("Inside getAreaThird");
        console.log("Area of circle: ", PI * circle.radius * circle.radius);

    }

    getCircumference = function(circle){

        console.log("Inside getCircumference");
        console.log("Circumference of circle: ", 2 * PI * circle.radius);
    }

    let secondCircle = new Circle(20); 

    // console.log("innerFunction: Calling the functions with firstCircle: ");
    // getAreaFirst(firstCircle); 
    //getAreaSecond(firstCircle);
    // getCircumference(firstCircle); 
    // getAreaThird(firstCircle); 

    // console.log("innerFunction: Calling the functions with secondCircle: ");
    // getAreaFirst(secondCircle);
    // getAreaSecond(secondCircle);
    // getCircumference(secondCircle); 
    // getAreaThird(secondCircle); 
}

innerFunction(); 

console.log("Outside innerFunction calling the functions with firstCircle: ");
getAreaFirst(firstCircle); 
//getAreaSecond(firstCircle); 

// console.log("Outside innerFunction calling the functions with secondCircle: ");
// getAreaFirst(secondCircle); 

function getAreaFourth(circle){
    const PI = 3.142; 

    function calculateArea(){ 
        console.log("Inside getAreaFourth");
        console.log("Area of circle: ", PI * circle.radius * circle.radius); 
    }

    return calculateArea; 
}

console.log("The value of PI in this scope: ", PI); 
let circleArea = getAreaFourth(firstCircle); //essentially the hierarchy of variables is determined by in what closure they are declared, a local var trumps a global one.
                                            //functions will choose the var declared in their closure rather than one declared outside or perhaps in a parent closure
circleArea(); 


