function musica(){
    const musica = new Audio('../../audios/choose.mp3');
    musica.play();

    setTimeout(() => {
        window.location = '../stage3/index.html'
    }, 6000);

    const haha = new Audio('../../audios/system/haha4.mp3');
    setTimeout(() => {
        haha.play() 
    }, 800);
    const laugth = new Audio('../../audios/system/iwin.mp3');
    setTimeout(() => {
        laugth.play()
    }, 2500);

    document.getElementById('avatar').style.top = '175px'
   
}
function historia(){
    const historia = new Audio('../../audios/historia.mp3');
    historia.play();
}

