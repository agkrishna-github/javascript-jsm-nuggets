const state = {
    loading: true,
    name:'',
    job:''
};

function updateState(key, value){
    state[key] = value
}

updateState('name', 'krishna');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', []);
updateState('name', 'krishna-2');

console.log(state);


//................................
/*
 let appState = 'loading';
appState = 'error';
const keyName = 'computer';

const app = {
    [appState] : true
};

app[keyName] = 'apple';

console.log(app); */

//................................
/* 
let appState = 'loading';
appState = 'error';

const app = {
    [appState] : true
}

console.log(app);
 */
//...........................
/* let appState = 'loading';

const app = {
    [appState] : true
}

console.log(app); */

//...................................
/*

// dot notation

const person = {
    name: 'krishna',
};

console.log(person.name);
person.age = 25;
console.log(person);



// square bracket notation

const items = {
    'featured-items': ['item-1', 'item-2']
}

console.log(items['featured-items']);
console.log(person['name']); */

//..................................



