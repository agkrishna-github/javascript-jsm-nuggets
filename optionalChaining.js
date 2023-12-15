const people = [
    {
        name: 'krishna',
        location: { street: '123 main street',
        timezone: { offset: '+7:00'} },
    },
    { name: 'radha', location: { street: '123 bn street'} },
    {
        name: 'satya',
        location: { street: '123 apple street',
        timezone: { offset: '+9:00'} },
    }
];

people.forEach((person)=>{
   console.log(person?.location?.timezone?.offset || 'hello world');
});


//................................
/* 
people.forEach((person)=>{
   console.log(person?.location?.timezone?.offset);
});
 */
//.....................

/* people.forEach((person)=>{
    console.log(person.location && 
                person.location.timezone && 
                person.location.timezone.offset
                );

    // console.log(person.location.timezone.offset);
    // console.log(person.name);
    // console.log(person);
}) */