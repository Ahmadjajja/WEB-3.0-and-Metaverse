// function add(n1: number, n2: number) {
//     if (typeof n1 != "number" || typeof n2 != "number") {
//         throw new Error('Incorrect input!');
//     }
//     return n1 + n2;
// }

// console.log(add(5, 10))


// Enums Concepts

// const ADMIN = 0;   
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum R {ADMIN, READ_ONLY, AUTHOR }; //enums are global constants

const Person: {
    name: String,
    age: number,
    role:  number
}  = {
    name:"ahmad",
    age:20,
    role:R.AUTHOR
}

if (Person.role === R.AUTHOR) {
    console.log("user is author......")
}