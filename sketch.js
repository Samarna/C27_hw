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

    bird = new Bird(100,100);
    
    sling = new Sling(bird.body,{x : 200,y : 100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
        

    fill(225,225,225);
    ground.display();

    bird.display();
    sling.display();    
}
function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x : 200 , y :50})
        slingshot.attach(bird.body);
    }
}
