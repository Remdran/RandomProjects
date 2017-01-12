
function removeTransition(e) {
    if(e.propertyName !== 'transform')     // Skip if its not a transform
        return;

    this.classList.remove('playing');
}

function playSound(e) {    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    console.log(document.querySelector(`div[data-key="${e.keycode}"]`));

    if(!audio)
        return;
    
    key.classList.add('playing');

    audio.currentTime = 0;  // Rewind to the start
    audio.play();
}


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound); 

