const people = [
    {name:'krishna', age:20, position: 'developer'},
    {name:'krishna-2', age:21, position: 'designer'},
    {name:'krishna-3', age:22, position: 'the boss'},
    {name:'krishna-4', age:23, position: 'intern'},
    {name:'krishna-5', age:25, position: 'developer'},

];

const developer = people.filter((person)=> person.position === 'developer');
console.log(developer);

const senDevelopers = people.filter((item)=> item.position === 'senDeveloper');
console.log(senDevelopers);

const krishna4 = people.filter((person)=> person.name === 'krishna-4');
console.log(krishna4);
console.log(krishna4[0].position);

const krishna2 = people.find((person)=> person.name === "krishna-2");
console.log(krishna2);

const oldPerson = people.find((person)=> person.age > 22);
console.log(oldPerson);

const oldPerson2 = people.find((person)=> person.age > 25);
console.log(oldPerson2);

//................................

const fruits = ['apple', 'banana', 'lemon'];

const fruit = fruits.find((fruit)=> fruit === 'lemon');
console.log(fruit);



//................................

/* const youngPeople = people.filter((person)=>{
   return person.age > 21;
});

console.log(youngPeople); */

//.................................
/* 
const youngPeople = people.filter((person)=>{
    if(person.age > 21){
        return person;
    }
});

console.log(youngPeople);
 */

//................................

/* const youngPeople = people.filter((person)=>{
    return false;
    // return true;
    // return person;
});

console.log(youngPeople);
 */
//.................................
/*
 const youngPeople = people.filter((person)=>{
    console.log(person);
});

console.log(youngPeople); */