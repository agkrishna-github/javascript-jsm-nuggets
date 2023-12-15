const items = Array.from({ length: 120}, (_, index)=>{
    return index;
});

const itemsPerPage = 14;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages}, (_, index) => {
    const start = index * itemsPerPage;
    const tempItems = items.slice(start, start + itemsPerPage);
    return tempItems;
})

console.log(newItems);

//..............................
/* 
const items = Array.from({ length: 120}, (_, index)=>{
    return index;
});
console.log(items);
 */
//..............................
/* 
const items = Array.from({ length: 120});
console.log(items);
 */

//......................................
/* 
const text = document.querySelectorAll('.text');
console.log(text);


const newText = Array.from(text).find((item)=> item.textContent === "person");
console.log(newText);
 */
//.................................

/* const text = document.querySelectorAll('.text');
console.log(text);


const newText = Array.from(text);
console.log(newText);
 */

//...........................
/* 
const nameA = "krishna";

console.log(Array.from(nameA)); */

//............................

/* const nameA = "krishna";

console.log(Array.from(nameA)); */