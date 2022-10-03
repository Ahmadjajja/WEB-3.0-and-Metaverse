//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Print a second set of invitation messages, one for each person who is still in your list.

var guests = ["anyone", "living", "deceased"];

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element} , you find people find bigger dinner`);
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

console.log("Value after adding element at end");

for (let index = 0; index < guests.length; index++) {
    const element = guests[index];
    console.log(`${element} `);
}

