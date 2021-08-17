function aparecer(){
    setTimeout(() => {
        document.getElementById('img-ermac').style.opacity = '100%'
        document.getElementById('img-subzero').style.opacity ='100%'
    }, 1700);
    setTimeout(() => {

        document.getElementById('img-ermac').src = '../../img/personagens/ermac/fighter3.gif' 
        let ermac = document.getElementById('img-ermac');
        ermac.style.transition = '0s'
        ermac.style.top = '120px'
        ermac.style.width = '85px';
        ermac.style.height = '130px';
    }, 2500);
}


function batalha(){
    alert('testando broco de batalha');
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
    alert('Ermac: Sim, Eles irão atras de nós, \n pois temos que reconhecer que somos os lutadores \n mais fortes de cada reino, nossas almas são valiosas.');
    batalha();
}, 2600);

