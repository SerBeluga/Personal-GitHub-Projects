"use strict"; 

let items = [
    {name: "meat", price: 25},
    {name: "vegetables", price: 17},
    {name: "cake", price: 20},
    {name: "drinks", price: 38},
];

let prices = []; 

for (let item of items) { 

    prices.push(item.price);
}

console.log("Price list using for loop: " + prices); 

//array.map(function(currentValue, index, arr), thisValue) the map function broken down
let priceList = items.map(function(item){

    return item.price; 
});

console.log("Price list after mapping: " + priceList); 

//ES6 standard of doing map

priceList = items.map(item => item.price); 
console.log("Price list after mapping (ES6 syntax): " + priceList); 

let total = 0; 

for (let item of items) { 

    total += item.price;
}

console.log("Total cost using for loop: " + total); 

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let totalReducer = items.reduce((sum, item) => sum + item.price, 0);
console.log("Total cost of items (reducer): " + totalReducer); 

//array.filter(function(currentValue, index, arr), thisValue)`
let expensiveItems = items.filter(item => item.price >= 25); 
console.log("The expensive items are: ", expensiveItems); 

let costExpensiveItems = expensiveItems.reduce((sum, item) => sum + item.price, 0)
console.log("Total cost of expensive items: ", costExpensiveItems); 

const values = [3,1,3,5,2,4,4,4];
const setOfValues = new Set(values); //sets in js like in java remove duplicates, but are not arrays
const uniqueValues = [...setOfValues];//use the react spread syntax to convert set to array
console.log("Unique elements of the array: " + uniqueValues)