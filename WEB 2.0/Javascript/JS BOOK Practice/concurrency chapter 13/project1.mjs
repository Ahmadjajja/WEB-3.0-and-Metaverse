let allowedPasswords = ["ahmad786","sultan786","jajja786","programmer786","softwareEngineer786","ceo786","trainer786"]; //stored allowed passwords

let login = (password) => allowedPasswords.includes(password);      //uses for checking password is in allowedPassword_array or not.

let passwordValidity = (password) => {
    return new Promise ((resolve, reject) => {   //step 3
        if (login(password) === true) {
            resolve(true);
        } else {
            reject(false);
        }
    })
}
passwordValidity("ahmad786").then((value) => {    //step 4 & step 5
    console.log(value)
})
.catch((value) => {
    console.log(value)
})

