function round1(){
    let cenario = document.getElementById('cenario');
    let divround1 = document.createElement('div');
    const round1 = document.createElement('img');
    const fight = new Audio('../../audios/system/fight.mp3');
    let subzero = document.getElementById('subzero');
    
    fight.play()
    round1.src = '../../img/system/fight.gif'
    round1.className = 'round1';
    round1.style.opacity = '100%';
    round1.id='round1'
    cenario.appendChild(divround1)
    divround1.appendChild(round1);
    cenario.insertBefore(divround1, subzero);
    setTimeout(() => {
        document.getElementById('round1').remove()
    }, 2000);
}

function scorpionWins(){
    const scorpionWins = new Audio('../../audios/scorpion/nome/wins.mp3');

    setTimeout(() => {
        scorpionWins.play()
    }, 2000);
}