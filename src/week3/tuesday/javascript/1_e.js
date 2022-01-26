//functions
function sum(a,b) {
    return a + b;
}

console.log(sum(40, 60));

function inchtoCm(inches){
    const eq = 2.54;
    return inches * eq;
}

console.log(inchtoCm(6))

function pay (value, tax = 0) { //tax have a default value
    return value + (tax * value) / 100;
}

console.log(pay(5,50))
console.log(pay(5))

function woowArguments() {
    console.log(arguments.length);
    return arguments;
}

console.log(woowArguments(1, 'Alex', false, 'Tusell'))

