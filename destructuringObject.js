const krish = {
    first: 'krish',
    last: 'gk',
    city: 'hyd',
    siblings: {
        brother: 'mahesh',
    },
};

    const brother = 'chiru';

const { first, last, city, siblings:{brother: favBro} } = krish;
console.log(first, last, city, favBro, brother);

function printPerson({first, last, city, siblings:{brother}}){
    console.log(first, last, city, brother);
}

printPerson(krish);

//.................................
/* 
const krish = {
    first: 'krish',
    last: 'gk',
    city: 'hyd',
    siblings: {
        brother: 'mahesh',
    },
};

    const brother = 'chiru';

const { first, last, city, siblings:{brother: favBro} } = krish;
console.log(first, last, city, favBro, brother);

function printPerson(person){
    const {first, last} = person;
    console.log(first, last);
}

printPerson(krish); */

//......................................
/* 
const krish = {
    first: 'krish',
    last: 'gk',
    city: 'hyd',
    siblings: {
        brother: 'mahesh',
    },
};

    const brother = 'chiru';

const { first, last, city, siblings:{brother: favBro} } = krish;
console.log(first, last, city, favBro, brother);

function printPerson(person){
    console.log(person.first);
}

printPerson(krish); */

//...................................

/* const krish = {
    first: 'krish',
    last: 'gk',
    city: 'hyd',
    siblings: {
        brother: 'mahesh',
    },
};

    const brother = 'chiru';

const { first, last, city, siblings:{brother: favBro} } = krish;
console.log(first, last, city, favBro, brother); */

//.................................
/* 
const krish = {
    first: 'krish',
    last: 'gk',
    city: 'hyd',
    siblings: {
        brother: 'mahesh',
    },
};

const { first, last, city, siblings:{brother: favBro} } = krish;
console.log(first, last, city, favBro);
 */
//.............................
/* 
const krish = {
    first: 'krish',
    last: 'gk',
    city: 'hyd',
    siblings: {
        brother: 'mahesh',
    },
};

const { first, last, city } = krish;
console.log(first, last, city); */

//.........................
/* 
const firstName = krish.first;
const lastName = krish.last;
const bro = krish.siblings.brother;

console.log(firstName, lastName, bro); */