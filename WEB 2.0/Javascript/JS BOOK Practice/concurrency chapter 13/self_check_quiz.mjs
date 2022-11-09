// 1. Fix the error in the following code to use the callback function:

function addOne(val){
    return val + 1;
   }
   function total(a, b, callback){
    const sum = a + b;
    return callback(sum);
   }
   console.log(total(4, 5, addOne));  //here is error  //error removed

//2. Write down the result of the following code:
function checker(val) {
  return new Promise((resolve, reject) => {
    if (val > 5) {
      resolve("Ready");
    } else {
      reject("Oh no");
    }
  });
}
checker(5)
  .then((data) => {
    console.log("done", data);
  })
  .catch((err) => {
    console.log("done", err);      //this line gives user defined error .
  });

//4. Update the below code to make the function return a Promise:
function myFun() {
 return new Promise((resolve, reject)=> resolve("true answer is coming from reject"))
}
myFun().then(
 function(val) { console.log(val); },
 function(err) { console.log(err); }
);


















