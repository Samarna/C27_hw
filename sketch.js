const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    bob = new Bob(100,100);
    
    string = new String(bird.body,{x : 200,y : 100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
        

    fill(225,225,225);
    ground.display();

    bob.display();
    string.display();    
}
function keyPressed(){
    if(keyCode === 32 && bob.body.speed < 1){
        bob.sprite.x = mouseX
        bob.sprite.y = mouseY
    }
}
function stop(){
    if(keyCode === 13 && bob.body.speed > 1){
        bob.x = 100;
        bob.y = 100;
    }
}
