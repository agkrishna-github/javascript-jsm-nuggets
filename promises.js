const value = 2;

const promise = new Promise((resolve, reject)=>{
    const random = Math.floor(Math.random() * 3)
    console.log(random);
    if(random === value){
        resolve('you guessed right');
    }else {
        reject('you are wrong')
    }
})

console.log(promise);

promise.then((data)=> console.log(data)).catch((err)=> console.log(err));

//.....................

/* const promise = new Promise((resolve, reject)=>{
    reject('there is an error');
})

console.log(promise);

promise.then((data)=> console.log(data))
.catch((err)=> console.log(err)); */

//.................................
/* 
const promise = new Promise((resolve, reject)=>{
    resolve([1,2,3,4]);
})

console.log(promise);

promise.then((data)=> console.log(data)); */

//............................
/* 
const promise = new Promise((resolve, reject)=>{
    resolve({name: 'krishna'});
})

console.log(promise);

promise.then((data)=> console.log(data)); */

//..........................
/* 
const promise = new Promise((resolve, reject)=>{
    resolve('hello world');
})

console.log(promise);

promise.then((data)=> console.log(data)); */

//................................
/* 
const promise = new Promise((resolve, reject)=>{
    reject('there is an error');
})

console.log(promise);
 */
//.................................
/* 
const promise = new Promise((resolve, reject)=>{
    reject();
})

console.log(promise); */

//...................................

/* const promise = new Promise((resolve, reject)=>{
    resolve('hello world');
})

console.log(promise); */

//..................................
/* 
const promise = new Promise((resolve, reject)=>{
    resolve();
})

console.log(promise); */

//...............................
/* 
const promise = new Promise((resolve, reject)=>{})

console.log(promise); */