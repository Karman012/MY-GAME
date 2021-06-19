var p1, p2, p3, p4;
var jump1, jump2;
var bg;
var player;

function preload(){
    bg = loadImage("image/mountain.jpeg");
    p1 = loadImage("image/p1.jpg");
    p2 = loadImage("image/p2.jpg");
    p3 = loadImage("image/p3.jpg");
    p4 = loadImage("image/p4.jpg");
    jump1 = loadAnimation("image/jump1.jpg", "image/jump2.jpg");
    
}

function setup(){
createCanvas(500, 700);

player = createSprite(100, 200, 10, 10);
player.addImage("p1");

}

function draw(){
background(bg);

if(keyDown(UP_ARROW)){
    player.velocityY -=3;
}

if(keyDown(LEFT_ARROW)){
    player.velocityX -=3;
}

if(keyDown(RIGHT_ARROW)){
    player.velocityX +=3;
}

drawSprites();
}