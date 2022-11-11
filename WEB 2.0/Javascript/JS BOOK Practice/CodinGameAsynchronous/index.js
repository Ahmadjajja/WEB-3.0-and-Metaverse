// //call back practice

// function func1() {
//     console.log("callback1");
// }
// function func2() {
//     console.log("callback2");
// }

// function job(callback1, callback2) {
//     setTimeout(function(){
//         callback1();
//     }, 2000);
//     let counter = 1;
//     let myInterval = setInterval(function(){
//         callback2();// 1,2,3
//         if(counter === 3){
//             clearInterval(myInterval);
//         }
//         counter++; // 2,3
//     },1000);

// }

// // job(func1, func2)

//     //What's the hell callback complexity ?
//     function job1(callback) {
//         setTimeout(function() {
//             callback('test 1');     //will be called after 2 seconds.
//         }, 2000);
//     }

//     function job2(callback) {
//         setTimeout(function() {
//             callback('test 2');      //will be called after 6 seconds.
//         }, 4000);
//     }

//     job1(function(data) {
//         console.log(data);   //will print after 2 seconds

//         job2(function(data) {
//             console.log(data);   //will print after 4 second but after 6 second from overall execution
//         });
//     });

// //promises practice

// function job() {       // out of understanding   ,,, must solve this.
//     let promise;
//     setTimeout(function(){
//         promise = new Promise((resolve,reject) => {
//         resolve("hello world");
//         })
//         console.log();
//     }, 2000);

//     console.log("2nd log");
//     return promise;
// }

// job();

// Let's do a harder exercise. In this code, your function receives a parameter data.
// You must modify the code below based on the following rules:

// // Your function must always return a promise
// // If data is not a number, return a promise rejected instantly and give the data "error" (in a string)
// // If data is an odd number, return a promise resolved 1 second later and give the data "odd" (in a string)
// // If data is an even number, return a promise rejected 2 seconds later and give the data "even" (in a string)

// function job1(data) {
//     return new Promise(function (resolved, rejected) {
//         if(isNaN(data)){
//             rejected("error")
//             console.log("error");
//         }else if(data % 2 != 0){
//             setTimeout(()=> {
//                 resolved("odd");
//                 console.log("odd");
//             },1000)
//         }else {
//             setTimeout(()=> {
//                 resolved("even");
//                 console.log("even");
//             }, 2000)
//         }
//     })
// }

// console.log(job1(56));    // Promise { <pending> }

// // Chaining Promises

// //NOTE: .then in promises always return a promise
// // At worst, it can be a never resolved promise, but it is a promise.
// //The result of promise.then is a lost promise because no one can interact with it.      //confusion , Understand this carefully.

// var promise = job1(); // may be promise pending due to setTimeout function      //little Confusion

// promise                                                                         //When promise.then comes then this is called chaining promises.
//   .then(function (data1) {
//     console.log("data1", data1);
//     return job2(); // may be return promise pending due to setTimeout function
//   })

//   .then(function (data2) {
//     console.log("data2", data2); // may be result of job 2
//     return "Hello world";
//   })

//   .then(function (data3) {
//     console.log("data3", data3);
//     return ;
//   })
//   .then((data4) => {
//     console.log("data4", data4);
//   });

// function job1() {
// return new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("result of job 1");
//   }, 1000);
//   });
// }

// function job2() {
// return new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("result of job 2");
//   }, 1000);
// });
// }

// // When you deal with promise chaining, you must avoid some traps.

// // A)

// async function test() {
//   return job().then(function (data) {             //   The result of promise.then is a lost promise because no one can interact with it.
//     return doSomething(data);
//   });
// }

// function job() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("result of job 2.");       //This function will return this line
//     }, 1000);
//   });
// }

// function doSomething(data) {
//   // console.log("data IN DO SOMETHING =>",data);
//   return data;
// }

// // test();
// console.log(await test());

// // B)

// async function test() {
//   return job()

//   .then(function(data) {
//     console.log("data1",data);
//       return 2;
//   })

//   .then(function(data) {
//     console.log("data2",data);
//       return 3;
//   })

//   .then(function(data) {
//     console.log("data3",data);
//       return 4;
//   })

//   .then(function(data) {
//     console.log("data4", doSomething(data));
//       return doSomething(data);
//   });
// }

// function doSomething(params) {
//   return params;
// }

// function job() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("result of job 2.");       //This function will return this line
//     }, 1000);
//   });
// }

// console.log("test " ,await test());

// If you want to create an auto-resolved promise with a simple value, use Promise.resolve:

// function job() {
//   if (false) {
//       return aNewPromise();
//   } else {
//       return Promise.resolve(42); // return an auto-resolved promise with `42` in data.
//   }
// }

// console.log(job());

//Key Difference to be noted!                             Very Important Concept!

// // Example 1
// var num = 80;
// let promise = new Promise ((resolved, rejected) => {
//   if (num < 101) {
//     resolved();
//   }else {
//     rejected();
//   }
// })

// // promise.then(function(data) {
// //     console.log(data);
// // }, function(error) {
// //     console.error(error);
// // });

// promise.then(function(data) {
//     console.log(data);
//     throw "rejected error in then success handler But prints in catch handler"
// }).catch(function(data) {
//   console.log(data);
// })

// // Promise.all                                                    Very important concept!

// // part # 1

// function job(delay) {
//   return new Promise(function(resolve,reject) {
//       setTimeout(function() {

//           if (delay != 1000) {
//             console.log('Resolving', delay);
//             resolve('done ' + delay);
//           } else {
//             console.log('Rejecting', delay);
//             reject('undone' + delay);
//           }
//       }, delay);
//   });
// }

// // Sometimes we have multiple asynchronous tasks to perform , we can achieve this using Promise.all(This is itself a Promise)
// var promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);    //
// // var promise = job(1000)

// // and you have to start something when every task is done.                   //Confusion in this line !        // #confusion cleared!
// promise.then(function(data) {
//   console.log('All done');

//   data.forEach(function(text) {
//       console.log(text);
//   });
// })
// .catch(function (error) {
//   console.log(error)
// })


// part #02

let p1 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "p1");
});

let p2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1000, "p2");
});

let p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 1200, "p3");
});

let p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 300, "p4");
});

let p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 800, "p5");
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise

  .then(function (data) {
    data.forEach(function (data) {
      cconsole.log(data);
    });
  })

  .catch(function (error) {
    console.error("error", error);
  });
