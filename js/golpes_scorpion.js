function soco(){
    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/soco.gif';
    const soco1 = new Audio('../../audios/scorpion/golpes/soco1.mp3');
    const soco2 = new Audio('../../audios/scorpion/golpes/soco2.mp3')
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.5)';
    setTimeout(() => {
        soco1.play();
    }, 600);
    setTimeout(() => {
        soco2.play();
    }, 800);
    setTimeout(() => {
        soco1.play();
    }, 1000);
    vidaZombie(35)
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 1000);
}

function machadada(){
    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/machadada.gif';
    const machadada = new Audio('../../audios/scorpion/golpes/machadada.mp3');
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.8)';
    machadada.play()
    vidaZombie(50)
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 1000);
}

function joelhada(){
    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/joelhada.gif';
    const joelhada = new Audio('../../audios/scorpion/golpes/joelhada.mp3');
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.5)';
    joelhada.play()
    vidaZombie(40)
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 600);
}

function comeHere(){
    const comehere = new Audio('../../audios/scorpion/golpes/comehere.mp3');
    const getoverhere = new Audio('../../audios/scorpion/golpes/getoverhere.mp3');
    const hitcorda = new Audio('../../audios/scorpion/golpes/hitcorda.mp3');
    let result = Math.random();
  
    if(result < 0.5){
        getoverhere.play();
    }else{
        comehere.play();
    }

    document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/comehere.gif';
    let scorpion = document.getElementById('img-scorpion');
    scorpion.style.transform = 'scale(1.3)';
    hitcorda.play();
    let zombie = document.getElementById('zombie');
    zombie.style.right = '710px';
    vidaZombie(30)
    setTimeout(() => {
        scorpion.style.transform = 'scale(1)';
        return document.getElementById('img-scorpion').src = '../../img/personagens/scorpion/fighter.gif';
    }, 1800);
}

function escolhaGolpe(comando){

    comando = parseInt(comando);
    
    while(comando < 1 && comando > 5){
        alert('Digite o Golpe como indicado!');
        comando =  comando = prompt(`Escolha um Golpe pelo Numero: \n
        1- Soco \n
        2- Joelhada \n
        3- Machadada \n
        4- Corda`);
    }

    switch(comando){

        case 1:
            soco();
            break;
        case 2:
            joelhada();
            break;
        case 3:
            machadada();
            break;
        case 4:
            comeHere();
            break;


    }
}