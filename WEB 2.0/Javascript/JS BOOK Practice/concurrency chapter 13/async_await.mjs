// //   example 1

function saySomething(x) {
    return new Promise(resolve => {
    setTimeout(() => {
    resolve("something" + (x + 4));
    }, 2000);
    });
   }
   async function talk(x) {
    const words = await saySomething(x);
    console.log(words);
   }
   talk(2);
   talk(4);
   talk(8);

//    Practice exercise 13.3

var counter = 0; //step 1
function handleCounter(x) { //step 2
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`x value ${x} counter:${counter++}`);  //step 3
    }, 1000);
  });
}

async function something(x) {
  console.log(`ready ${x} counter: ${counter}`);
  const c = await handleCounter(x);
  console.log(c);
}

for (let index = 0; index < 10; index++) {
  something(index);
}
