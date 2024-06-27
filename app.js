


let Plus = 0;
let incrementValue = 1; // Default increment value

const h1 = document.querySelector('h1');

function PlusOne(p1){
    console.log(p1.textContent);
    plus();
}


const  dropdownToggle  = document.querySelector('.dropdown-toggle');
function setIncrement(value) {
    incrementValue = value;
    console.log(`Increment set to ${incrementValue}`);
    dropdownToggle.innerHTML = `+${incrementValue}`
}

function plus(){
    Plus += incrementValue;
    h1.innerHTML = `${Plus}`;
    console.log(Plus);
}



function minus(){
    if (Plus - incrementValue >= 0) {
        Plus -= incrementValue;
    } else {
        Plus = 0;
    }
    h1.innerHTML = `${Plus}`;
    console.log(Plus);
}

function reset(){
    Plus = 0
    h1.innerHTML = `${Plus}`;
}