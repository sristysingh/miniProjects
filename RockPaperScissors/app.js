const restart = document.getElementById('restart');
const score = document.getElementById('score');
const choices = document.querySelectorAll('.choice');
const result = document.getElementById('result');
const modal =  document.querySelector('.modal');

 const scoreboard = {
     player: 0,
     computer: 0
 }

 function play(e){
     restart.style.display = 'inline-block';
     const playerChoice = e.target.id;
     const computerChoice = getComputerChoice();
     const winner = getWinner(playerChoice, computerChoice);
     showWinner(winner, computerChoice);
     
 }

function getComputerChoice(){
    const  rand = Math.random();
    if(rand < 0.34){
        return 'rock';
    }
    else if(rand <= 0.64){
        return 'paper';
    }
    else{
        return 'scissors'
    }
}

function getWinner(p,c){
    if(p === c){
        return 'Draw';
    }
    else if(p === 'rock'){
        if(c === 'paper'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'paper'){
        if(c === 'scissor'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
    else if(p === 'scissor'){
        if(c === 'rock'){
            return 'computer';
        }
        else{
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice){
    if(winner === 'player'){
        scoreboard.player++;
        result.innerHTML = `
        <h1 class="text-win"> You Win </h1>
        <i class=" fa-solid fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `;
    }
    else if(winner === 'computer'){
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class="text-loose"> You Lose </h1>
        <i class=" fa-solid fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} </strong> </p>
        `;
    }
    else{
        result.innerHTML = `
        <h1>It's a Draw </h1>
        <i class=" fa-solid fa-hand-${computerChoice} fa-10x"></i>
        <p> Computer chose <strong> ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} </strong> </p>
        `;
}
score.innerHTML = `
<p>Player: ${scoreboard.player}</p>
<p>Computer: ${scoreboard.computer}</p>
`;
modal.style.display = 'block';
}

function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
    
}

function remove(e){
    if(e.target === modal)
   modal.style.display = 'none';
}
choices.forEach(choice => {
    choice.addEventListener('click', play)
})
window.addEventListener('click', remove);
restart.addEventListener('click', restartGame);
