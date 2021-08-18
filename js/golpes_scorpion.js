function soco(){
    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/soco.gif';
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.5)';
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 1000);
}

function machadada(){
    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/machadada.gif';
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.8)';
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 1000);
}

function joelhada(){
    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/joelhada.gif';
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.5)';
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 600);
}

function comeHere(){
    const comehere = new Audio('../../audios/scorpion/golpes/comehere.mp3');
    const getoverhere = new Audio('../../audios/scorpion/golpes/getoverhere.mp3');
    let result = Math.random();
  
    if(result < 0.5){
        getoverhere.play();
    }else{
        comehere.play();
    }

    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/comehere.gif';
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.3)';
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 1800);
}

