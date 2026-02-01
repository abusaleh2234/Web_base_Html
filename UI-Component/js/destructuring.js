// ------------------object destructuring-------------------

// const person = {name: "Kamal", age: 23, city: "dhaka"}

// console.log(person.age);
const {name,age} = {name: "Kamal", age: 23, city: "dhaka"}

// console.log(name, age);
// ----------------------array destructuring---------------

const number = [10,30,60,20,50,80]

// console.log(number[1]);

const [first, second,...other ] = number
// console.log(other);
console.log(first);


