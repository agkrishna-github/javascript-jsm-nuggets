const people = [
    {
    id:1,
    name: 'krishna',
    age:20,
    position: 'developer'
},
    {
    id:2,
    name: 'krishna-2',
    age:21,
    position: 'developer-2'
},
    {
    id:3,
    name: 'krishna-3',
    age:22,
    position: 'developer-3'
},
    {
    id:4,
    name: 'krishna-4',
    age:23,
    position: 'developer-4'
},
    {
    id:5,
    name: 'krishna-5',
    age:24,
    position: 'developer-5'
}
];

const names = people.map((person)=> `<h2>${person.name}</h2>`);

const result = document.querySelector('#result');

// result.innerHTML = names;
result.innerHTML = names.join('');


//.................................

/* const newPeople = people.map((item)=>{
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,
    };
});

console.log(newPeople);
 */

//..............................

/* const getAges = (person) => person.age * 2; 

const ages = people.map(getAges);
console.log(ages);
 */

//.............................

/* 
const ages = people.map((person)=>{
    return person.age * 2;
});

console.log(ages);
 */

//..............................

/* const ages = people.map((person)=>{
    return person.name;
});

console.log(ages);
 */

//.............................

/* 
const ages = people.map((person)=>{
    return person;
});

console.log(ages); */

//..........................

/* 

const ages = people.map((person)=>{
    console.log(person);
    return 'hello world';
});

console.log(ages);

 */

//.....................

/* 
const ages = people.map((person)=>{
    console.log(person);
});
 */






///////////////////////////


/* const people = [
    {
    id:1,
    name: 'krishna',
    age:20,
    position: 'developer'
},
    {
    id:2,
    name: 'krishna-2',
    age:21,
    position: 'developer-2'
},
    {
    id:3,
    name: 'krishna-3',
    age:22,
    position: 'developer-3'
},
    {
    id:4,
    name: 'krishna-4',
    age:23,
    position: 'developer-4'
},
    {
    id:5,
    name: 'krishna-5',
    age:24,
    position: 'developer-5'
}
];

console.log(people);

const ages = people.map(()=>{});
console.log(ages); */