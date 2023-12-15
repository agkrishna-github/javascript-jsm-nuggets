const people = [
    {title: 'Krishna'},
    {title: 'Krishna-1'},
    {title: 'Krishna-2'},
    {title: 'Krishna-3'},
];

const text = 'a';

const filteredProducts = people.filter((person)=> person.title.toLowerCase().includes(text));
console.log(filteredProducts);

//...................

/* const person = {
    title: 'Krishna-1',
};

const result = person.title.includes('kri');
console.log(result);
 */
//................................
/* const person = {
    title: 'Krishna-1',
};

const result = person.title.includes('Kri');
console.log(result); */



//..............................
/* 
const firstName = 'krishna';

const result = firstName.includes("K");
console.log(result); */

//...........................
/* 
const firstName = 'krishna';

const result = firstName.includes("K");
console.log(result); */

//.........................
/* 
const firstName = 'krishna';

const result = firstName.includes("Pr");
console.log(result); */

//.......................
/* 
const firstName = 'krishna';

const result = firstName.includes("r");
console.log(result); */

//...................
/* 
const firstName = 'krishna';

const result = firstName.includes("kr");
console.log(result); */