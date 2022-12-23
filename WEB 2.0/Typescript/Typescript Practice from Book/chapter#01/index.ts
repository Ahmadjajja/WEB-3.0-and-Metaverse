console.log(Symbol("Franklin"));
console.log("Ahmad");
let bestSong = Math.random() > 0.5 ? parseInt("2") : "Respect";
let firstName = "Whitney";
firstName.length;
console.log(typeof(firstName.length));

let nam = false
// nam:string = "ahmad"
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";
let thinker: string | null = null
thinker = "ahmad"
console.log(thinker.length)
const philosopher = 23;
const f: string = null;
// console.log("f.length", f.charAt(2));

// type SomeType = string | undefined; 
// console.log(SomeType);

type Book = { author?: string; pages: number; };
const ok: Book = { author: "Rita Dove", pages: 80, };   //ok
const missing: Book = { pages:23 };


//Chapter #4 Started

type WithFirstName = { firstName: string };
type WithLastName = { lastName: string };
const hasBoth = { firstName: "Lucille", lastName: "Clifton", };
// Ok: `hasBoth` contains a `firstName` property of type `string` 
let withFirstName: WithFirstName = hasBoth;
 // Ok: `hasBoth` contains a `lastName` property of type `string` 
 let withLastName: WithLastName = hasBoth;
 console.log(withFirstName);
 console.log(withFirstName);

 type TimeRange = { start: Date; };
 const hasStartString: TimeRange = { start: new Date()} // Error: Type 'string' is not assignable to type 'Date'. };
 console.log(hasStartString);



 type Poet = { born: number; name: string; }
 // Ok: all fields match what's expected in Poet 
 const poetMatch: Poet = { born: 1928, name: "Maya Angelou" };
 const a = { activity: "walking", born: 1935, name: "Mary Oliver", };
 const extraProperty: Poet = a
 console.log(extraProperty);




 //

 type PoemWithPages = { name: string; pages: number; };
 type PoemWithRhymes = { name: string; rhymes: boolean; }; 
 type Poem = PoemWithPages | PoemWithRhymes;
 const poem: Poem = Math.random() > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true };
 poem.name; // Ok poem.pages; // ~~~~~ // Property 'pages' does not exist on type 'Poem'. // Property 'pages' does not exist on type 'PoemWithRhymes'. poem.rhymes; // ~~~~~~ // Property 'rhymes' does not exist on type 'Poem'. // Property 'rhymes' does not exist on type 'PoemWithPages'.
 
 
 



