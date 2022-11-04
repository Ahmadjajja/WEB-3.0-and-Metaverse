// A Promise is a special object that connects code
// that needs to produce a result and the code that needs to use this result in
// the next step.



// example 1

const promise1 = new Promise((resolve, reject) => {
  // do something that might take a while
  // let's just set x instead for this example
  let x = 20;
  if (x === 10) {
    resolve(x); // on success
  } else {
    reject("Too low"); // on error
  }
})
                    // form first for handling result 
// promise.then(
//   function (value) {                                   //First function takes parameter value returned by resolve method.
//     console.log("Success:", value);
//   },
//   function (error) {                                   //Second function takes parameter value returned by reject method.
//     console.log("Error:", error);
//   }
// );
                    // form second for handling result
    .then(value => {
    console.log(value);
    })
    .catch(error => {
    console.log(error);
    })






// // example 2
// const promise2 = new Promise((resolve, reject) => {
//     reject("oops...");
//    })
//     .then(value => {
//     console.log(value);
//     return "we";
//     })
//     .then(value => {
//     console.log(value);
//     return "can";
//     })
//     .then(value => {
//     console.log(value);
//     return "chain";
//     })
//     .then(value => {
//     console.log(value);
//     return "promises";
//     })
//     .then(value => {
//     console.log(value);
//     })
//     .catch(value => {
//     console.log(value);
//     })



                                    // practice exercise 13.2
    let promise3 = new Promise((resolve, reject) => {
        resolve("one");
    })
    const counter = (counting) => {
        console.log(counting);
    } 
    promise3.then((value) => {
        counter(value);
        return "two";
    })
    .then((value) => {
        counter(value);
        return "three";
    })
    .then((value) => {
        counter(value);
        return "four";
    })
    .then((value) => {
        counter(value);
        return "five";
    })


 