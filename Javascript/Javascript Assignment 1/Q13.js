//Ahmad Jajja WEB&MOBILE APP CERTIFIED
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

var transportationStatement = ["Honda motorcycle", "car", "bus"];
for (let index = 0; index < transportationStatement.length; index++) {
    console.log("I would like to own a " + transportationStatement[index]);
}