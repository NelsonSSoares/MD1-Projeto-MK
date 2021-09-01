function comboSub(){
    document.getElementById('img-subzero').src = '../../img/personagens/subzero/combo.gif';
    let subzero = document.getElementById('img-subzero');
    const soco1 = new Audio('../../audios/scorpion/golpes/soco1.mp3');
    const soco2 = new Audio('../../audios/scorpion/golpes/soco2.mp3');
    const chute = new Audio('../../audios/ermac/golpes/giratorio.mp3');
    const hitchute = new Audio('../../audios/subzero/golpes/hitgiratorio.mp3');

    subzero.style.transition = '0s all' 
    subzero.style.height = '200px';
    subzero.style.width = '150px';
    subzero.style.left = '75px';
    subzero.style.top = '340px';

   
    setTimeout(() => {
        soco1.play();
    }, 200);

    setTimeout(() => {
        soco2.play()
    }, 500);
    setTimeout(() => {
        soco1.play()
    }, 800);
    setTimeout(() => {
        chute.play()
    }, 1000);
    setTimeout(() => {
        hitchute.play();
    }, 1300);
    setTimeout(() => {
        subzero.style.width = '100px';
        subzero.style.height = '134px';
        subzero.style.top = '400px';
        subzero.style.left = '120px'
        return document.getElementById('img-subzero').src = '../../img/personagens/subzero/fighter2.gif';
    }, 1300);
    setTimeout(() => {
        vidaZombie2(100)
       
    }, 1500);
    
}