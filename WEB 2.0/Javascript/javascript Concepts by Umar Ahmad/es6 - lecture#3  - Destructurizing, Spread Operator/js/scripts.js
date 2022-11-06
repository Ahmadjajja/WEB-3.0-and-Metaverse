// Object Destructuring
let obj = {
    firstName: "Umar",
    lastName: "Ahmad",
    age: 25,
    caste: "ABC",
    rollNo: 525
}

let { firstName, age, ...otherProps } = obj    //confusion here 

// console.log(firstName, age, otherProps)


// Array Destructuring
let colors = ["red", 'green', 'blue']
let [red,...blue] = colors

// console.log(colors[0], blue)



// Spread Operator Examples
let newObj = {...obj}

const vehicles = ['mustang', 'f-150', 'honda-70', 'honda-100'];
const newVehicles = [...vehicles];

// console.log(newObj);
// console.log(newVehicles);
