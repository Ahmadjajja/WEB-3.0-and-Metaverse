// var num = 2+2
// function addMe(){
//     num = 6;
// }
// addMe();

// alert(num)


function calculateTax(price, taxRate) {

    var tax = price * taxRate / 100;
    return tax;

}

function calculateTotal(price) {

    if (price > 1000) {
        var taxRate = 16;
    } else {
        var taxRate = 8;
    }

    var tax = calculateTax(price, taxRate)

    var total = price + tax;

    return total;

}

function tellTime(buttonName) {

    var now = new Date();
    var theHr = now.getHours();
    var theMin = now.getMinutes();
    var theSec = now.getSeconds();

    result.innerHTML += "You clicked the button @ " + buttonName + ": " + theHr + ":" + theMin + ":" + theSec + "<br />";

    // return theHr + ":" + theMin + ":" + theSec;

}

button1.onclick = function () {

    // var now = new Date();
    // var theHr = now.getHours();
    // var theMin = now.getMinutes();
    // var theSec = now.getSeconds();

    // result.innerHTML += "You clicked the button @ " + buttonName + ": " + theHr + ":" + theMin + ":" + theSec + "<br />";

    var time = tellTime("Button ABC");

    console.log(time)

}




button2.onclick = function () {

    tellTime("Second Button");

}




button3.onclick = function () {

    tellTime();

}


button5.onclick = function () {

    var price = +prompt("Enter price");
    var taxRate = 16;

    var tax = calculateTax(price, taxRate);

    result.innerHTML = "Tax: " + tax;

}

button6.onclick = function () {

    var price = +prompt("Enter price");

    var total = calculateTotal(price);

    result.innerHTML = "Total: " + total;

}

