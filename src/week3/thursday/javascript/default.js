//Default values

function foo(a, b) {
    return a - b;
}

function bar(c) {
    let result = foo(10, 5) || 1;
    return c / result;
}

console.log(bar(5));

function secret(showMessage) {
    let message = showMessage && 'The password is: 123'
    console.log(message)
}

secret(true)