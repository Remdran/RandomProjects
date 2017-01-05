/*
 *   Create the canvas 800*800 with a black background
 */
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var WIDTH = canvas.width = 800;
var HEIGHT = canvas.height= 800;
document.body.appendChild(canvas);
canvas.style.border = '1px solid black';


//-------------------------------------------------------------------------
// Player ship
//-------------------------------------------------------------------------
var player = {
    x : 0,
    y : 0,
    speed: 30,
    hp : 5
};

//-------------------------------------------------------------------------
// Enemy ship
//-------------------------------------------------------------------------
var enemy = {
    x : 10,
    y : 10,
    speed: 10,
    hp : 1
};



//-------------------------------------------------------------------------
// Handle player movement
//-------------------------------------------------------------------------

document.onkeydown = function(event) {
    if(event.keyCode == 68) //d 
        player.pressingRight = true;
    else if(event.keyCode == 83) //s 
        player.pressingDown = true;
    else if(event.keyCode == 65) //a
        player.pressingLeft = true;
    else if(event.keyCode == 87) //w
        player.pressingUp = true; 
}

document.onkeyup = function(event) {
    if(event.keyCode == 68) //d 
        player.pressingRight = false;
    else if(event.keyCode == 83) //s 
        player.pressingDown = false;
    else if(event.keyCode == 65) //a
        player.pressingLeft = false;
    else if(event.keyCode == 87) //w
        player.pressingUp = false; 
}

updatePlayerPositon = function() {
    if(player.pressingRight)
        player.x += 10;
    if(player.pressingLeft)
        player.x -= 10;
    if(player.pressingUp)
        player.y -= 10;
    if(player.pressingDown)
        player.y += 10;

}

//-------------------------------------------------------------------------
// Update loop
//-------------------------------------------------------------------------
var update = function() {
    ctx.clearRect(0,0, WIDTH, HEIGHT);
    enemy.x += 10;
    enemy.y += 10;    

    updatePlayerPositon();
    render();
}

//-------------------------------------------------------------------------
// Render
//-------------------------------------------------------------------------
var render = function() {   
    ctx.fillRect(enemy.x, enemy.y, 20, 20);
    ctx.fillRect(player.x, player.y, 30, 30);
}

setInterval(update,40);
