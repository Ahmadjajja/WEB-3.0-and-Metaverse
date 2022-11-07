//Ahmad Jajja WEB&MOBILE APP CERTIFIED

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

const show_magicians = (mg) => {
    for (let index = 0; index < mg.length; index++) {
        const element = mg[index];
        console.log(element);
        
    }
}

show_magicians(["baala", "maana","nomi", "haseeb"])