// We often deal with "arrays of objects";
// below is an example of an array of objects, where each object represents a person:

const people = [
    {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
    {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
    {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
    {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
    {name: {first: "Louis", last: "Reasoner"}, age: 21},
    {name: {first: "Shahan", middle: "Haig", last: "Krakirian"}, age: 21},
    {name: {first: "Manny", last: "Dheer"}, age: 23}
    
];

// Exercise 5.0
// ------------
// Add the object representing yourself to this array of people (if your
// `name` key does not have the same "shape" as the ones above, make sure you
// change it to look like these).
people.push({name: {first: "Manny", last: "Dheer"}, age: 23});


//-------------------------------------------------

// Exercise 5.1
// ------------
// Write a function that returns the average age of the `people` array.

function avgAge(peopleArr) {
    let sumAge = 0;
    let countPpl = peopleArr.length
    
        peopleArr.forEach(person => {
          sumAge += person.age
       
      
        });
        return Math.floor(sumAge/countPpl);
       
    }
    
    
    console.log(`Average age is ${avgAge(people)}.`);
    
    

//-------------------------------------------------

// Exercise 5.2
// ------------
// Write a function that, when passed an array of *people* (person objects) as
// an argument, returns an array of their full names (each full name is a string).
// Can you make use of your `fullName` function here?

function fullName(peopleArr) {
    // Your code here
    let arrayFullname = [];
    let tempName;
    peopleArr.forEach(person => {
        tempName = person.name.first + ' '+ person.name.middle + ' ' + person.name.last;
        //once you get a full name in var, then push it to array. 
        arrayFullname.push(tempName);
    });
return arrayFullname;
}

console.log(fullName(people)); 

//-------------------------------------------------

// Exercise 5.3
// ------------
// Write a function that, when given *people* and an *age* as arguments,
// returns an array of just the people that are older than the specified age.. 
function olderPeople(peopleArr, age) {
    // Your code here
    //DO a foreach that will check each array of object.
    //if statement that will compare ages
    // if greater, push into new array. 

    let olderArray = []

     peopleArr.forEach(person => {
       if (person.age > age) {
         olderArray.push(person.name);
       }
    });
    
 return olderArray;
}

console.log(olderPeople(people, 26));
