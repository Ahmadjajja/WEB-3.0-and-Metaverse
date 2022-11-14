// function abc() {
//     let pets = [1, 2, 3,4, 5]
//     pets = pets.slice(2,4);
//     console.log(pets[1]);
// }
// abc();
// let z = ;
// console.log(((a, b) => a+b)(3,4));
// var x = 0;
// for (let index = 0; index < 31; index += 2) {
//     // for (let i = 0; i < 5; i++) {
//     //     console.log("hello");
//         x = x + 1;
//     // }
    
// }

// console.log(x);

// let a = "we are the best developers in the world!";
// let b = "the world"
// let c = a.indexOf(b);

// if (c!= -1) {
//     a = a.slice(0,c)+ "Asia" + a.slice(c + b.length);
// }
// console.log(a);


// let a = "55" + 5 - 5;
// console.log(a);


// var a = 5;
// var c = function (b) {
//     a += 3; //8
//     return b + a; //10
// }(2);
// console.log(c);


// let a = 1;

// switch (a) {
//     case 1:
        
//         console.log(20);
//     case 2:
        
//         console.log(30);
//         break;
//     case 3:
        
//         console.log(40);

//     default:
//         console.log(100);
// }


// let z = (x,y) => x > y ? 3: 4;
// console.log(z(5,6));

// function n(arr) {
//     let len = arr.length, i = 0;
//     if (len == 0) {
//         console.log("empty");
//     } else {
//         do {
//             console.log(arr[i]);
//         } while (++i < len);
        
//     }
// }
//  n([2, 3, 4])



// let a = 0;        // confusion here
// function n(callback) {
//     setTimeout(() => {
//         a += 5;
//         callback();
//         a +=9;
//     }, 200);
// }
// a += 2;
// // n(function () {
// //     console.log(a);
// // })

// (function (a) {
//     n(function () {
//         console.log(a);
//     })
// })(a);
//  a += 3;




// let f = (nr) => {
//     console.log(nr);
//     if (nr > 0) {
//         f(--nr);
//     }
// }
// f(3)

function n1(state) {
    return new Promise((resolve, reject) => {
        // setTimeout(() => {
        //     resolve("say something" + x)
        // }, 2000);
        // reject();
        if (state) {
            resolve("s")
        } else {
            reject('e')
        }
    });
}

// function talk(x) {
//     const words = await n1(x);
// }
// talk(2);
let promise = n1(state);
promise
.then(function () {
    console.log("s1");
    return n1(false)
})
.catch(function () {
    console.log("s1");
    return "Error caught"
})
.then(function () {
    console.log("s1");
})
.catch(function () {
    console.log("error");
})
// .then(function () {
//     console.log("s1");
// })