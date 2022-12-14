
window.addEventListener('load', () => {
    inputs = Array.from(document.getElementsByClassName('number')); 
    clock = document.querySelector('.clock');     
});

function startTimer() { 
    parseTime(); 
    setTimer();  
    countdown()  
}

function setTimer() {
       clock.innerHTML = `<p class="number">${hours > 9 ? hours : ('0' + hours)}</p><span>hs</span><p class="number">${minutes > 9 ? minutes : ('0' + minutes)}</p><span>min</span><p class="number">${seconds > 9 ? seconds : ('0' + seconds)}</p><span>sec</span>`;

}
function parseTime() {

    hours = parseInt(inputs[0].value);
    minutes = parseInt(inputs[1].value);
    seconds = parseInt(inputs[2].value);

}


function countdown() {
    repeater = setInterval(runner,1000);
}


function runner() {
  
    
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            if (hours > 0 ) {
                seconds = 59;
                minutes = 59;
                hours--;
            } else {
                alarm.play();
            }
        }
    }
    
    setTimer();
}

function stopTimer(){
    clearInterval(repeater);
    // location.reload();
}

function resetTimer(){
  clearInterval(repeater);
  location.reload();
}