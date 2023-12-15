
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    addColor(1000, '.first', 'red', 'hello world')
    .then((data)=> addColor(3000, '.second', 'blue', data))
    .then((data)=> {
        console.log(data);    
        addColor(2000, '.third', 'green')
    })
    .catch((err)=> console.log(err));
})

function addColor(time, selector, color, data){
    const element = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve(data);
            }, time)
        } else {
            reject(`There is no such elements : "${selector}"`);
        }
    })
}

//............................
/* 
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    addColor(1000, '.first', 'red')
    .then(()=> addColor(3000, '.second', 'blue'))
    .then(()=> addColor(2000, '.third', 'green'))
    .catch((err)=> console.log(err));
})

function addColor(time, selector, color){
    const element = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve();
            }, time)
        } else {
            reject(`There is no such elements : "${selector}"`);
        }
    })
}
 */
//............................
/* 
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    addColor(1000, '.first', 'red')
    .then(()=> addColor(3000, '.second', 'blue'))
    .catch((err)=> console.log(err));
})

function addColor(time, selector, color){
    const element = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve();
            }, time)
        } else {
            reject(`There is no such elements : "${selector}"`);
        }
    })
} */

//.......................................
/* 
const btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{
    addColor(1000, '.first', 'red')
    .then()
    .catch((err)=> console.log(err));
})

function addColor(time, selector, color){
    const element = document.querySelector(selector);
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(()=>{
                element.style.color = color;
                resolve();
            }, time)
        } else {
            reject(`There is no such elements : "${selector}"`);
        }
    })
} */