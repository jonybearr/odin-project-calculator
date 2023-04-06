

console.log('hello there')

//operator functions

let displayedString='';

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

//reaction functions

//setup reactions
let buttons = document.querySelectorAll('.grid-item');

buttons.forEach(button => {
    button.addEventListener('click', function(e){displayUpdate(e)});
});

//reaction for display
function displayUpdate(event) {
    let newThing=event.target.id
    console.log(newThing);

    //if clear button is pressed, clear the display
    if(newThing=="clear") {
        displayedString="";
    } else {
        displayedString=displayedString+newThing;
    }

    //connect to html
    document.querySelector('#display').innerHTML=displayedString;
}
