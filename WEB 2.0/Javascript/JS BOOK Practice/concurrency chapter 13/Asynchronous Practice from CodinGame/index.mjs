// 01 What is asynchronous in JavaScript


// //set Time out practice
// setTimeout(function() {
//     console.log('I am an asynchronous message');
// });

// console.log('I am a synchronous message');

// //Asynchronous code is always executed after the main thread
//         //here main thread is code except asynchronous code.

//         setTimeout(function() {
//             console.log('I am an asynchronous message');
//         }); // You can omit the 0

//         console.log('Test 1');

//         for (let i = 0; i < 10000; ++i) {
//             doSomeStuff();         //can we hoist simple function before its definition and i think arrow function does'nt hoisted ?
//         }

//         console.log('Test 2');

//         // The 'I am an asynchronous message' will be displayed when the main thread reach here

//         function doSomeStuff() {
//             return 1 + 1;
//         }

// // Asynchronous code using setInterval

// let counter = 0;

// let timer = setInterval(function() {
//     console.log('I am an asynchronous message');

//     counter += 1;

//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log('I am a synchronous message');

// // Read a file in NodeJS

// let fs = require("fs");        //error in this code;

// fs.readFile("test.txt", "utf8", function (error, data) {
//   if (error) {
//     throw error;
//   }

//   console.log("Asynchronous message. Content of test.txt:", data);
// });

// console.log("Synchronous message");






// 02 Why do we need asynchronous?
