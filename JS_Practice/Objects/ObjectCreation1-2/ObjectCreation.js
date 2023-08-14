"use strict";

let firstItem = {id: 1, name: "laptop", price: 500};

let secondItem = {id: 2, name: "watch", price: 240, brand: "Sonical"};

console.log(`firstItem has a name of ${firstItem.name} and a price of ${firstItem.price}.`); 

console.log(`secondItem has a name of ${secondItem["name"]} and a price of ${secondItem["price"]}.`); 

console.log(`The brand of firstItem is ${firstItem.brand} while that of secondItem is ${secondItem.brand}.`);
//interesting different ways of formatting vars in strings, second one is for arrays
const USD_EUR = 0.9; 

let thirdItem = {id: 3,
                name: "headphones",
                brand: "Sonical",
                price: 84,
                priceEUR: this.price * USD_EUR
}; 

console.log("Price of thirdItem in Euros: ", thirdItem.priceEUR);            

thirdItem = {id: 3,
            name: "headphones",
            brand: "Sonical",
            price: 84,
            priceEUR: function(){return this.price * USD_EUR}
};

console.log("Price of thirdItem in Euros: ", thirdItem.priceEUR());

thirdItem = {id: 3,
    name: "headphones",
    brand: "Sonical",
    price: 84,
    priceEUR() {return this.price * USD_EUR;}
};
//important here, how to define a function in an obj in ES6 standard, less code

console.log("Price of ES6 style declaration thirdItem in Euros: ", thirdItem.priceEUR());

thirdItem.mfgCountry = "Canada";

console.log("The thirdItem is: ", thirdItem);


let fourthItem = new Object(); 

fourthItem.id = 4; 
fourthItem.name = "cell phone"; 
fourthItem.price = 450; 

console.log("The fourthItem is: ", fourthItem); 

delete fourthItem.price; 
//really important here, first use of delete keyword to remove a property from an obj

console.log("The fourthItem is: ", fourthItem); 