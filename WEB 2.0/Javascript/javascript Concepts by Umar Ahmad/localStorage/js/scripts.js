
// let obj = {
//     name: "Umar",
//     lastName: "Ahmad",
//     age: 25,
//     caste: "ABC",
//     rollNo: 525
// }
  
// let newObj = {
//     name: "Ahmad"
// }

// let { name, age, ...otherProps } = obj


// console.log( name, age, otherProps )

// let colors = ["red", 'green', 'blue']

// let [ red, green, blue ] = colors

// console.log( colors[0], colors[1], blue )






















// let user = ["Umar", 25]

// // const { lastName, age } = obj


// // const [ name, age ] = user
// let name = user[0]


// // console.log( lastName )
// // console.log( age )

// console.log( user[0], user[1] )










// let convertedData = JSON.stringify(obj)
// console.log(convertedData)


// let originalData = JSON.parse( convertedData )
// console.log(originalData)


// function sum(num) {
//     return 5 + num
// }

// var sum = function (num) {
//     return 5 + num
// }

// var sum1 = num => 5 + num

// console.log( sum(5) )
// console.log( sum1(5) )

// function displayTime() {
//     let date = new Date()
//     result.innerHTML = date.toLocaleTimeString();
// }

// displayTime()


// var abc = setInterval(displayTime, 1000)

// setTimeout(function () { clearInterval(abc) }, 5000)










// let abc = JSON.stringify( obj )


// let originalData = JSON.parse( abc )

// console.log( abc )
// console.log( originalData )


// function helloWorld(){
// }

// var sum = function(a){
//     return 2+2
// }


// var sum1 = a => a + 2

// sum1( 5 )


// function runAfterASecond(){  
//     let date = new Date()

//     result.innerHTML = date.toLocaleTimeString()
// }


// let myTime = setInterval(runAfterASecond, 1000 )


// setTimeout(function(){ clearInterval( myTime ) }, 5000)
// runAfterASecond()
























// let user = {
//     firstName: "Umar",
//     lastName: "Ahmad",
//     city: "fsd"

// }

// const { firstName, ...abc } = user

// console.log( firstName, abc )


button1.onclick = function () {

    var newName = prompt("What is your name?")

    var names = localStorage.getItem('data');

    if (names == null) {
        names = []
    } else {
        names = JSON.parse(names)
    }

    names.push(newName);

    localStorage.setItem('data', JSON.stringify(names))

    result.innerHTML = newName + " have been stored in storage"

}


button2.onclick = function () {

    var names = localStorage.getItem('data');
    if (names == null) {
        alert("There is nothing to print")
        return
    }

    names = JSON.parse(names)
    // alert(names)

    result.innerHTML = names
}

button3.onclick = function () {
    alert(localStorage.getItem("data"));
    localStorage.removeItem('data')
    
    

    
    result.innerHTML = "All Names Have been deleted from Storage"

}