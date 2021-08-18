function musica(){
    const musica = new Audio('../../audios/choose.mp3');
    musica.play();

    setTimeout(() => {
        window.location = '../stage1/index.html'
    }, 6000);

    const haha = new Audio('../../audios/system/haha2.mp3');
    setTimeout(() => {
        haha.play() 
    }, 1000);
    const laugth = new Audio('../../audios/system/laught.mp3');
    setTimeout(() => {
        laugth.play()
    }, 2500);

    document.getElementById('avatar').style.top = '290px'
   
}
function historia(){
    const historia = new Audio('../../audios/historia.mp3');
    historia.play();
}

