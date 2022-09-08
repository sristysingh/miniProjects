const btn = document.getElementById('btn').addEventListener('click', flip);
const color = document.querySelector('.color');
const colorSet = ["Green", "Blue", "Red", "Yellow"];
const body = document.getElementsByTagName('body');

function flip(){
    var randomNum = getRandomNum();
    document.body.style.backgroundColor = colorSet[randomNum];
    color.textContent = colorSet[randomNum];
}
function getRandomNum(){
    return Math.floor(Math.random()*colorSet.length);
}

