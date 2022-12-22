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


