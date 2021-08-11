function musica(){
    let musica = new Audio('../audios/choose.mp3')
    musica.play();
}
function scorpion(){
    document.getElementById('escolhido').src = '../img/personagens/scorpion/escolhido1.gif';
    document.getElementById('escolhido').style.transform = 'scale(1.3)';

}

function subzero(){
    document.getElementById('escolhido2').src = '../img/personagens/subzero/escolhido2.gif';
    document.getElementById('escolhido2').style.transform = 'scale(1.3)';
}

function ermac(){
    document.getElementById('escolhido3').src = '../img/personagens/ermac/escolhido3.gif';
    document.getElementById('escolhido3').style.transform = 'scale(1.3)';
}