function levitar(){
    document.getElementById('img-ermac').src = '../../img/personagens/ermac/levitar.gif';
    let ermac = document.getElementById('img-ermac');
    ermac.style.transform = 'scale(1.4)';
    ermac.style.top = '100px';
    let zombie = document.getElementById('zombie');
    zombie.style.top = '50px';
    setTimeout(() => {
        zombie.style.top = '130px'
    }, 1000);
    setTimeout(() => {
        zombie.src = '../../img/personagens/zombie/dano.gif'
    }, 1200);
    setTimeout(() => {
        ermac.style.top = '120px'
        ermac.style.transform = 'scale(1)';
        vidaZombie(100)
        return document.getElementById('img-ermac').src = '../../img/personagens/ermac/fighter3.gif';
    }, 1500);
}


function giratorio(){
    document.getElementById('img-ermac').src = '../../img/personagens/ermac/giratorio.gif'
    const giratorio = new Audio('../../audios/ermac/golpes/giratorio.mp3');
    const hitgiratorio = new Audio('../../audios/ermac/golpes/hitgiratorio.mp3');
    ermac = document.getElementById('img-ermac');
    setTimeout(() => {
        giratorio.play()
    }, 500);
    
    setTimeout(() => {
        hitgiratorio.play()
    }, 1000);
    setTimeout(() => {
        vidaZombie1(100)
    }, 1000);
    setTimeout(() => {
        return  ermac.src = '../../img/personagens/ermac/fighter3.gif'
    }, 1000);
}