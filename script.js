var puck_x = 360;
var puck_y = 310;
var speed = 50;

document.getElementById('puck').style.top = puck_y+'px';
document.getElementById('puck').style.left = puck_x+'px';

function logCoordinates() {
    console.log('x:'+puck_x+' y:'+puck_y);
}
function checkCollision() {
    if (puck_x > 250 && puck_x < 350 && puck_y < 220 && puck_y > 150) {
        document.getElementById('gap').style.backgroundColor = "red";
        document.getElementById('puck').style.height = "20px";
        document.getElementById('puck').style.width = "20px";
    }
    else {
        document.getElementById('gap').style.backgroundColor = "white";
    }
}

function biggerPuck() {
    if (puck_x == 260 && puck_y == 60) {
        document.getElementById('puck').style.height = "30px";
        document.getElementById('puck').style.width = "30px";
        
    }
}

function smallerPuck() {
    if (puck_x == 410 && puck_y == 310) {
        document.getElementById('puck').style.height = "15px";
        document.getElementById('puck').style.width = "15px";
    }
}

document.getElementById('right').addEventListener('click', function() {
    puck_x += speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    
});

document.getElementById('left').addEventListener('click', function() {
    puck_x -= speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
});

document.getElementById('up').addEventListener('click', function() {
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
});

document.getElementById('down').addEventListener('click', function() {
    puck_y += speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
});




/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/


