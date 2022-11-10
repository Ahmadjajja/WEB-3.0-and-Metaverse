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

function job1(data) {
    return new Promise((resolved, rejected) => {
        if(isNaN(data)){
            rejected("error")
            console.log("error");
        }else if(data % 2 != 0){
            setTimeout(()=> {
                resolved("odd");
                console.log("odd");
            },1000)
        }else {
            setTimeout(()=> {
                resolved("even");
                console.log("even");
            }, 2000)
        }
    })
}

console.log(job1(56));



