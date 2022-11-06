button1.onclick = function () {

    var now = new Date();
    var today = now.getDay();

    if ( today === 0 ) {
        alert("It's Sunday");
    }
    else if ( today === 1 ) {
        alert("It's Monday");
    }
    else if ( today === 2 ) {
        alert("It's Tuesday");
    }
    else {
        alert("It's Some other day");
    }

}


button2.onclick = function () {

    var now = new Date();
    var today = now.getDay();

    switch( today ){
        case 0:
            alert("It's Sunday");
            break;
        case 1:
            alert("It's Monday");
            break;
        case 2:
            alert("It's Tuesday");
            break;
        default:
            alert("It's Some other day");
    }

}


// for( var i = 0; i <= 3; i++ ){
//     alert(i);
// }

// var i = 5;
// while (i <= 3) {
//     alert(i);
//     i++;
// }

// var i = 5;
// do{
//     alert(i);
// }while( i <= 3 );

button3.onclick = function () {

    do {

        var name = prompt( "Enter your name?" )

        console.log( name )

    }while( name === null );

    result.innerHTML = name

}