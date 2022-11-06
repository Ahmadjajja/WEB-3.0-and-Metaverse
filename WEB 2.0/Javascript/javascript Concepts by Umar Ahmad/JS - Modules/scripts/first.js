var someString = "I love pakistan."

var secondString = "This is another string"
var num1 = 50;
var num2 = 80;

function myFunction(){
    return num1 + 8;
}

function anotherFunction(){
    return 50 + num2;
}

export {someString, secondString, anotherFunction}     //variables will be exported using curly brackets separated with commas
export default myFunction()    





























// export {someString, secondString, myFunction}

// export default anotherFunction