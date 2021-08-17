function GameTimer(action) {
    var timer = document.querySelector('.timer span');
    let clock = 0;
    let time = 0;
    let minutes= 0;
    let seconds= 0;

    if(action === "start"){
        clock = setInterval(function() {
            time++;
            //Parse minutes and seconds
            minutes = parseInt(time / 60, 10);
            seconds = parseInt(time % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            //Output
            timer.textContent = minutes + ':' + seconds;
        }, 1000);
    }
    else {
        clearInterval(clock);
    }
    return;
}
export default GameTimer;