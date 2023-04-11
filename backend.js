

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

function operate(operator,a,b) {
    if(operator=='*') {
        return multiply(a,b);
    }
    if(operator=='/') {
        return divide(a,b);
    }
    if(operator=='+') {
        return add(a,b);
    }
    if(operator=='-') {
        return subtract(a,b);
    }
}



//logic functions

//reaction setup reactions
let buttons = document.querySelectorAll('.grid-item');

buttons.forEach(button => {
    button.addEventListener('click', function(e){displayUpdate(e)});
});


//establish variables
let operation = '';
let value1 = '';
let value2 = '';
let answer='';


//reaction for display
function displayUpdate(event) {
    let newThing=event.target.id
    console.log(newThing);

    //button pressed logic
    //if clear button is pressed, clear the display, clear variables
    if(newThing=="clear") {
        displayedString="0";
        operation = '';
        value1 = '';
        value2 = '';
        answer='';
    //if operator button is pressed
    } else if(newThing=='+'||newThing=='-'||newThing=='*'||newThing=='/') {
        //check if value1 exists
        if(value1==''){
            value1=answer;
        }
        //update variable
        operation = newThing;
        console.log('new operator is ' +newThing)

    //if evaluate button is pressed, 
    } else if(newThing=='=') {
        console.log('calculation ran!')
        //send values to operate function
        answer=operate(operation,value1,value2);
        //update display with answer
        displayedString=answer;
        //update variables to match logic
        //clear all variables except answer
        operation = '';
        value1 = '';
        value2 = '';
        
    //if operator exists, any new numbers are for the second value
    } else if(operation!='') {
        //clear screen of previous number, and update new number
        displayedString=newThing;
        //update value2
        value2=newThing;

            
    //first value
    } else {
        //check if it is the first digit of the first value
        if(value1==''){
            displayedString=newThing;
            value1=newThing;
        } else {
            displayedString=displayedString+newThing;
            value1=displayedString;
        }
        
    }

    //connect to html
    document.querySelector('#display').textContent=displayedString;
}
