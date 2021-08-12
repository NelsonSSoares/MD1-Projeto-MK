
/*function musica(){
    const musica = new Audio('audios/choose.mp3').
    musica.play();
    musica.loop = true;
}
*/
function scorpion(){
    document.getElementById('escolhido').src = 'img/personagens/scorpion/escolhido1.gif';
    document.getElementById('escolhido').style.transform = 'scale(1.4)';
    let scorpion = document.getElementById('escolhido');
    scorpion.style.paddingBottom = '7px';
}

function subzero(){
    document.getElementById('escolhido2').src = 'img/personagens/subzero/escolhido2.gif';
    document.getElementById('escolhido2').style.transform = 'scale(1.5)';
    let subzero = document.getElementById('escolhido2');
    subzero.style.paddingBottom = '18px';
}

function ermac(){
    document.getElementById('escolhido3').src = 'img/personagens/ermac/escolhido3.gif';
    document.getElementById('escolhido3').style.transform = 'scale(1.5)';
    let ermac = document.getElementById('escolhido3');
    ermac.style.paddingLeft = '15px';
    ermac.style.paddingBottom = '23px';
}