//Scopes
let globalScope = 'I am a global scope';
console.log(globalScope)

const myFunction = () => console.log('something');

function someFunction() {
    let functionScope = 'I am a Function scope';
    console.log(functionScope)
    if(true) {
        let blockScope = 'I am a block scope';
        console.log(blockScope)
        myFunction();
    }
}

someFunction();

//calbacks

function yetAnotherSum(x, y) {
    return y + x + 3;
}

function mathFunction(operator, a, b, otherMathFunction){
    if(operator == '++') return otherMathFunction(a, b);
    return a + b;
}

console.log(mathFunction('++', 5, 6, yetAnotherSum))