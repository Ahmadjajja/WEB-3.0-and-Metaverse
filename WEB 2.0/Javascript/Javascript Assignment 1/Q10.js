//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.



//This below program of calculation
console.log("8 * 8 => ", 8*8);
console.log("8 / 8 => ", 8/8);
console.log("8 - 8 => ", 8-8);
console.log("8 + 8 => ", 8+8);

//This below program for displaying name in different cases

var myName = "ahmad jajja";
console.log("My name in lower case =>",myName.toLowerCase());
console.log("My name in upper case =>",myName.toLowerCase());
function titleCase(string) {
    var sentence = string.toLowerCase().split(" ");
    for(var i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
 document.write(sentence.join(" "));
 return sentence;
 }
 ;
console.log("My name in title case =>",titleCase(myName)[0] + " " +  titleCase(myName)[1]);
