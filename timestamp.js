console.log(new Date());

console.log(Date.now());

console.log(new Date().getTime());

console.log(new Date().valueOf());

setTimeout(()=>{
    console.log(Date.now());
}, 1000);

//.......................

let people = [];
people = [...people, {id: Date.now(), name:'krishna'}];

setTimeout(()=>{
    people = [...people, {id: Date.now(), name:'krishna-2'}];
    console.log(people);
})

//............................

console.log(new Date(1669090272398));

//...........................

const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
console.log(futureDate);
console.log(new Date());

//.............................

const firstDate = new Date();
const secondDate = new Date(2022, 10, 23);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

console.log(firstValue);
console.log(secondValue);

const timeDifference = secondValue - firstValue;
console.log(timeDifference);

const minutes = timeDifference / (1000 * 60);
console.log(minutes);

const hours = timeDifference / (1000 * 60 * 60);
console.log(hours);