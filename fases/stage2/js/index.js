/***************
 * VIDA ZUMBIES*
 * VIDA PLAYER * 
 ***************/
/*atrasar script para ser gerado no dom*/
 var lifezombie = 100;
 var lifezombie1 = 100;
 var lifezombie2 = 100;
 var lifePlayer = 100;
 
 
//alert('Subzero: Scorpion?');

setTimeout(() => {
    round1()
    spawnzombie()
    setTimeout(() => {
        comeHere()
    }, 1000);
   setTimeout(() => {
       alert('Subzero: Scorpion? \n chegou na hora certa, precisamos da sua ajuda!')
   }, 2000);
}, 3000);

setInterval(() => {
    
    setTimeout(() => {
        
        spawnzombie1()
        spawnzombie2()
     
    }, 2000);
    setTimeout(() => {
        golpe = Math.random();
        if(golpe <= 0.5){
            giratorio()
        }else{
            levitar();
        }
    }, 2250);
    setTimeout(() => {
        comboSub()
    }, 3000);
}, 5000);

setTimeout(() => {
   setTimeout(() => {
    let comando = prompt(`Escolha um Golpe pelo Numero: 
    1- Soco 
    2- Joelhada 
    3- Machadada 
    4- Corda`);

    escolhaGolpe(comando)
   }, 1000);

   setTimeout(() => {
    let comando = prompt(`Escolha um Golpe pelo Numero: 
    1- Soco 
    2- Joelhada 
    3- Machadada 
    4- Corda`);

    escolhaGolpe(comando)
   }, 5000);
}, 8000);

