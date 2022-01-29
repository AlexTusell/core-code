let a1 = [
    { name: 'alex', age: 26 },
    { name: 'alex2', age: 22 },
    { name: 'alex3', age: 23 },
]

// map (without touching the original array )
const challenge = (a1) => {
    return a1.map(user => ({ name: user.name, age: user.age * 2 }));
}

// map (touching the original array )
const challenge2 = (a1) => {
    return a1.map(user => {
        user.age * 2;
        return user;
    });
}

console.log(challenge(a1))

console.log(challenge2(a1))

let n = [1, 2, 3, 4, 5, 6]

// reduce
let total = n.reduce((pre, curr) => {
    return pre + curr;
}, 0); // initial value

console.log(total)

// reduce and slice
let s = 'Hola qUe taL soy uN sTriNg!'
const sf = s.split(' ').reduce((prev, curr) => {
    return `${prev} ${curr[0].toUpperCase()}${curr.slice(1).toLowerCase()}`
}, '').trim();

console.log(sf);

//filter
let n3 = n.filter(e => e > 3);

console.log(n)
console.log(n3)