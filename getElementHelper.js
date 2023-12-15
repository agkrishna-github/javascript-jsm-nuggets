const heading = document.querySelector('.heading');
console.log(heading);

const listItems = document.querySelectorAll('.list-item');
console.log(listItems);

const getElement = (selector, isList) => {

   const el = isList ? [...document.querySelectorAll(selector)]
                     : document.querySelector(selector);

    if((!isList && el) || (isList && !el.length < 1)) return el;
                    
   throw new Error(`check the selector - ${selector}`);
}

console.log(getElement('.list-item', true));

//.............................
/* 
const getElement = (selector, isList) => {

    if(isList){
        const el = [...document.querySelectorAll(selector)];
        if(el.length < 1){
            throw new Error(`check the selector - ${selector}`)
        }

        return el;
    }

   const el = document.querySelector(selector);
   if(el) return el;
   throw new Error(`check the selector - ${selector}`);
}

console.log(getElement('.list-item', true)); */

//....................................
/* 
const getElement = (selector) => {
   const el = document.querySelector(selector);
   if(el) return el;
   throw new Error(`check the selector - ${selector}`);
}

console.log(getElement('.heading')); */