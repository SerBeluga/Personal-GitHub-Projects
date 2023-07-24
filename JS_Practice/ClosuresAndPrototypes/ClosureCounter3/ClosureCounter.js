
function counter() {

    let count = 0; 

    function incrementCount() { 

        return count += 1; 
    }

    return incrementCount; 
}

var countFn = counter(); 

console.log("1 invocation of countFn gives: ", countFn()); 
console.log("2 invocation of countFn gives: ", countFn()); 

for(var i = 3; i <= 8; i++){
    console.log(countFn());
}

let anotherCountFn = counter(); 

console.log("1 invocation of anotherCountFn gives: ", anotherCountFn());
console.log("2 invocation of anotherCountFn gives: ", anotherCountFn());

console.log("What about the original counter? Calling that...", countFn());

