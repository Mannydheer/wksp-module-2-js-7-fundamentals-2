# 2.7.2 - JS - Object Methods

---

## Situation

You have an object that you _need_ to iterate over.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

If I just want the names, of the objects. 
```

---

## [Object.keys()](https://www.geeksforgeeks.org/object-keys-javascript/)

```js

If I pass the upper object to object.keys, it will return an array of the keys

// 
Object.keys(friendsAge).
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

const friendNames = Object.keys(friendsAge);

//
Object.keys(friendsAge).forEach(friend => {
    console.log(friendsAge[friend]);
)};

```

Now I am interested in the average age of my friends.

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }
```

---

## [Object.values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```js
// Example - I need to display just the names in a list
const friendsAge = { 'Kevin': 32, 'Rick': 60, 'Morty': 14, 'Jerry': 35 }

-pulling out all of the values of the objects and not just the keys. 
//
const age = Object.values(friendsAge);
]
```

---
```js
//NOW IF I WANT TO SORT THE ARRAY BY AGE OR BY NAME.

a - b, compares to objects. 

const friendsAge = [
    
{name: 'Kevin', age: 32}
{name:'Rick',    age: 60}
{name:'Morty',  age: 14} 
{name:'Jerry', age: 35 }
]

friends.sort((a, b) => a.age- b.age);
```