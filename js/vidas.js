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
function vidaPlayer(){

    return window.location ='gameover.html'
}
function vidaZombie(dano){
    const dano1 = new Audio('../../audios/system/dano/danozombie.mp3');
    const morreu = new Audio('../../audios/system/dano/morreuzombie.mp3');
    let vida = 100;

    dano = parseInt(dano)

   if(dano > 0 && vida > 0){
    dano1.play()
    lifezombie = lifezombie - dano;
    console.log(lifezombie)
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

