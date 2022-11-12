// // callback function

// function judge(grade) {
//   switch (true) {
//     case grade == "A":
//       console.log("You got an", grade, ": amazing!");
//       break;
//     case grade == "B":
//       console.log("You got a", grade, ": well done!");
//       break;
//     case grade == "C":
//       console.log("You got a", grade, ": alright.");
//       break;
//     case grade == "D":
//       console.log("You got a", grade, ": hmmm...");
//       break;
//     default:
//       console.log("An", grade, "! What?!");
//   }
// }
// function getGrade(score, callback) {
//   let grade;
//   switch (true) {
//     case score >= 90:
//       grade = "A";
//       break;
//     case score >= 80:
//       console.log(score);
//       grade = "B";
//       break;
//     case score >= 70:
//       grade = "C";
//       break;
//     case score >= 60:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }
// getGrade(85, judge);

// //promises
// let promise = new Promise(function (resolve, reject) {
//   // do something that might take a while
//   // let's just set x instead for this example
//   let x = 10;
//   if (x > 10) {
//     resolve(x); // on success
//   } else {
//     reject("Too low"); // on error
//   }
// });
// promise.then(
//   function (value) {
//     console.log("Success:", value);
//     // return 21;
//     throw "ahmad is throwing some error from resolve_handler"
//   },
//   function (error) {
//     console.log(10);
//     console.log("Error:", error);
//     throw "ahmad is throwing some error from error_handler"
//   }
// )
// .catch((error) => {
//     console.log("error", error);
// })
// .then((data) => {
//     console.log("data", data);
// })



// // async await

// function saySomething(x, delay) {
//     return new Promise(resolve => {
//     setTimeout(() => {
//     resolve("something" + x);
//     }, delay);
//     });
//    }
//    function talk(x, delay) {
//     const words =saySomething(x, delay);
//     console.log(words);
//     return words;
//    }
//    ;
//    console.log(await talk(2, 500));
//    console.log(await talk(4, 2000));
//    console.log(await talk(8 , 700));
   


//EVENT LOOP




