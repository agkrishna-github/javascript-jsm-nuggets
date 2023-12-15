
const products = [
    { 
        title:'telangana',
        company: 'tspsc',
    },
    { 
        title:'andhra pradesh',
        company: 'appsc',
    },
    { 
        title:'karnataka',
        company: 'kspsc',
    },
    { 
        title:'tamilnadu',
        company: 'tspsc',
    },
];


const result = ['all', ...new Set(products.map((item)=> item.company))]
console.log(result);


//....................

/* 
const companies = products.map((item)=>{
    return item.company;
    // console.log(item)
})

console.log(companies);

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies);

const finalCompanies = [...uniqueCompanies];
console.log(finalCompanies);

const finalCompanies2 = ['all', ...uniqueCompanies];
console.log(finalCompanies2); */


//..........................
/* 

const unique = new Set();

const random = 'third'

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add('first');
unique.add(4);

const isValue = unique.has(4);
console.log(isValue);

console.log(unique); */

//......................
/* 
const unique = new Set();

const random = 'third'

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add('first');
unique.add(4);

const result = unique.clear();
console.log(result);

console.log(unique); */

//...................
/* 
const random = 'third'

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add('first');
unique.add(4);

const result = unique.delete('third');
console.log(result);

const resultA = unique.delete('five');
console.log(resultA);

console.log(unique); */

//....................
/* 
const unique = new Set();

const random = 'third'

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add('first');
unique.add(4);

console.log(unique); */

//...................

/* 
const unique = new Set();

unique.add('first');
unique.add('second');
unique.add('third');
unique.add('first');
unique.add('first');
unique.add(4);

console.log(unique); */

//............................

/* 
const unique = new Set();

unique.add('first');
unique.add('first');
unique.add('first');
unique.add('first');

console.log(unique);
 */
//........................

/* 
const unique = new Set();
console.log(unique); */