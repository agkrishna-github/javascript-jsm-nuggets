const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    console.log('Hello world');
})


//................................
/* 
function makeUpperCase(value){
    console.log(value.toUpperCase())
}

function reverseString(value){
    console.log(value.split('').reverse().join(''))
};

function handleName(name, cb){
    const fullName = `${name} a g`;
    cb(fullName);
}

handleName('krishna', function(value){
    console.log(value);
})
 */
//...................................
/* 
function makeUpperCase(value){
    console.log(value.toUpperCase())
}

function reverseString(value){
    console.log(value.split('').reverse().join(''))
};

function handleName(name, cb){
    const fullName = `${name} a g`;
    cb(fullName);
}

handleName('krishna', makeUpperCase);
handleName('krishna', reverseString); */

//...................................
/* 
function makeUpperCase(value){
    console.log(value.toUpperCase())
}

function handleName(name, cb){
    const fullName = `${name} a g`;
    cb(fullName);
    cb(fullName);
    cb(fullName);
    cb(fullName);
    cb(fullName);
    cb(fullName);
}

handleName('krishna', makeUpperCase); */

//...................................
/* 
function makeUpperCase(value){
    console.log(value.toUpperCase())
}

function handleName(name, cb){
    const fullName = `${name} a g`;
    cb(fullName);
}

handleName('krishna', makeUpperCase); */

//....................................
/* 
function makeUpperCase(value){
    console.log(value.toUpperCase())
}

makeUpperCase("krishna"); */