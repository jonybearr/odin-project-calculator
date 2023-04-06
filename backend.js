

console.log('hello there')

//operator functions

let displayedString='Display';

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

let buttons = document.querySelectorAll('.grid-item');

buttons.forEach(button => {
    button.addEventListener('click', function(e){console.log(e.target.id)});
});
