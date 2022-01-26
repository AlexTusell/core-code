//Spread 
let str = 'This is a String';
let a = [...str]

console.log(a)

let x = [1, 2, 3]
let y = [4, 5, 6]

let z = [...x,...y]

console.log(z)

function sum(a, b, c){
    return a + b + c;
}

let param = [1, 2, 3]

console.log(sum(...param))