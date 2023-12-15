const users = [
    { id: 1, name: 'krishna'},
    { id: 2, name: 'krishna-2'},
    { id: 3, name: 'krishna-3'},
];

const articles = [
    { userId: 1, articles: ['one', 'two', 'three'] },
    { userId: 2, articles: ['four', 'five'] },
    { userId: 3, articles: ['six', 'seven', 'eight', 'nine'] },
];

const getData = async () => {
    try {
            const user = await getUser('krishna')
            const articles = await getArticles(user.id);
            console.log(articles);
        
    } catch (error) {
        console.log(error);
    }
}

getData();

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.name === name)

        if(user){
            return resolve(user)
        }else {
            reject(`No such user with name : ${name}`)
        }      
    })
}

function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user) => user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject('Wrong Id')
        }
    }) 
}

//................................
/* 
const getData = async () => {
    const user = await getUser('krishna')
    if(user){
        const articles = await getArticles(user.id);
        console.log(articles);
    }
    console.log(user);
}

getData();

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.name === name)

        if(user){
            return resolve(user)
        }else {
            reject(`No such user with name : ${name}`)
        }      
    })
}

function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user) => user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject('Wrong Id')
        }
    }) 
} */

//..............................
/* 
const getData = async () => {
    const user = await getUser('krishna')
    console.log(user);
}

getData();

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.name === name)

        if(user){
            return resolve(user)
        }else {
            reject(`No such user with name : ${name}`)
        }      
    })
}

function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user) => user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject('Wrong Id')
        }
    })

    
}
 */
//.......................................
/* 

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.name === name)
        
        if(user){
            return resolve(user)
        }else {
            reject(`No such user with name : ${name}`)
        }      
    })
}

getUser('krishna-2')
.then((user)=> getArticles(user.id))
.then((articles) => console.log(articles))
.catch((err)=> console.log(err))

function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user) => user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject('Wrong Id')
        }
    })

    
}
 */
//........................................
/* 
getUser('krishna-2')
.then((user)=> console.log(user))
.catch((err)=> console.log(err))

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=> user.name === name)

        if(user){
            return resolve(user)
        }else {
            reject(`No such user with name : ${name}`)
        }      
    })
}

function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user) => user.userId === userId)

        if(userArticles){
            return resolve(userArticles.articles)
        }else{
            reject('Wrong Id')
        }
    })

    
}

 */
//...................

/* 
const example = async () => {
    return 'hello there'
}

async function someFunc(){
    const result = await example()
    console.log(result);
}

someFunc(); */


//...................................

/* const example = async () => {
    return 'hello there'
}

console.log(example()); */

