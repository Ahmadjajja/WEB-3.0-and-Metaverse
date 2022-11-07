//Ahmad Jajja WEB&MOBILE APP CERTIFIED


// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.


// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

let current_users = ["ahmad","hamza","ali","abdullah","rehman"];
let new_users = ["haider", "danish", "ahmad","ali","bilal"];

for (let index = 0, counter = 0; index < new_users.length; index++) {
    const element = new_users[index];
    for (let i = 0; i < current_users.length; i++) {
        const e = current_users[i];
        if(element === current_users[i]){
            console.log(`Person ${element} will need to enter the new userName!`);
            counter++;
            break;
        }        
    }
    if(counter ===0){
        console.log(`${element} is available!`);
    }
    counter = 0;
}
































