//Ahmad Jajja WEB&MOBILE APP CERTIFIED

// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


const show_magicians = (mg) => {
    for (let index = 0; index < mg.length; index++) {
        const element = mg[index];
        console.log(`${mg[index]} is very good magicians`);
        
    }
}

show_magicians(["baala", "maana","nomi", "haseeb"])