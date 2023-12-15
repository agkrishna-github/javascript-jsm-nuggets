const menu = [
    {
        name: 'pancakes',
        category: 'breakfast'
    },
    {
        name: 'burger',
        category: 'lunch'
    },
    {
        name: 'steak',
        category: 'dinner'
    },
    {
        name: 'bacon',
        category: 'breakfast'
    },
    {
        name: 'eggs',
        category: 'breakfast'
    },
    {
        name: 'biryani',
        category: 'lunch'
    },
];

const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('#result');
result.innerHTML = categories.map((item)=> {
    return `<button>${item}</button>`
}).join('');

//.............................
/* 
const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories);

const result = document.querySelector('#result');
result.innerHTML = categories.map((item)=> {
    return `<button>${item}</button>`
}); */


//............................
/* 
const categories = ['all', ...new Set(menu.map((item) => item.category))];
console.log(categories); */

//............................
/* 
const categories = [...new Set(menu.map((item) => item.category))];
console.log(categories);
 */

//.......................................
/* 
const categories = new Set(menu.map((item) => item.category));
console.log(categories);
 */
//...............................

/* 
const categories = menu.map((item) => item.category);
console.log(categories); */