

const person = { name:'krish', lastName: 'g k', job:'developer'};
const getAvarage = (name, ...scores) =>{
    console.log(name);
    console.log(scores);
    const avarage = scores.reduce((total, item)=> { return total += item},0)/scores.length;
    console.log(avarage);
}

const testScores = [23,45,67,89];
getAvarage(person.name, ...testScores);

//.............................
/* 
// functions

const person = { name:'krish', lastName: 'g k', job:'developer'};
const getAvarage = (name, ...scores) =>{
    console.log(name);
    console.log(scores);
    const avarage = scores.reduce((total, item)=> { return total += item},0)/scores.length;
    console.log(avarage);
}

getAvarage(person.name, 20,30,40,50); */

//.....................................
/* 
// functions

const person = { name:'krish', lastName: 'g k', job:'developer'};
const getAvarage = (name, ...scores) =>{
    console.log(name);
    console.log(scores);
}

getAvarage(person.name, 20,30,40,50); */

//....................................
/* 
// functions

const person = { name:'krish', lastName: 'g k', job:'developer'};
const getAvarage = (name, ...scores) =>{
    console.log(name);
    console.log(scores);
}

getAvarage(person.name); */

//..................................
/* 
// objects
const person = { name:'krish', lastName: 'g k', job:'developer'};
const {job, ...rest} = person;
console.log(job, rest); */

//................................
/* 
// objects
const person = { name:'krish', lastName: 'g k', job:'developer'};
const {name, ...rest} = person;
console.log(name, rest); */

//..............................
/* 
// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, second, ...restOfFruits] = fruits;
console.log(first, second, restOfFruits);

const specificFruit = restOfFruits.find((fruit)=> fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name:'krish', lastName: 'g k', job:'developer'};
const {name} = person;
console.log(name);
 */

//.................................
/* 
// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, second, ...rest] = fruits;
console.log(first, second, rest);

// objects
const person = { name:'krish', lastName: 'g k', job:'developer'};
const {name} = person;
console.log(name); */

//..............................
/* 
// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first, ...rest] = fruits;
console.log(first, rest);

// objects
const person = { name:'krish', lastName: 'g k', job:'developer'};
const {name} = person;
console.log(name);
 */

//.........................

/* 
// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana'];
const [first] = fruits;
console.log(first);

// objects
const person = { name:'krish', lastName: 'g k', job:'developer'};
const {name} = person;
console.log(name);

 */