//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Alien Colors #2: Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.


// portion 1
// • If the alien is green, print a message that the player earned 5 points.

var aliensColor = "Green";

if (aliensColor === "Green") {
    console.log("The player just earned 5 points for shooting the alien.");
}

//portion 2 
//• If the alien is yellow, print a message that the player earned 10 points.

aliensColor = "YELLOW";

if (aliensColor === "YELLOW") {
    console.log("The player just earned 10 points for shooting the alien.");
}

//portion 3
//• If the alien is red, print a message that the player earned 15 points.

aliensColor = "RED";

if (aliensColor === "RED") {
    console.log("The player just earned 15 points for shooting the alien.");
}



//portion 4
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.

aliensColor = "RED";

if (aliensColor === "Green") {
    console.log("The player just earned 5 points for shooting the alien.");
} else if (aliensColor === "YELLOW") {
    console.log("The player just earned 10 points for shooting the alien.");
} else if (aliensColor === "RED") {
    console.log("The player just earned 15 points for shooting the alien.");
} else {
    console.log("The player just earned 0 points for shooting the alien.")
}






