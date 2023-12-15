const person = {name: 'krishna', joh: 'developer'};

const newPerson = {...person, city:'hyderabad', name:'krishna-ag'};

console.log(person);
console.log(newPerson);

//...........................

/* const person = {name: 'krishna', joh: 'developer'};

const newPerson = {...person, city:'hyderabad'};

console.log(person);
console.log(newPerson);
 */
//....................................
/* 
const person = {name: 'krishna', joh: 'developer'};

const newPerson = {...person};

console.log(person);
console.log(newPerson); */


//....................................
/* 
const krishna = 'krishna';

const boys = ['krishna', 'krishna-1', 'krishna-2'];
const girls = ['radha', 'radha-2'];

const bestFriend = 'geetha';

const friends = [...boys, ...girls, bestFriend];
console.log(friends);

const newFriends = [...friends];
newFriends[0] = 'seetha';

console.log(friends);
console.log(newFriends); */

//........................................

/* const krishna = 'krishna';

const boys = ['krishna', 'krishna-1', 'krishna-2'];
const girls = ['radha', 'radha-2'];

const bestFriend = 'geetha';

const friends = [...boys, ...girls, bestFriend];
console.log(friends); */

//...................................
/* const krishna = 'krishna';

const boys = ['krishna', 'krishna-1', 'krishna-2'];
const girls = ['radha', 'radha-2'];

const bestFriend = 'geetha';

const friends = [boys, girls, bestFriend];
console.log(friends); */


//...........

/* const krishnas = 'krishnas';

const letters = [...krishnas];
console.log(letters); */