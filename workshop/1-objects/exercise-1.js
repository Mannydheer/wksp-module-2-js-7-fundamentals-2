// Exercise 1.0 - done
// ------------
// Create an object that represents *you*.
// It should contain your first name, last name, age and hometown.

// It should look something like this
// var myObject = {
//     name: {
//         first: 'Scott',
//         last: 'Morin',
//     },
//     age: '49',
//     city: 'Montreal',
//     siblings: 1,
//     petName: 'Mia',
//     monthOfBirth: 'July'
// }


var mannyObject = {
    name: {
       first: "Manny",
       last: "Dheer",
    },
    age: '23',
    city: 'Montreal',
    siblings: '1',
    dateBirth: '1996',
    occupation: 'coder',
    pet: 'dog',
}




// A) console.log() your object.
console.log(mannyObject);
// B) console.log() a few of the values in the object.
console.log(mannyObject.name, mannyObject.age);

//-------------------------------------------------

// Exercise 1.1 - DONE
// ------------
// Add three more key/value pairs to your object that represent other attributes
// of yourself. Ideas include (but are not limited to):
//     - Favorite TV Shows/Movies/Sports/Activities etc.
//     - Occupation
//     - Date of Birth
//     - Pets (number of pets, names of pets, etc.)

// HINT: You can just modify the object that you created before.

//-------------------------------------------------

// Exercise 1.2
// ------------
// Look up your favorite movie on IMDB, and make an object that represents some
// aspects of that movie, *e.g.*:
//     - Title
//     - Director
//     - Year released
//     - Rating
//     - Actors

// HINT: Most movies have multiple actors. What data-structure do we use to
// represent a collection of similar things?

var favoriteMovie = {
    title: "Kal ho naa ho",
    director: "Nikkhil",
    year: '2003',
    country: 'India',
    Rating: '8'

}


//-------------------------------------------------

// Exercise 1.3 - DONE
// ------------
// Fix the attempts to access values in the `person` object:

const key = "name";
const person = {
    name: "Alyssa P. Hacker",
    age: 26,
    hometown: "somewhere"
};

person.age;    // => 26
person.name;     // => "Alyssa P. Hacker"


//-------------------------------------------------

// Exercise 1.4
// ------------
// Write a function `fullName` that takes a person object as an argument, and
// returns that person's full name as a string. By *person object*, we mean an
// object that has the structure of the object you created to represent
// yourself above.

// Example
const alyssa = {
    name: {
        first: "Alyssa",
        middle: "P.",
        last: "Hacker"
    },
    age: 26,
};

function fullName(person) {
    // Your code here
    return alyssa.name.first + ' ' + alyssa.name.middle + ' ' + alyssa.name.last;

}

console.log(fullName(alyssa)); // => "Alyssa P. Hacker"

// Exercise 1.5
// ------------
// What happens if you pass a person object to `fullName` that doesn't have a
// middle name?

// returns undefined

// Your `fullName` function should work correctly regardless of whether or not
// the person has a middle name -- if it doesn't produce the output shown above
// when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
// it does.

const rick = {
    name: {
        first: "Rick",
        last: "Sanchez"
    },
    age: 66,
};


function betterFullName(person) {
    // Your code here
    return rick.name.first + (rick.name.middle || ' ') + rick.name.last;


}

console.log(betterFullName(rick)); // => "Rick Sanchez"