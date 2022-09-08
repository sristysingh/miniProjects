const inc = document.getElementById('inc')
const reset = document.getElementById('reset')
const dec = document.getElementById('dec')
const displayname = document.getElementById('displayname')
inc.addEventListener('click', change);
reset.addEventListener('click', change);
dec.addEventListener('click', change);
var i=0;


function add(){
    return i += 1;
}
function ret(){
    return i=0;
}
function minus(){
    return i -= 1;
}

function change(e){
    var clicked = e.target;
    console.log(clicked)
    
    if(clicked === inc){
        displayname.innerText = add();
    }
    else if(clicked === reset){
        displayname.innerText = ret();
    }
    else if(clicked === dec){
        displayname.innerText = minus();
    }
}