// //       Example 1

// function judge(grade) {                             //function to be callback
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
// function getGrade(score, callback) {    //in parameter callback is comes into action
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
// getGrade(85, judge);     //judge function as a parameter here   //calling here as a main function





// Exercise 2

function greet(fullName) {
  console.log(`Hi, how are you ${fullName[0]} ${fullName[1]}`)
}

var anotherFunction = (Name, callback) => {
  var fullNameArray = Name.split(" ");
  callback(fullNameArray);
}

anotherFunction("Ahmad jajja", greet);