//Ahmad Jajja WEB&MOBILE APP CERTIFIED

// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:



//portion 1
//Tests for equality and inequality with strings

if ("ahmad"  === "Ahmad") {
    console.log("Equality true");
} else {
    console.log("Equality false");
}



//portion 2
// Tests using the lower case function

if ("ahmad" != "Ahmad".toLowerCase()) {
    console.log("Lower case condition is true")
} else {
    console.log("Lower case condition is false")
}

//portion 3
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

if (!(10 >= 5 && 23 <= 100  || 4 > 3 && 5 > 20)) {
    console.log("Condition is true");
} else{
    console.log("Condition is false");
}


//portion 4
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

if (!(10 >= 5 && 23 <= 100  || 4 > 3 && 5 > 20)) {
    console.log(`Condition is true using "and " and "or " operator`);
} else{
    console.log(`Condition is false using "and" and "or" operator`);
}

//portion 5
//Test whether an item is in a array

var peoples = ["anyone", "living", "deceased"];

for (let index = 0; index < peoples.length; index++) {
    if ("anyone" === peoples[index]) {
        console.log("An item is in a array.");
    }
}


// //portion 6
// //Test whether an item is not in a array

var count = 0;

for (let index = 0; index < peoples.length; index++) {
    if ("footballer" === peoples[index]) {
        count++;
    }
}

if (count === 0 ) {
    console.log("An item is not in array");
} else {
    console.log("An item is in the array");
}











































