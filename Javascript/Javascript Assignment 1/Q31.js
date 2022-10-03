//Ahmad Jajja WEB&MOBILE APP CERTIFIED
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.



let users = ["ahmad", "ali", "admin","razzaq","hamad"];

for (let index = users.length; index >=0; index--) {
    users.pop();
}

if (users.length === 0){
    console.log("We need to find some users!")
}





















