/***************
 * VIDA ZUMBIES* 
 ***************/

var lifezombie = 100;
var lifePlayer = 100;

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

function desaparecer(){
    document.getElementById('img-ermac').src = '../../img/personagens/ermac/levitar.gif';
    let ermac = document.getElementById('img-ermac');
    let subzero = document.getElementById('img-subzero');

    ermac.style.width = '130px';
    ermac.style.height = '165px';
    ermac.style.top = '60px';
    ermac.style.transition = '1s all';
    subzero.style.transition = '1s all';
    ermac.style.opacity = '0%';
    subzero.style.opacity = '0%';
}




/********************
 * HISTOOOOOORIAAAA 
 ********************/
function ulimaLutaStg1(){

    spawnzombie()

    setTimeout(() => {
        round1()
    }, 1000);
   
    
    setTimeout(() => {
        let comando = prompt('Digite { corda } para puxar o Inimigo!');
        comando = comando.toLowerCase();
        while(comando !== 'corda'){
            alert('Comando Inválido');
            comando = prompt('Digite corda para puxar o Inimigo!');
            comando = comando.toLowerCase();
        }
        comeHere()
    }, 5000);
    
    setTimeout(() => {
       comando = prompt(`Escolha um Golpe pelo Numero:
        1- Soco
        2- Joelhada
        3- Machadada
        4- Corda`);

        escolhaGolpe(comando);

    }, 10000);

    setTimeout(() => {
        comando = prompt(`Escolha um Golpe pelo Numero:
        1- Soco
        2- Joelhada
        3- Machadada
        4- Corda`);
        escolhaGolpe(comando)
    }, 15000);

    setTimeout(() => {
        scorpionWins();
        alert('Scorpion: Preciso ir ao Plano-Terreno ajuda-los contra Shao Kahn');   
     }, 20000);

     setTimeout(() => {
        location = '../torre2/torre.html'
     }, 25000);
    
    
}

function scorpionBattle(){
    round1();
    setTimeout(() => {
        let comando = prompt('Digite { corda } para puxar o Inimigo!');
        comando = comando.toLowerCase();
        while(comando !== 'corda'){
            alert('Comando Inválido');
            comando = prompt('Digite corda para puxar o Inimigo!');
            comando = comando.toLowerCase();
        }
        comeHere()
        
        setTimeout(() => {
            comando = prompt(`Escolha um Golpe pelo Numero:
            1- Soco
            2- Joelhada
            3- Machadada
            4- Corda`);

            escolhaGolpe(comando);

        }, 2000);
        
        setTimeout(() => {
            comando = prompt(`Escolha um Golpe pelo Numero:
            1- Soco
            2- Joelhada
            3- Machadada
            4- Corda`);
            escolhaGolpe(comando)
        }, 6000);
        
        setTimeout(() => {
            comando = confirm('Zombie: grrr tsc voces.. nun.. ganhaar');
            if(comando == true || comando == false){
                ulimaLutaStg1()
            }
        }, 13000);
    }, 1500);
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
        setTimeout(() => {
            document.getElementById('img-ermac').style.transform ='scaleX(-1)';
            document.getElementById('img-subzero').style.transform = 'scaleX(-1)';
            let aceite = confirm('Scorpion: ERMAC!! Do meu reino eu cuido.. \n vá com Subzero defeder o plano terreno! \n Encontro vocês depois!');
            if(aceite == true || aceite == false){
                setTimeout(() => {
                 spawnzombie();
                 desaparecer();
                 scorpionBattle()
                }, 3000);
             }
             alert('Subzero: Vamos Ermac..!!');
        }, 2000);
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

