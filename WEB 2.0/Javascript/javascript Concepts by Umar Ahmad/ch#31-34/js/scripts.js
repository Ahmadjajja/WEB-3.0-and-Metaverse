
original.innerHTML = new Date();

//-----------------------------------------


button1.onclick = function () {

    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var now = new Date();
    var theDay = now.getDay();

    var nameOfTheDay = dayNames[theDay];

    result.innerHTML = nameOfTheDay;

}


button2.onclick = function () {

    var userInput = prompt( "Enter the date you born" )

    var today = new Date();
    var bornDate = new Date( userInput );

    var msDiff = today.getTime() - bornDate.getTime();

    var daysDiff = msDiff / (1000 * 60 * 60 * 24); // this line may generate floating point

    // we remove floating point using Math.floor
    result.innerHTML = Math.floor( daysDiff ) + " days have been passed since you born"; 

}



button3.onclick = function () {

    var userInput = prompt( "Enter date of your next birth day" )

    var today = new Date();
    var nextBirthDate = new Date( userInput );

    var msDiff = nextBirthDate.getTime() - today.getTime();

    var daysDiff = msDiff / (1000 * 60 * 60 * 24);

    result.innerHTML = "Your next birth day is '" + Math.floor( daysDiff ) + "' days away";

}
