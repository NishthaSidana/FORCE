const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
let ball
function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;
  var balloptions={
    restitution:1,
    frictionAir:0.01
  }
  ball=Bodies.circle(500,500,50,balloptions)
  World.add(world,ball)
  bottomEdge=new edges(750,750,1600,50)
  leftEdge=new edges(1200,700,20,100)
  rightEdge=new edges(1400,700,20,100)
}

function draw() 
{
  background(51);
  Engine.update(engine);
  bottomEdge.display()
  leftEdge.display()
  rightEdge.display()
  ellipse(ball.position.x,ball.position.y,100)
}
function keyPressed(){
  if (keyCode==UP_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.3})
  }
  if (keyCode==RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.3,y:0})
  }
}
