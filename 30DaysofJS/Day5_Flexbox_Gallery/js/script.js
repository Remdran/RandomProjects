const panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(event){
    console.log(event.propertyName);   //Console log to get the name of the event to act on
    if(event.propertyName === 'flex-grow') {   // only proceed on a specific event happening, 
        this.classList.toggle('open-active');  // there are mulitiple events on this site
     }
}

panels.forEach(function(panel) {
    panel.addEventListener('click', toggleOpen);
});

panels.forEach(function(panel) {
    panel.addEventListener('transitionend', toggleActive);
});

//panels.forEach(panel => panel.addEventListener('click', toggleOpen));