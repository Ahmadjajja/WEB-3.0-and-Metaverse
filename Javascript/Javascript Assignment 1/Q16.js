//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

var guests = ["anyone", "living", "deceased"];

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element} , you people invite to this dinner`);
}

guests.unshift("Cricketer")

console.log("Value after adding element at start");

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element} `);
}

guests.splice(2,0,"footballer");

console.log("Value after adding element at middle");

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element} `);
}
guests.push("Coders");
// guests.appendChild("Coders");    confusion

console.log("Value after adding element at end");

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element} `);
}

