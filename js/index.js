
/*function musica(){
    const musica = new Audio('audios/choose.mp3').
    musica.play();
    musica.loop = true;
}
*/
function iniciar(){
    const destiny = new Audio('audios/system/destiny.mp3');
    destiny.play();
    const musica = new Audio('audios/choose.mp3');
   
    document.getElementById('test').innerHTML=''
    document.getElementById('test').innerHTML= ` 
<div>
    <h1 class="titulo-principal">Escolha Seu Lutador!</h1>
</div>

<section id="principal-container">
    <div id="scorpion">
        <h3 class="select-person">1 - Scorpion</h3>
        <button onclick="scorpion()" onmouseover="hover()"><img id="escolhido"src="img/personagens/scorpion/fighter.gif" alt="Scorpion"></button>
    </div>
    <div id="subzero">
        <h3 class="select-person">2 - Sub-Zero</h3>
        <button onclick="subzero()" onmouseover="hover()"><img id="escolhido2" src="img/personagens/subzero/fighter2.gif" alt="Sub-Zero"></button>
    </div>
    <div id="ermac">
        <h3 class="select-person">3 - Ermac</h3>
        <button onclick="ermac()" onmouseover="hover()"><img id="escolhido3" src="img/personagens/ermac/fighter3.gif" alt="Ermac"></button>
    </div>
    <!--<audio src="audios/choose.mp3" autoplay loop></audio>-->
    
</section> `
    musica = setTimeout(() => {
        musica.play();
        musica.loop = true;
    },  0400);
}

function scorpion(){
    document.getElementById('escolhido').src = 'img/personagens/scorpion/escolhido1.gif';
    document.getElementById('escolhido').style.transform = 'scale(1.4)';
    let scorpion = document.getElementById('escolhido');
    scorpion.style.paddingBottom = '13px';
    const audio = new Audio('audios/scorpion/nome/nome.mp3');
    audio.play();
    setTimeout(() => {
        window.location = 'fases/scorpion.html'
    }, 1500);
}

function subzero(){
    document.getElementById('escolhido2').src = 'img/personagens/subzero/escolhido2.gif';
    let subzero = document.getElementById('escolhido2');
    subzero.style.paddingBottom = '30px';
    document.getElementById('escolhido2').style.transform = 'scale(1.3)';
    const audio = new Audio('audios/subzero/nome/nome.mp3');
    audio.play();
    setTimeout(() => {
        window.location = 'fases/subzero.html'
    }, 1000);
}

function ermac(){
    document.getElementById('escolhido3').src = 'img/personagens/ermac/escolhido3.gif';
    let ermac = document.getElementById('escolhido3');
    ermac.style.paddingLeft = '18px';
    ermac.style.paddingBottom = '40px';
    document.getElementById('escolhido3').style.transform = 'scale(1.5)';
    const audio = new Audio('audios/ermac/nome/nome.mp3');
    audio.play();
    setTimeout(() => {
        window.location = 'fases/ermac.html'
    }, 1500);
}
function hover(){
    const hover = new Audio('audios/system/hover/hover.mp3');
    hover.play();
    
}
