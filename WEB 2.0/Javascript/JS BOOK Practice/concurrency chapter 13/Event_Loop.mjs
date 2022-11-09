// When setTimeout() expires, the event loop will have done whatever was                             //Very important concept carefully keep it in mind.
// on the call stack already, and will check the callback queue and execute any
// tasks on there:



// The callback is placed in the callback queue
// right away, but the event loop won't even check the callback queue
// until the call_stack is empty. So it will still print Sorry I'm late after 9 ,
// even though the timer is at 0 


console.log("Hi there");
setTimeout(() => console.log("Sorry I'm late"), 1);
console.log(add(4,5));
function add(x, y) {
 return x + y;
}
