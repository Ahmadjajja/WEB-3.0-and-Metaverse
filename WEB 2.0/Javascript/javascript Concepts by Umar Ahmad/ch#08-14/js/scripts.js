// Ch # 8
// myButton.onclick = function () {

//     var message = "Good day ";
//     var name = "Umar";
//     var banger = "!";

//     alert(message + name + "!");

// }





// ----------------------------
// Ch # 9-10
// myButton.onclick = function () {

//     var fName = prompt("Your Name?");

//     // alert("Good Morning " + fName);

//     if (fName !== "Umar") {

//         alert("Good Morning " + fName);

//     }

// }




// ----------------------------
// Ch # 11
// myButton.onclick = function () {

//     var num1 = 16;
//     var num2 = 15;

//     if (num1 <= num2) {
//         alert("Yes, your condition is true")
//     }

// }


// ----------------------------
// Ch # 12-13
// myButton.onclick = function () {

//     var age = prompt( "Your age?" );
//     var weight = prompt( "Your Weight?" );

//     if( age >= 18 && weight <= 70 ){

//         alert( "You're a smart man." );

//     }else if ( age >= 18 && weight > 70 ){

//         alert( "You're a fat guy." );

//     }else{

//         alert( "You're a baby" );

//     }

// }



// ----------------------------
// Ch # 14
// myButton.onclick = function () {

//     var age = prompt("Your age?");

//     if (age >= 18) {

//         var weight = prompt("Your Weight?");

//         if (weight <= 70) {
//             alert("You're a smart man.");
//         } else {
//             alert("You're a fat guy.");
//         }

//     } else {
//         alert("You're a baby");
//     }

// }


// Assignment after Lecture
myButton.onclick = function () {

    var num = prompt("Enter your marks?")
    var resultToShow = ""

    if (num >= 90) {
        resultToShow = "You got A+"
    }else if(num >= 80){
        resultToShow = "You got A"
    }else if(num >= 70){
        resultToShow = "You got B"
    }else{
        resultToShow = "You're fail"
    }

    alert(resultToShow);
    // resultDiv.innerHTML = resultToShow

}