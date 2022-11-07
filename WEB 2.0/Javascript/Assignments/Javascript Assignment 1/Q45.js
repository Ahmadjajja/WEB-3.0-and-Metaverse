//Ahmad Jajja WEB&MOBILE APP CERTIFIED
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


const carInfo = (manufaturer, model, color, price) => {
    return {
        manufaturer,
        model,
        color,
        price
    }
}

const ObjectInfo = carInfo("Ali baba", "2010", "black", "33 lakhs")

console.log(ObjectInfo)