var puck_x = 160;
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
        document.getElementById('puck').style.height = "12px";
        document.getElementById('puck').style.width = "12px";
    }
}

function arenaBorder() {
    if (puck_x > 560 || puck_x < 10 || puck_y < 10 || puck_y > 360) {
       document.getElementById('puck').style.backgroundColor = "red"
       }
    else {
        document.getElementById('puck').style.backgroundColor = "yellow"
    }
}

document.getElementById('right').addEventListener('click', function() {
    puck_x += speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    arenaBorder();
    
});

document.getElementById('left').addEventListener('click', function() {
    puck_x -= speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    arenaBorder();
});

document.getElementById('up').addEventListener('click', function() {
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    arenaBorder();
});

document.getElementById('down').addEventListener('click', function() {
    puck_y += speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    arenaBorder();
});





