const time = document.getElementById('time'),
    greet = document.getElementById('greeting'),
    focus =  document.getElementById('focus'),
    namee  = document.getElementById('name');

    namee.addEventListener('keypress', setItm);
    namee.addEventListener('blur', setItm);

    focus.addEventListener('keypress', setfocus);
    focus.addEventListener('blur', setfocus);


function setfocus(e){
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText)
            focus.blur();
        }
    }
    else{
        localStorage.setItem('focus', e.target.innerText);
    }
}

function setItm(event1){
    if(event1.type === 'keypress'){
        if(event1.which == 13 || event1.keyCode == 13){
            localStorage.setItem('name', event1.target.innerText);
            namee.blur();
        }
    }
    else{
        localStorage.setItem('name', event1.target.innerText);
    }
   
}

function getName(){
    if(localStorage.getItem('name') === null){
        namee.textContent = '[Enter Name]';
    }
    else{
        namee.textContent = localStorage.getItem('name');
}
    }

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = `[Type here]`;
    } 
    else{
        focus.textContent = localStorage.getItem('focus');
    }
    
}


function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    let amPm = (hour >= 12 ? 'PM' : 'AM')
    hour = (hour % 12 || 12)

    hour = hour < 9 ? ('0'+hour) : hour
    min = min < 9 ? ('0'+min) : min
    sec = sec < 9 ? ('0'+sec) : sec

    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${amPm}`
    setTimeout(showTime, 1000);
}

function setbg(){
    let today = new Date();
    let hour = today.getHours();
    if(hour < 12){
        document.body.style.backgroundImage = "url('Image/Morning.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = ' cover';
        greet.textContent = 'Good Morning';
        document.body.style.color = 'White';
    }
    else if(hour < 18){
        document.body.style.backgroundImage = "url('Image/Afternoon.jpg')";
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = ' cover';
        greet.textContent = 'Good Afternoon';
        document.body.style.color = 'White';
    }
    else {
        document.body.style.backgroundImage = "url('Image/Night.jpg')";
        document.body.style.backgroundSize = '100%';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = ' cover';
        greet.textContent = 'Good Night';
        document.body.style.color = 'White';
    }
}
setbg();
showTime();
getName();
getFocus();

