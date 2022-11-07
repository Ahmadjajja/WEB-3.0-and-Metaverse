//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Seeing the World: Think of at least five places in the world you’d like to visit.

//portion 1
//Seeing the World: Think of at least five places in the world you’d like to visit.

const countries = ["Pakistan", "India", "Afghanistan", "Bangledesh", "Srilanka"];

//portion 2
//Print your array in its original order

console.log("Array in origional order", countries);



//portion 3
//Print your array in alphabetical order without modifying the actual list.

let alphabeticalOrderedCountries = [];

for (let index = 0; index < countries.length; index++) {
    // const element = countries[index];
    alphabeticalOrderedCountries.push(countries[index])
}

alphabeticalOrderedCountries.sort(function (a, b) {
  return a.localeCompare(b)
});

console.log("alphabeticalOrderedCountries", alphabeticalOrderedCountries);

//portion 4
//Print your array in its original order

console.log("Array is still in its origional order", countries);

//portion 5
//Show that your array is still in its original order by printing it.

let alphabeticalReverseOrderedCountries = [];

for (let index = alphabeticalOrderedCountries.length - 1; index >= 0; index--) {
    alphabeticalReverseOrderedCountries.push(alphabeticalOrderedCountries[index]);
}

console.log("alphabeticalReverseOrderedCountries", alphabeticalReverseOrderedCountries)

//portion 6
//Print your array in its original order

console.log("Array is still in its origional order", countries);

for (let index = countries.length - 1; index >= 0; index--) {
    alphabeticalReverseOrderedCountries.push(alphabeticalOrderedCountries[index]);
}



//portion 7
//Reverse the order of your list. Print the array to show that its order has changed.

function reverseArray(arr) {

    return arr.slice().reverse();
  
  }
  
console.log("Reverse the order of your list. Print the array to show that its order has changed.",reverseArray(countries));

//portion 8
//Reverse the order of your list. Print the array to show that its order has changed.

console.log("origional array",countries);

//portion 9
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

alphabeticalOrderedCountries = []

for (let index = 0; index < countries.length; index++) {
    // const element = countries[index];
    alphabeticalOrderedCountries.push(countries[index])
}

alphabeticalOrderedCountries.sort(function (a, b) {
  return a.localeCompare(b)
});

console.log("Order has been changed of alphabeticalOrderedCountries", alphabeticalOrderedCountries);

//portion 10
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

alphabeticalReverseOrderedCountries = []

for (let index = alphabeticalOrderedCountries.length - 1; index >= 0; index--) {
    alphabeticalReverseOrderedCountries.push(alphabeticalOrderedCountries[index]);
}

console.log("alphabeticalReverseOrderedCountries", alphabeticalReverseOrderedCountries)


