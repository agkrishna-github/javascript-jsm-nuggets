const people = [
    {name:'krishna', salary:200, position: 'developer'},
    {name:'krishna-2', salary:321, position: 'designer'},
    {name:'krishna-3', salary:422, position: 'the boss'},
    {name:'krishna-4', salary:523, position: 'intern'},
    {name:'krishna-5', salary:625, position: 'developer'},

];

const dailyTotal = people.reduce((total, person)=>{
    console.log(total);
    console.log(person.salary);
    total += person.salary;
    return total;
},1000);

console.log(dailyTotal);

//...............................
/* 
const dailyTotal = people.reduce((total, person)=>{
    console.log(total);
    console.log(person.salary);
    total += person.salary;
    return total;
},0);

console.log(dailyTotal); */

//.................................
/* 
const dailyTotal = people.reduce((total, person)=>{
    console.log(total);
    console.log(person.salary);
    return total;
},0);

console.log(dailyTotal); */

//........................................
/* 
const dailyTotal = people.reduce((total, person)=>{
    return total;
},100);

console.log(dailyTotal); */

//...............................
/* 
const dailyTotal = people.reduce((total, person)=>{
    return total;
});

console.log(dailyTotal); */