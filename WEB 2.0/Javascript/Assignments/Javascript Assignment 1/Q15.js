//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite




var peoples = ["anyone", "living", "deceased"];
for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "deceased") {
        console.log("You’ll have to think of someone else to invite.")
    }
}

// first portion of problem

for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "deceased") {
        console.log(peoples[index] + " people can’t make it")
    }
}

//second portion of problem

for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "deceased") {
        peoples[index] = "crickter";
        console.log(`replaced the name of the guest who can’t make dinner with the name of the new person (${peoples[index]}) you are inviting.`)
    }
}

//Third portion of problem

for (let index = 0; index < peoples.length; index++) {
    if (peoples[index] === "living" || peoples[index] === "anyone") {
        console.log(`From these guys one that  (${peoples[index]}) can make dinner is inviting`);
    }
}


























