//Ahmad Jajja WEB&MOBILE APP CERTIFIED
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


const show_magicians = (mg) => {
    let Array = [];
    for (let index = 0; index < mg.length; index++) {
        const element = mg[index];
        console.log(element)
        Array.push(element)
    }
    return Array
}

const new_array = show_magicians(["baala", "maana","nomi", "haseeb"])
console.log("new_array", new_array);















