// // 1. What will be outputted to the console in this instance?
// const q = '1';
// let answer;
// switch (q) {
//  case '1':
//  answer = "one";
//  break;
//  case 1:
//  answer = 1;
//  break;
//  case 2:
//  answer = "this is the one";
//  break;
//  default:
//  answer = "not working";
// }
// console.log(answer);

// 2. What will be outputted to the console in this instance?
const q = 1;
let answer;
switch (q) {
  case "1":
    answer = "one";
    break;
  case 1:
    answer = 1;
    break;
  case 2:
    answer = "this is the one";
    break;
  default:
    answer = "not working";
}
console.log(answer);

// 3. What will be outputted to the console in this instance?
let login = false;
let outputHolder = "";
let userOkay = login ? (outputHolder = "logout") : (outputHolder = "login");
console.log(userOkay);

// 4. What will be outputted to the console in this instance?
const userNames = ["Mike", "John", "Larry"];
const userInput = "John";
let htmlOutput = "";
if (userNames.indexOf(userInput) > -1) {
  htmlOutput = "Welcome, that is a user";
} else {
  htmlOutput = "Denied, not a user ";
}
console.log(htmlOutput + ": " + userInput);

// 5. What will be outputted to the console in this instance?
let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
  output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
  output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
  output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
  output = "Dinner time";
} else if (myTime >= 22) {
  output = "Time to go to sleep";
} else {
  output = "You should be sleeping";
}
console.log(output);


// 6. What will be outputted to the console in this instance?
let a = 5;
let b = 10;
let c = 20;
let d = 30;
console.log(a > b || b > a);
console.log(a > b && b > a);
console.log(d > b || b > a);
console.log(d > b && b > a);

