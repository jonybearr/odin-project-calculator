//establish variables
let operation = '';
let value1 = '';
let value2 = '';
let answer='';
let displayedString='';
let prevEventWasEquals


//operator functions
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
    a=Number(a)
    b=Number(b)
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


//reaction for display
function displayUpdate(event) {
    let newAction=event.target.id
    console.log(newAction);

    //button pressed logic


    //if clear button is pressed, clear the display, clear variables
    if(newAction=="clear") {
        displayedString="";
        operation = '';
        value1 = '';
        value2 = '';

    //if operator button is pressed
    } else if(newAction=='+'||newAction=='-'||newAction=='*'||newAction=='/') {
        //if existing operations are pending, do the operations and set the result as
        //the first value of the new operation
        if(value1!=''&&value2!=''&&operation!=''){
            answer = operate(operation,value1,value2)
            displayedString=answer
            value1=answer
            operation=newAction
            //reset value2
            value2=''
        } else if (value1 !=''){
            operation=newAction
            displayedString=operation
        } else {
            //do nothing 
        }

    //if evaluate button is pressed, 
    } else if(newAction=='=') {
        //send values to operate function if requirements are met
        if(value1!=''&&value2!=''&&operation!=''){
            console.log('calculation running!')
            answer=operate(operation,Number(value1),Number(value2));
            //update display with answer
            displayedString=answer;
            value1 = answer;
            console.log(answer)
            //delete old variables
            operation = '';
            value2 = '';
            prevEventWasEquals=true
            console.log(prevEventWasEquals)
        } else {
            console.log('missing inputs')
        }
    //del button    
    } else if(newAction=='del') {
        //edit value 1 if operation doesnt exist
        if(operation==''){
            //if single digit, del clears value1 and sets display to empty
            if(value1.length==1){
                value1=''
                displayedString=''
            } else {
                value1=value1.substring(0,value1.length-1)
                displayedString=value1
            }
        } else {
            value2=value2+newAction;
            displayedString=value2;
        }
             
    //if a number is pressed
    } else {
        //if operator is not pressed, add to first number
        if(operation==''){
            if(prevEventWasEquals==true){
                prevEventWasEquals=false
                value1=''
                console.log('this is value1 right now ' + value1)
            }
            value1=value1+newAction;
            displayedString = value1;

        //else add to second number
        } else {
            value2=value2+newAction;
            displayedString=value2;
        }
        
    }

    //write displayed string to html
    document.querySelector('#display').textContent=displayedString;
}
