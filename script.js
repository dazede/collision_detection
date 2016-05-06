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

function coinDisappear() {
    if (puck_x == 260 && puck_y == 60) {
        document.getElementById('coin').style.height = "200px";
        document.getElementById('coin').style.width = "200px";
    }
}

function smallerPuck() {
    if (puck_x == 410 && puck_y == 310) {
        document.getElementById('puck').style.height = "12px";
        document.getElementById('puck').style.width = "12px";
    }
}

function upperBorder() {
    if (puck_y < 60 ) {
        puck_y = 60
    }
    else if (puck_x < 60) {
        puck_x = 60
    }
    else if (puck_x > 510){
        puck_x = 510
    }
    else if (puck_y > 310) {
        puck_y = 310
    }
}




document.getElementById('right').addEventListener('click', function() {
    puck_x += speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    upperBorder();
    coinDisappear();
    
});

document.getElementById('left').addEventListener('click', function() {
    puck_x -= speed;
    document.getElementById('puck').style.left = puck_x+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    upperBorder();
    coinDisappear();
    
});

document.getElementById('up').addEventListener('click', function() {
    puck_y -= speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    upperBorder();
    coinDisappear();
    
});

document.getElementById('down').addEventListener('click', function() {
    puck_y += speed;
    document.getElementById('puck').style.top = puck_y+'px';
    logCoordinates();
    checkCollision();
    biggerPuck();
    smallerPuck();
    upperBorder();
    coinDisappear();
    
});





