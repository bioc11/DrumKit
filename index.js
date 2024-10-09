function playSound (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return; //stop the function from running

    audio.currentTime = 0; //rewinds audio so it can be played again 
    audio.play();

    key.classList.add('playing'); // Add the 'playing' class to the key
}

// Removes the 'playing' class when the transition ends
function removeTransition(e){
    if(e.propertyName !== 'transform') return; //Only remove transition if it's a transform

    this.classList.remove('playing'); //fade out transition after time specified in css 
}

// Attach event listeners to each key for the transition end event
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Attach event listener to window for keydown event to trigger sound playing
window.addEventListener('keydown', playSound); 

// using https://keycode.info/ data
