//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

var peoples = ["anyone", "living", "deceased"];
for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "deceased") {
        console.log("You’ll have to think of someone else to invite.")
    }
}

for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "deceased") {
        console.log(peoples[index] + " people can’t make it")
    }
}

for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "deceased") {
        peoples[index] = "crickter";
        console.log(`replaced the name of the guest who can’t make dinner with the name of the new person (${peoples[index]}) you are inviting.`)
    }
}
for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "living" || peoples[index] === "anyone") {
        console.log(`From these guys one that  (${peoples[index]}) can make dinner is inviting`);
    }
}