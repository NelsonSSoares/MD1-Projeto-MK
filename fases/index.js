function historia(){
    const historia = new Audio('../audios/historia.mp3');
    historia.play();
}

function musica(){
    const musica = new Audio('../audios/choose.mp3');
    musica.play();

    setTimeout(() => {
        window.location = 'stage1/index.html'
    }, 4000);

    const haha = new Audio('../audios/system/haha2.mp3');
    setTimeout(() => {
        haha.play() 
    }, 1000);
   
}
