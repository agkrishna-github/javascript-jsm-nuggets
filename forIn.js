// for objects

const person = {
    name: 'krishna',
    age: 30,
    status: 'student'
}

for(const propertyName in person){
    console.log(`${propertyName} ${person[propertyName]}`);

}

// for arrays

const pets = ["pet-1", "pet-2", "pet-3"];

for(const stringName of pets){
    console.log(`${stringName}`);
    console.log(`${stringName} ${pets}`);
    console.log(`${stringName} ${pets} ${pets[stringName]}`);
    console.log(`${stringName} ${pets} ${pets[stringName]} ${stringName[pets]}`);
}

