//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

//first portion of problem

var guests = ["anyone", "living", "deceased"];

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element}`);
}

//second portion of problem

console.log("you can invite only two people for dinner.");

for (let index = guests.length-1; index > 1; index--) {
    const element = guests[index];
    console.log(`${element} letting them know you’re sorry you can’t invite them to dinner.`)
    guests.pop();
}

//Third protion of problem

console.log("letting them know you’re still invited.")

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(element)
    
}

//Fourth protion of problem

for (let index = guests.length-1; index >= 0; index--) {
    guests.pop();
}

console.log("Empty list =>", guests)
