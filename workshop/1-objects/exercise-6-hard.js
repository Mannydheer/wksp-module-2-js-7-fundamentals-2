// Exercise 6
// -------------------

var favoriteDessert = {
    scott: 'brownies',
    fred: 'tiramisu',
    lisa: 'chocolate cake',
    riley: 'ice-cream',
    sunny: 'cheese cake',
    john: 'ice-cream',
    beth: 'cheese cake',
    summer: 'ice-cream',
    morty: 'apple pie',
    rick: 'brownies',
    andrew: 'cheese cake',
    jerry: 'rhubard pie',
    'jean-luc': 'cheese cake',
    tiffany: 'waffles',
    melissa: 'profiteroles',
};


const desserts = Object.values(favoriteDessert).sort();
const countDesserts = {};
const rankedDesserts = [];

desserts.forEach(currentDessert => {
    let count = 0;
    desserts.forEach(comparedDessert => {
        if (currentDessert === comparedDessert) {
            count += 1;
        }
    });
    //in the count desserts object that we had declared. currentDessert represents the desserts. we are assigning the count tot hat dessert.
    //Line below is like we are creating a key of within the object with the name currentDessert?//
    //double check!!! 
    countDesserts[currentDessert] = count;

});

Object.values(countDesserts).forEach((dessertCount, id) => {
    const dessertName = Object.keys(countDesserts)[id];
    rankedDesserts.push({
        dessertName: dessertName,
        dessertCount: dessertCount
    });
});


rankedDesserts.sort((a, b) => a.dessertCount < b.dessertCount ? 1 : -1);
console.log('--------------------------------------------');
console.log('A) Dessert ranked from most to least popular.');
console.log('--------------------------------------------');
rankedDesserts.forEach((item, id) => {
    console.log(`  ${id + 1}. ${item.dessertName}`);
});
console.log('--------------------------------------------');
// 

// B)
// The names of those that said the same desserts. Output the list in
// order by dessert.
// e.g. - brownies: <NAME>, <NAME>, ...
//      - ice-cream: <NAME>, <NAME>, <NAME>, ...
//      ...