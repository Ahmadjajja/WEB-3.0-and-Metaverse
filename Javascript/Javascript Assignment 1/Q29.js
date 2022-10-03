//Ahmad Jajja WEB&MOBILE APP CERTIFIED
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

let favouriteFruites = ["lemon", "mango", "banana", "melon","Amrood", "khajoor"];

for (let index = 0; index < favouriteFruites.length; index++) {
    const element = favouriteFruites[index];
    if (element  ===  "banana") {
        console.log(`You really like ${favouriteFruites[index]}!`)
    } else if(element  ===  "mango") {
        console.log(`You really like ${favouriteFruites[index]}!`)
    }else if(element  ===  "lemon") {
        console.log(`You really like ${favouriteFruites[index]}!`)
    }else if(element  ===  "melon") {
        console.log(`You really like ${favouriteFruites[index]}!`)
    }else if(element  ===  "khajoor") {
        console.log(`You really like ${favouriteFruites[index]}!`)
    } else {
        console.log(`You really like ${favouriteFruites[index]}!`)
    }
}

