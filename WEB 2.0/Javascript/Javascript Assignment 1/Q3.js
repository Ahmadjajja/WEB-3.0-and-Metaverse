//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase

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