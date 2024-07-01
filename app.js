


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

let counter = document.getElementById('counter');
function plus(){
    Plus += incrementValue;
    h1.innerHTML = `${Plus}`;
    counter.style.animation = 'none';
    counter.offsetHeight; // Trigger reflow
    counter.style.animation = '';
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

const letsBegin = document.querySelector('.lets-begin');
const boxDiv = document.querySelector('.box_div');

letsBegin.addEventListener('click',()=>{
    letsBegin.style.display = 'none'
    let letsbeginCard = document.createElement('div');
    letsbeginCard.className = 'lets_bigin-card';
    let imgone = document.createElement('div');
    imgone.className = 'imgone';
    let imgonneImg = document.createElement('img')
    imgonneImg.src = "./Assets/Images/1_0spjF96VRK9_mt4Ry9DZdg.png";
    let startonebutton = document.createElement('button');
    startonebutton.className = 'startedone';
    startonebutton.textContent = 'Start';
    // boxDiv.appendChild(letsbeginCard).appendChild(imgone).appendChild(imgonneImg);
    boxDiv.appendChild(letsbeginCard);
letsbeginCard.appendChild(imgone);
imgone.appendChild(imgonneImg);
imgone.appendChild(startonebutton);



let startcount = 0;
let startcount2 = 0;
let startcount3 = 0;




startonebutton.addEventListener('click', function() {
    startonebutton.style.display = 'none'
    // Your code for the click event goes here
    let startcardOne = document.createElement('div');
    startcardOne.className = 'start-card-one';
    let startonehfour = document.createElement('h5');
    let startone2 = document.createElement('h2');
    startone2.innerHTML = `${startcount}`;
    startonehfour.textContent = '(33 Times)';
    let startbut = document.createElement('button');
    startbut.className = 'b-plus-one';
    startbut.textContent = '+';
    startbut.addEventListener('click', handleStartClick);

    function handleStartClick() {
        if (startcount < 33) {
            incrementCounter();
        }
    }

    function incrementCounter() {
        startcount += 1;
        startone2.innerHTML = `<b>${startcount}</b>`;
        if (startcount === 33) {
            showCompletionMessage();
        }
    }

    function showCompletionMessage() {
        alert('Completed')
        startone2.innerHTML = `<b>${startcount}</b> Completed`;
        addRestartButton();
    }

    function addRestartButton() {
        const restart1 = document.createElement('button');
        restart1.textContent = "Restart";
        restart1.addEventListener('click', handleRestartClick);
        startbut.insertAdjacentElement('afterend', restart1);
    }

    function handleRestartClick(event) {
        event.target.style.display = 'none';
        resetCounter();
    }

    function resetCounter() {
        startcount = 0;
        startone2.textContent = `${startcount}`;
    }
    imgone.appendChild(startcardOne);

    
    let startbut2 = document.createElement('button');
    startbut2.className = 'b-plus-two';
    startbut2.textContent = '-';



    startbut2.addEventListener('click',function(){
        if(startcount > -1){
            startone2.innerHTML = `<b>${startcount}</b>`;
            startcount = startcount - 1;
        }
    })
    
    startcardOne.appendChild(startonehfour)
    startonehfour.appendChild(startbut)
    startonehfour.appendChild(startbut2);
    startonehfour.appendChild(startone2)
    // .appendChild(startone2)
});


let imgtwo = document.createElement('div');
imgtwo.className = 'imgtwo';
let imgtwoImg = document.createElement('img');
imgtwoImg.src = "./Assets/Images/alhamdulillah-calligraphy-in-moallah-style-alhamdulillah-is-arabic-phrase-meaning-praise-be-to-god-or-thank-god-free-vector.jpg";
let starttwobutton = document.createElement('button');
    starttwobutton.className = 'startedtwo';
    starttwobutton.textContent = 'Start';
    letsbeginCard.appendChild(imgtwo);
    imgtwo.appendChild(imgtwoImg);
    imgtwo.appendChild(starttwobutton);



starttwobutton.addEventListener('click', function() {
    starttwobutton.style.display = 'none'
    // Your code for the click event goes here
    let startcardTwo = document.createElement('div');
    startcardTwo.className = 'start-card-two';
    let starttwohfour = document.createElement('h4');
    let starttwo2 = document.createElement('h2');
    starttwo2.textContent = `${startcount}`;
    starttwohfour.textContent = '(33 Times)';
    let startbutt = document.createElement('button');
    startbutt.className = 'b-plus-one1';
    startbutt.textContent = '+';
    imgtwo.appendChild(startcardTwo);



startbutt.addEventListener('click', HandleStartClick);

    function HandleStartClick() {
        if (startcount2 < 33) {
            IncrementCounter();
        }
    }

    function IncrementCounter() {
        startcount2 += 1;
        starttwo2.innerHTML = `<b>${startcount2}</b>`;
        if (startcount2 === 33) {
            ShowCompletionMessage();
        }
    }

    function ShowCompletionMessage() {
        alert('Completed')
        starttwo2.innerHTML = `<b>${startcount2}</b> Completed`;
        AddRestartButton();
    }

    function AddRestartButton() {
        const restart2 = document.createElement('button');
        restart2.textContent = "Restart";
        restart2.addEventListener('click', HandleRestartClick);
        startbutt.insertAdjacentElement('afterend', restart2);
    }

    function HandleRestartClick(event) {
        event.target.style.display = 'none';
        ResetCounter();
    }

    function ResetCounter() {
        startcount2 = 0;
        starttwo2.innerHTML = `<b>${startcount2}</b>`;
    }
    imgtwo.appendChild(startcardTwo);

    
    let startbut22 = document.createElement('button');
    startbut22.className = 'b-plus-two';
    startbut22.textContent = '-';



    startbut22.addEventListener('click',function(){
        if(startcount2 > -1){

            starttwo2.textContent = `${startcount2}`;
            startcount2 = startcount2 - 1;
        }

    })




    startcardTwo.appendChild(starttwohfour);
    starttwohfour.appendChild(starttwo2);
    starttwohfour.appendChild(startbutt)
    starttwohfour.appendChild(startbut22);
});





let imgthree = document.createElement('div');
imgthree.className = 'imgthree';
let imgthreeImg = document.createElement('img');
imgthreeImg.src = "./Assets/Images/images.jpeg";
let startthreebutton = document.createElement('button');
    startthreebutton.className = 'startedthree';
    startthreebutton.textContent = 'Start';
letsbeginCard.appendChild(imgthree);
imgthree.appendChild(imgthreeImg);
imgthree.appendChild(startthreebutton);






startthreebutton.addEventListener('click', function() {
    startthreebutton.style.display = 'none'
    // Your code for the click event goes here
    let startcardThree = document.createElement('div');
    startcardThree.className = 'start-card-three';
    let startthreehfour = document.createElement('h4');
    let startthree2 = document.createElement('h2');
    startthree2.textContent = `${startcount3}`;
    startthreehfour.textContent = '(34 Times)';
    let startbuttt = document.createElement('button');
    startbuttt.className = 'b-plus-one11';
    startbuttt.textContent = '+';
    imgthree.appendChild(startcardThree);
    let startbut222 = document.createElement('button');
    startbut222.className = 'b-plus-two22';
    startbut222.textContent = '-';




    startbuttt.addEventListener('click', handleStartClick);

    function handleStartClick() {
        if (startcount3 < 34) {
            incrementCounter();
        }
    }

    function incrementCounter() {
        startcount3 += 1;
        startthree2.innerHTML = `<b>${startcount3}</b>`;
        if (startcount3 === 34) {
            showCompletionMessage();
        }
    }

    function showCompletionMessage() {
        alert('Completed')
        startthree2.innerHTML = `<b>${startcount3}</b> Completed`;
        addRestartButton();
    }

    function addRestartButton() {
        const restart3 = document.createElement('button');
        restart3.textContent = "Restart";
        restart3.addEventListener('click', handleRestartClick);
        startbut222.insertAdjacentElement('afterend', restart3);
    }

    function handleRestartClick(event) {
        event.target.style.display = 'none';
        resetCounter();
    }

    function resetCounter() {
        startcount3 = 0;
        startthree2.textContent = `${startcount3}`;
    }
    imgthree.appendChild(startcardThree);

    
    // let startbut222 = document.createElement('button');
    // startbut2.className = 'b-plus-two';
    // startbut2.textContent = '-';



    startbut222.addEventListener('click',function(){
        if(startcount3 > -1){
            startthree2.textContent = `${startcount3}`;
            startcount3 = startcount3 - 1;
        }
    })


    startcardThree.appendChild(startthreehfour);
    startthreehfour.appendChild(startthree2);
    startthreehfour.appendChild(startbuttt)
    startthreehfour.appendChild(startbut222);








});


})









