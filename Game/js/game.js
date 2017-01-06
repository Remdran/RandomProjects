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
    x : 450,
    y : 780,
    speed: 30,
    hp : 5,
    spriteHeight : 20,
    spriteWidth : 60
};

//-------------------------------------------------------------------------
// Enemy ship
//-------------------------------------------------------------------------

var enemyManager = {};


function Enemy(id, x, y, hp, spriteHeight, spriteWidth) {
    var enemy = {
        x : x,
        y : y,
        speed: 2,
        hp : hp,
        spriteHeight :spriteHeight,
        spriteWidth : spriteWidth,
        id: id   
    };
    enemyManager[id] = enemy;
}

//-----------------------------------------------------------------------
// Row 1
//-----------------------------------------------------------------------
Enemy('enemy1', 80, 350, 1, 50, 50);
Enemy('enemy2', 150, 350, 1, 50, 50);
Enemy('enemy3', 220, 350, 1, 50, 50);
Enemy('enemy4', 290, 350, 1, 50, 50);
Enemy('enemy5', 360, 350, 1, 50, 50);
Enemy('enemy6', 430, 350, 1, 50, 50);
Enemy('enemy7', 500, 350, 1, 50, 50);
Enemy('enemy8', 570, 350, 1, 50, 50);
Enemy('enemy9', 640, 350, 1, 50, 50);

//-----------------------------------------------------------------------
// Row 2
//-----------------------------------------------------------------------
Enemy('enemy10', 80, 280, 1, 50, 50);
Enemy('enemy11', 150, 280, 1, 50, 50);
Enemy('enemy12', 220, 280, 1, 50, 50);
Enemy('enemy13', 290, 280, 1, 50, 50);
Enemy('enemy14', 360, 280, 1, 50, 50);
Enemy('enemy15', 430, 280, 1, 50, 50);
Enemy('enemy16', 500, 280, 1, 50, 50);
Enemy('enemy17', 570, 280, 1, 50, 50);
Enemy('enemy18', 640, 280, 1, 50, 50);

//-------------------------------------------------------------------------
// Handle player movement
//-------------------------------------------------------------------------

document.onkeydown = function(event) {
    if(event.keyCode == 68) //d 
        player.pressingRight = true;
    else if(event.keyCode == 65) //a
        player.pressingLeft = true;
}

document.onkeyup = function(event) {
    if(event.keyCode == 68) //d 
        player.pressingRight = false;    
    else if(event.keyCode == 65) //a
        player.pressingLeft = false;
    
}

updatePlayerPositon = function() {
    if(player.pressingRight)
        player.x += 10;
    if(player.pressingLeft)
        player.x -= 10;

    if(player.x > WIDTH - player.spriteWidth)
        player.x = WIDTH - player.spriteWidth;
    if(player.x < 0)
        player.x = 0; 
}

//-------------------------------------------------------------------------
// Update Enemy
//-------------------------------------------------------------------------
var updateEntity = function(entity){

    entity.x += entity.speed;

    if (entity.x > WIDTH - entity.spriteWidth) {
        for (var key in enemyManager) {
            enemyManager[key].y += 70;
            enemyManager[key].speed = -enemyManager[key].speed;
        }
    }

    if (entity.x < 0) {
        for (var key in enemyManager) {
            enemyManager[key].y += 70;
            enemyManager[key].speed = -enemyManager[key].speed;
        }
    }

    if(entity.y === 700)
        console.log("Game Over!");

    ctx.fillRect(entity.x, entity.y, entity.spriteWidth, entity.spriteHeight);
}

//-------------------------------------------------------------------------
// Update loop
//-------------------------------------------------------------------------
var update = function() {
    ctx.clearRect(0,0, WIDTH, HEIGHT);

    for (var key in enemyManager){
        updateEntity(enemyManager[key]);
    }

    //updateEntity();
    updatePlayerPositon();
    render();
}

//-------------------------------------------------------------------------
// Render
//-------------------------------------------------------------------------
var render = function() {   
        
    // ctx.fillRect(enemy.x, enemy.y, enemy.spriteWidth, enemy.spriteHeight);
    // ctx.fillRect(enemy2.x, enemy2.y, enemy2.spriteWidth, enemy2.spriteHeight);
    ctx.fillRect(player.x, player.y, player.spriteWidth, player.spriteHeight);
}

setInterval(update,40);