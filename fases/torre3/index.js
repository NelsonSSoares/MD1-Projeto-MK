function musica(){
    const musica = new Audio('../../audios/choose.mp3');
    musica.play();

    setTimeout(() => {
        window.location = '../stage3/index.html'
    }, 6000);
    /*
    const haha = new Audio('../../audios/system/haha.mp3');
    setTimeout(() => {
        haha.play() 
    }, 1000);
    */
    const never = new Audio('../../audios/system/never-win.mp3');
    setTimeout(() => {
        never.play()
    }, 1900);

    document.getElementById('avatar').style.top = '230px'
   
}
function historia(){
    const historia = new Audio('../../audios/historia.mp3');
    historia.play();
}

