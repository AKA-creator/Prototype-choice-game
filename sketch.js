const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;
const Constraint = Matter.constraint;
var engine, ground, ball, crate;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1000,1000);
  ground = new Ground(500, 800, 1000, 20);
 // barricade = new Ground(1000, 620, 20, 70)
  ball = new Ball(100, 600, 60);
  crate = new Crate(500, 40, 100, 100);
 
}

function draw() {
  Engine.run(engine);
  background(255,255,255);  
  ground.display();
  ball.display();
  crate.display();
 // barricade.display();
  drawSprites();
}
function keyPressed(){
  if (keyCode === UP_ARROW ){
       Matter.Body.applyForce(ball.body, ball.body.position, {x:200, y:-300})
  }
  
  }
  