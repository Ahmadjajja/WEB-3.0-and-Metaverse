let array = [10, 20, 30, 30];

// for( var i = 0; i < array.length; i++ ){
//     console.log( array[i] );
// }


for ( let value of array ) {
    console.log( value );
}



// Template Literals
var name = prompt("Enter your name")
var abc = `<h1 id=''>My name is ${name}</h1>`
abc = `<h2 id=''>My name is ${abc}`; 

console.log(abc)