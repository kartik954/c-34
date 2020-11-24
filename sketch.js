
const MBodies = Matter.Bodies
const MEngine = Matter.Engine
const MWorld = Matter.World
const MBody = Matter.Body
const MConstraint = Matter.Constraint

var engine;
var world;
var ground;
var box1;
var ball;
var rope;

function preload(){

}

function setup(){
    createCanvas(1000, 800);
    engine = MEngine.create();
    world = engine.world;
    ground = new Ground(500, 780, 1000, 20);
    box1 = new Floor(700, 720, 60, 60);
    ball = new Ball(50, 200, 70);
    rope = new Rope(ball.body, {x: 300, y: 50});
}

function draw(){
    background(230);
    MEngine.update(engine);
    rectMode(CENTER);
    ground.display();
    box1.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    MBody.setPosition(ball.body, {x: mouseX, y: mouseY})
}