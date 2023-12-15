const person = {
    name:'krishna',
    age: 30,
    status: 'student'
};

const keys = Object.keys(person);
console.log(keys);

//....................

const values = Object.values(person);
console.log(values);

//......................

const result = Object.entries(person);
console.log(result);

//...............

const newArray = result.map((item)=> console.log(item));

//..................

const newArray1 = result.map((item)=> {
    const [first, second] = item;
    console.log(first, second);

});

//................

const newArray2 = result.map((item)=> {
    const [first, second] = item;
    return first;
});

console.log(newArray2);

//...................

// for of

for(const item of result){
    const [first, second] = item;
    console.log(first, second);
}

//...................

for(const [first, second] of result){
    console.log(first, second);
}
