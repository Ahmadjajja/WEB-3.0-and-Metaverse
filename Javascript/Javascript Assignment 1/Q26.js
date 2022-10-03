//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.


//portion 1
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.


var aliensColor = "Green";
if (aliensColor === "Green") {
    console.log("The player just earned 5 points for shooting the alien.");
}

//portion 2
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

aliensColor = "RED";
if (aliensColor != "Green") {
    console.log("The player just earned 10 points for shooting the alien.");
}


// portion 3 
// • Write one version of this program that runs the if block and another that runs the else block.

//a)
aliensColor = "Green";
if (aliensColor === "Green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points for shooting the alien.");
}

//b)
if (aliensColor != "Green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else {
    console.log("The player just earned 10 points for shooting the alien.");
}






















