function Person(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    //Not a good way to define shared methods
    // this.fullName = function(){
    //     return this.firstName + " " + this.lastName;
    // }

}

//Good way to define shared methods
Person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

var user1 = new Person("Umar", "Ahmad", 22);
var user2 = new Person("Ali", "Raza", 25);
var user3 = new Person("Ahmad", "Raza", 15);

console.log(user1)


//List of Properties
// var listOfProperties = [];
// for (var prop in user) {
//     listOfProperties.push(prop);
// }

// console.log( listOfProperties )