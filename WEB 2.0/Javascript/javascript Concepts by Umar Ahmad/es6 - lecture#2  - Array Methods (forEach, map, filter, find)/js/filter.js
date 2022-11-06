var persons = [
    {firstname : "Umar", lastname: "Ahmad"},
    {firstname : "Ali", lastname: "Raza"},
    {firstname : "Ahmad", lastname: "Raza"},
    {firstname : "Umar", lastname: "Ahmad"},
];


var filteredData = persons.filter(function(person){
    return person.firstname !== "Umar"
})


var singleUser = persons.find(function(person){
    return person.firstname !== "Umar"
})

console.log( singleUser )
console.log( filteredData )
console.log( persons )

























// var filteredArray = names.filter(function(name){
//     return name == "Umar"
// })


// var nameWIthA = names.find( function(name){
//     return name.indexOf("A") != -1
// })

// // console.log(filteredArray)
// console.log(nameWIthA)





















// var filteredNames = names.filter(function(name){
//     return name !== "Umar";
// });

// console.log(filteredNames);












// var persons = [
//     {firstname : "Umar", lastname: "Ahmad"},
//     {firstname : "Ahmad", lastname: "Raza"},
//     {firstname : "Ali", lastname: "Raza"}
// ];


// var filteredPersons = persons.filter( function( person ){
//     return person.firstname == "Umar";
// } )

// console.log(filteredPersons)