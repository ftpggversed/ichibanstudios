function play() {
    var audio = new Audio('../media/audio/bgm/cold_skies_jf.mp3');
    
    var isPlaying = false;

    function togglePlay() {
      isPlaying ? myAudio.pause() : myAudio.play();
    };
    
    myAudio.onplaying = function() {
      isPlaying = true;
    };
    myAudio.onpause = function() {
      isPlaying = false;
    };
}


