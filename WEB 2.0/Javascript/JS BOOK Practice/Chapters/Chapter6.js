// // 1. What value is output into the console?

// let val = 10;
// function tester(val){
//  val += 10;          // 20 30 40 50 60 70 80 90 100
//  if(val < 100){
//  return tester(val);
//  }
//  return val;
// }
// console.log(tester(val));   // 100

//                                 // Self Invoke functions


// // 2. What will be output into the console by the below code?
// let testFunction = function(){
//  console.log("Hello");
// }();
// // testFunction();    //Error happen



// // 3. What will be output to the console?
// (function () {
//  console.log("Welcome");
// })();
// (function () {
//  let firstName = "Laurence";
// })();
// let result = (function () {
//  let firstName = "Laurence";
//  return firstName;
// })();
// console.log(result);
// (function (firstName) {
//  console.log("My Name is " + firstName);
// })("Laurence");

// // 4. What will be output to the console?
// let test2 = (num) => num + 5;
// console.log(test2(14));


// // 5. What will be output to the console?
// function addFive1(num) {       //simple function
// return num + 2;
// };
// let addFive2 = (num) => num + 2;      //arrow function
// console.log(addFive2(14));




//                     // spread and rest operators


// let spread = ["so", "much", "fun"];

// let anotherArray = ["hello", ...spread , "world"]    //spread operator used here
// console.log("spread : ",spread);
// console.log("...spread : ",...spread);
// console.log("anotherArray : ", anotherArray);


// function something( ...y) {   // rest operator used here
//     return  y;
// }
// console.log(something(3, 4, 5, 6, 7));


//recursive function
function getRecursive(nr) {
    console.log(nr);
    if (nr > 0) {
        getRecursive(--nr);
    }
   }
   getRecursive(3);
   

//    another function                  // very interesting example for understanding recursive functions
function logRecursive(nr) {
    console.log("Started function:", nr);
    if (nr > 0) {
    logRecursive(nr - 1);
    } else {
    console.log("done with recursion");
    }  
    console.log("Ended function:", nr);
   }
   logRecursive(3);


