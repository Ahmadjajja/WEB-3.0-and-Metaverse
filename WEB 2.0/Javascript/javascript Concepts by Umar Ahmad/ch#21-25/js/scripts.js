
var someString = "I love my country Pakistan!";

var abc = "this Is A ParAgrpah"

var newasdf = someString.slice()


//-----------------------------------------

original.innerHTML = someString;

button1.onclick = function () {

    result.innerHTML = someString.toLowerCase();

}

button2.onclick = function () {

    result.innerHTML = someString.toUpperCase();

}

button3.onclick = function () {

    var city = prompt("Enter your city?");
    // city = city.toLowerCase();

    var cities = ["islamabad", "karachi", "lahore", "peshawar", "queta"];
    
    for (var index = 0; index < cities.length; index++) {

        if( city === cities[ index ] ){
            result.innerHTML = "City found in array";
        }

    }

}

button4.onclick = function () {

    var city = prompt("Enter your city?");

    var firstChar = city.charAt(0);
    var otherChars = city.slice(1);
    firstChar = firstChar.toUpperCase();
    otherChars = otherChars.toLowerCase();

    result.innerHTML = firstChar + otherChars;

}

button5.onclick = function () {

    var word = prompt("Enter a word to check?");

    var findIndex = someString.indexOf( word );

    // If the word is found in the string, then it's index will be equal or greater than 0
    if ( findIndex >= 0 ) {
        result.innerHTML = word + " found in original string at index: " + findIndex;
    }else{
        result.innerHTML = word + " is not avialable in original string";
    }

}

button6.onclick = function () {

    var replace = prompt("Enter a word to replace?");
    var replaceWith = prompt("Replace with?");

    var replacedString = someString.replaceAll( replace, replaceWith );

    result.innerHTML = replacedString;

}

