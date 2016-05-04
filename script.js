var puck_x = 210;
var puck_y = 210;
var speed = 50;

document.getElementById('puck').style.top = puck_y+'px';
document.getElementById('puck').style.left = puck_x+'px';

function logCoordinates() {
    console.log('x:'+puck_x+' y:'+puck_y);
}
function checkCollision() {
    if (puck_x > 250 && puck_x < 350 && puck_y < 220 && puck_y > 150) {
        document.getElementById('gap').style.backgroundColor = "red";
    }
    else {
        document.getElementById('gap').style.backgroundColor = "white";
    }

}

function biggerPuck() {
    if (puck_x == 410 && puck_y == 310) {
        console.log("collision.detected");
    }
}

function smallerPuck() {
    console.log("small")
}

document.getElementById('right').addEventListener('click', function() {
    puck_x += speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    
});

document.getElementById('left').addEventListener('click', function() {
    puck_x -= speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
});

document.getElementById('up').addEventListener('click', function() {
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
});

document.getElementById('down').addEventListener('click', function() {
    puck_y += speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
});




/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/


