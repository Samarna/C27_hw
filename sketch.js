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
        
    bob = new Bob(100,100,10);

    string = new String(bob.body,{x : 200,y : 100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
        
    fill(225,225,225);
    ground.display();
    string.display(); 
    bob.display();
}
function keyPressed(){
    if(keyCode === 32 && bob.body.speed < 1){
        Matter.Body.setPosition(bob.body,{x:200,y:100});
    }
    if(keyCode === 13 && bob.body.speed > 1){
        //bob.body.position.x = 100;
        //bob.body.position.y = 100;
        Matter.Body.setStatic(bob.body,true);
        Matter.Body.setPosition(bob.body,{
            x:200,y:250
        });
    }
}
