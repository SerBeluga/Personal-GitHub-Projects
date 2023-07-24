"use strict"; 

var boss = "Margaret"; 

function employee(name, title){

    this.name = name; 
    this.title = title; 
    this.domain = "Data"; 

    this.intro = function(){ 
        let empTitle = this.domain + " " + title; 
        console.log("My name is %s and I report to %s. My title is %s", name, boss, empTitle); 
    }

}

var Troy = new employee("Troy", "Analyst");
/*
console.log("The employee introduction: "); 
Troy.intro(); 

boss = "Wolfgang";

console.log("The employee intro after the boss change: "); 
Troy.intro(); 

Troy.domain = "Machine Learning"; 

console.log("Troy after his domain change: "); 
Troy.intro(); 

Troy.title = "Engineer"; 

console.log("Troy after his title change: "); 
Troy.intro(); 

console.log("Troy: ", Troy);


function myTimeoutFunc() { 
    console.log("'Hello' will be displayed after 10 seconds......");
    setTimeout(function(){document.write("Hello");}, 10000);
}

myTimeoutFunc();
*/

function timeoutTest(){

    for(let i =0; i <= 3; i++){

        setTimeout(function(){
            console.log(i)
        }, i*3000)
    }
}

timeoutTest(); 