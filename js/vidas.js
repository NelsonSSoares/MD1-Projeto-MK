function vidaPlayer(){
    return window.location ='gameover.html'
}
function spawnzombie(){
    let cenario = document.getElementById('cenario');
    let divzombie = document.createElement('div');
    const zombie = document.createElement('img');
    let subzero = document.getElementById('subzero');
    
    zombie.src = '../../img/personagens/zombie/zombiefighter.gif'
    zombie.className = 'zombie';
    zombie.style.opacity = '100%';
    cenario.appendChild(divzombie)
    divzombie.appendChild(zombie);
    cenario.insertBefore(divzombie, subzero);
    zombie.id = 'zombie';
    divzombie.id = 'divzombie';
    lifezombie = 100;
}
function spawnzombie1(){
    let cenario = document.getElementById('cenario');
    let divzombie = document.createElement('div');
    const zombie1 = document.createElement('img');
    let subzero = document.getElementById('subzero');
    
    zombie1.src = '../../img/personagens/zombie/zombiefighter.gif'
    zombie1.className = 'zombie1';
    zombie1.style.opacity = '100%';
    cenario.appendChild(divzombie)
    divzombie.appendChild(zombie1);
    cenario.insertBefore(divzombie, subzero);
    zombie1.id = 'zombie1';
    divzombie.id = 'divzombie';
    lifezombie1 = 100;
}
function spawnzombie2(){
    let cenario = document.getElementById('cenario');
    let divzombie = document.createElement('div');
    const zombie2 = document.createElement('img');
    let subzero = document.getElementById('subzero');
    
    zombie2.src = '../../img/personagens/zombie/zombiefighter.gif'
    zombie2.className = 'zombie2';
    zombie2.style.opacity = '100%';
    cenario.appendChild(divzombie)
    divzombie.appendChild(zombie2);
    cenario.insertBefore(divzombie, subzero);
    zombie2.id = 'zombie2';
    divzombie.id = 'divzombie';
    lifezombie2 = 100;
}


function vidaZombie(dano){
    const dano1 = new Audio('../../audios/system/dano/danozombie.mp3');
    const morreu = new Audio('../../audios/system/dano/morreuzombie.mp3');
    
    dano = parseInt(dano)

   if(dano > 0 && lifezombie > 0){
    dano1.play()
    lifezombie = lifezombie - dano;
    document.getElementById('zombie').src = '../../img/personagens/zombie/dano.gif'
    console.log(lifezombie)
    setTimeout(() => {
        return document.getElementById('zombie').src = '../../img/personagens/zombie/zombiefighter.gif'
    }, 300);
   }

    if(lifezombie <= 0){
       
        document.getElementById('zombie').src = '../../img/personagens/zombie/dano.gif'   
       setTimeout(() => {
        morreu.play();
        document.getElementById('zombie').remove()
        console.log('morreu')
       }, 300);
    
    }
    
}
function vidaZombie1(dano){
    const dano1 = new Audio('../../audios/system/dano/danozombie.mp3');
    const morreu = new Audio('../../audios/system/dano/morreuzombie.mp3');
    
    dano = parseInt(dano)

   if(dano > 0 && lifezombie1 > 0){
    dano1.play()
    lifezombie1 = lifezombie1 - dano;
    document.getElementById('zombie1').src = '../../img/personagens/zombie/dano.gif'
    console.log(lifezombie1)
    setTimeout(() => {
        return document.getElementById('zombie1').src = '../../img/personagens/zombie/zombiefighter.gif'
    }, 300);
   }

    if(lifezombie1 <= 0){
       
        document.getElementById('zombie1').src = '../../img/personagens/zombie/dano.gif'   
        setTimeout(() => {
        morreu.play();
        document.getElementById('zombie1').remove()
        console.log('morreu')
       }, 300);
    
    }
    
}
function vidaZombie2(dano){
    const dano1 = new Audio('../../audios/system/dano/danozombie.mp3');
    const morreu = new Audio('../../audios/system/dano/morreuzombie.mp3');
    
    dano = parseInt(dano)

   if(dano > 0 && lifezombie2 > 0){
    dano1.play()
    lifezombie2 = lifezombie2 - dano;
    document.getElementById('zombie2').src = '../../img/personagens/zombie/dano.gif'
    console.log(lifezombie2)
    setTimeout(() => {
        return document.getElementById('zombie2').src = '../../img/personagens/zombie/zombiefighter.gif'
    }, 300);
   }

    if(lifezombie <= 0){
       
        document.getElementById('zombie2').src = '../../img/personagens/zombie/dano.gif'   
       setTimeout(() => {
        morreu.play();
        document.getElementById('zombie2').remove()
        console.log('morreu')
       }, 300);
    
    }
    
}
/*
function vidaZombie(dano){
    const dano1 = new Audio('../../audios/system/dano/danozombie.mp3');
    const morreu = new Audio('../../audios/system/dano/morreuzombie.mp3');
    let vida = 100;

    dano = parseInt(dano)

   if(dano > 0 && vida > 0){
    dano1.play()
    vida = vida - dano;
    console.log(vida)
   }

    if(vida <= 0){
        morreu.play();
        document.getElementById('zombie').remove()
        console.log('morreu')
    }
    
}
*/

