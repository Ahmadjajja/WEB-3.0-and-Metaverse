// // for of loop

// let names = ["Cantal", "John", "Maxima", "Bobbi", "Jair"];
// for (let name of names) {
//   console.log(name);
// }

// // for in loop

// console.log("\n");

// let car = {
//   model: "Golf",
//   make: "Volkswagen",
//   year: 1999,
//   color: "black",
// };
// for (let prop in car) {
//   console.log(car[prop]);
// }

// // rest and spread operators

// let arr = [1, 2, 3, 4];

// let myFunc = (x, y, ...prr) => {
//   //rest operator
//   console.log(x);
//   console.log(y);
//   console.log(prr);
// };

// myFunc(3, 5, 6, 7, 8);

//spread operator

// function addTwoNumbers(x, y) {
//   console.log(x + y);
// }
// let arr1 = [1, 5, 9, 7];
// addTwoNumbers(...arr1);
// console.log(...arr1);

function someFunction(param1, ...param2) {
  console.log(param1, param2);
}
someFunction("hi", "there!", "How are you?");
