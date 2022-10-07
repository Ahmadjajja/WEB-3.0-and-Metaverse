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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; //enums are global constants
var person = {
    name: "ahmad",
    age: 20,
    role: Role.AUTHOR
};
if (person.role === Role.AUTHOR) {
    console.log("user is author......");
}
