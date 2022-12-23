"use strict";
console.log(Symbol("Franklin"));
console.log("Ahmad");
let bestSong = Math.random() > 0.5 ? parseInt("2") : "Respect";
let firstName = "Whitney";
firstName.length;
console.log(typeof (firstName.length));
let nam = false;
// nam:string = "ahmad"
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
let thinker = null;
thinker = "ahmad";
console.log(thinker.length);
const philosopher = 23;
const f = null;
const ok = { author: "Rita Dove", pages: 80, }; //ok
const missing = { pages: 23 };
const hasBoth = { firstName: "Lucille", lastName: "Clifton", };
// Ok: `hasBoth` contains a `firstName` property of type `string` 
let withFirstName = hasBoth;
// Ok: `hasBoth` contains a `lastName` property of type `string` 
let withLastName = hasBoth;
console.log(withFirstName);
console.log(withFirstName);
const hasStartString = { start: new Date() }; // Error: Type 'string' is not assignable to type 'Date'. };
console.log(hasStartString);
// Ok: all fields match what's expected in Poet 
const poetMatch = { born: 1928, name: "Maya Angelou" };
const a = { activity: "walking", born: 1935, name: "Mary Oliver", };
const extraProperty = a;
console.log(extraProperty);
const poem = Math.random() > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true };
poem.name; // Ok poem.pages; // ~~~~~ // Property 'pages' does not exist on type 'Poem'. // Property 'pages' does not exist on type 'PoemWithRhymes'. poem.rhymes; // ~~~~~~ // Property 'rhymes' does not exist on type 'Poem'. // Property 'rhymes' does not exist on type 'PoemWithPages'.
