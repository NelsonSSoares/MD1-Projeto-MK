function aparecer(){
    setTimeout(() => {
        document.getElementById('img-ermac').style.opacity = '100%'
        document.getElementById('img-subzero').style.opacity ='100%'
    }, 1700);
    setTimeout(() => {

        document.getElementById('img-ermac').src = '../../img/personagens/ermac/fighter3.gif' 
        let ermac = document.getElementById('img-ermac');
        ermac.style.transition = '0s all'
        ermac.style.top = '120px'
        ermac.style.width = '85px';
        ermac.style.height = '130px';
        let subzero = document.getElementById('img-subzero');
        subzero.style.transition = '0s all'
    }, 2500);
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
}


function batalha(){
    spawnzombie();
    setTimeout(() => {
        alert('Zombie: Grrr');
        alert('Ermac: hã?');
        alert('Subzero: A invasão ja começou!');
        document.getElementById('img-ermac').style.transform ='scaleX(1)';
        document.getElementById('img-subzero').style.transform = 'scaleX(1)';
        levitar()
        
    }, 1500);
    
}

aparecer()

setTimeout(() => {
    alert('Scorpion: hã?');
    alert('Ermac: SCORPION!');
    alert('Scorpion: O que vocês querem?');
    alert('Subzero: Precisamos que nos ajude contra Shao Kahn, \n ele tem um amuleto poderoso, que pode trazer guerreiros de volta dos mortos.');
    alert('Scorpion: e porque eu deveria ajudar vocês?');
    alert('Ermac: ele pretende invadir todos os reinos,\n quebrando as regras dos deuses ancestrais');
    alert('Scorpion: Esta traindo Shao Kahn, Ermac?');
    alert('Ermac: Ele pretendia usar as almas de que sou formado \n para acelerar e fortalecer o seu exercito Zombie.. \n e tambem quero libertar a Exoterra da sua tirania..');
    alert('Subzero: Alem de tudo Scorpion.. \n Quan Chi esta ajudando Shao Khan em troca do seu Reino.');
    alert('Scorpion: Aquele desgraçado! \n eu vou ajudar vocês, mas não confundam as coisas\n ainda tenho minhas desconfianças com você SUBZERO!');
    alert('Subzero: te entendo Scorpion.. \n mas Não temos muito tempo');
    let battle = confirm('Ermac: Sim, Eles irão atras de nós, \n pois temos que reconhecer que somos os lutadores \n mais fortes de cada reino, nossas almas são valiosas.');
        if(battle == true || battle == false){
           setTimeout(() => {
            batalha();
           }, 1000); 
        }
}, 2600);

