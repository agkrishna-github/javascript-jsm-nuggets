const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo)=>{
        const {language} = repo;
        // if(language){

        //     if(total[language]){
        //         total[language] = total[language] + 1
        //     } else {
        //         total[language] = 1
        //     }   
        // }


        if(language){
            total[language] = total[language] + 1 || 1;
        }

            return total;
        },{})
        
        console.log(newData);
}

fetchRepos();

//...........................

/* const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    const newData = data.reduce((total, repo)=>{
        const {language} = repo;

        if(total[language]){
            total[language] = total[language] + 1
        } else {
            total[language] = 1
        }

        return total;
    },{})

    console.log(newData);
}

fetchRepos(); */

//....................................
/* 
const url = 'https://api.github.com/users/john-smilga/repos?per_page=100';

const fetchRepos = async () =>{
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

fetchRepos();

 */
//..............................
/* 
const cart = [
    {
        title:'samsung s7',
        price: 5000,
        amount: 1,
    },
    {
        title:'google gg',
        price: 6000.99,
        amount: 2,
    },
    {
        title:'nokia a5',
        price: 7000.99,
        amount: 4,
    },
    {
        title:'xiomi',
        price: 4000.99,
        amount: 3,
    },
];

let {totalItem, cartTotal} = cart.reduce((total, cartItem)=>{
    const { amount, price} = cartItem;

    total.totalItem += amount;

    total.cartTotal += amount * price;

    return total;
},{
    totalItem: 0,
    cartTotal: 0,
})

cartTotal = parseInt(cartTotal.toFixed(1));

console.log(totalItem, cartTotal); */

//.................................
/* 
let total = cart.reduce((total, cartItem)=>{
    const { amount, price} = cartItem;

    total.totalItem += amount;

    total.cartTotal += amount * price;

    return total;
},{
    totalItem: 0,
    cartTotal: 0,
})

console.log(total)
 */
//.....................................
/* 
let total = cart.reduce((total, cartItem)=>{
    console.log(cartItem);
    console.log(total);
    return total;
},{
    totalItem: 0,
    cartTotal: 0,
})

console.log(total)
 */

//.....................................
/* 
let total = cart.reduce((total, cartItem)=>{
    return total;
},{
    totalItem: 0,
    cartTotal: 0,
})

console.log(total)

 */



