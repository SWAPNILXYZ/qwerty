const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  

  createCanvas(800,400);
 
  engine = Engine.create();
    world = engine.world;

 launcher = new Box(120,260,25,25);
chain = new Slingshot(launcher.body,{x:120, y:260});

 g1 = new Ground(360,330,250,15);
 g2 = new Ground(650,200,175,15);

 //level 1


 b1 = new Box(290,300,30,30);
 b2 = new Box(320,300,30,30);
 b3 = new Box(350,300,30,30);
 b4 = new Box(380,300,30,30);
 b5 = new Box(410,300,30,30);
 b6 = new Box(440,300,30,30);

//level 2

b7 = new Box(305,250,30,30);
b8 = new Box(335,250,30,30);
b9 = new Box(365,250,30,30);
b10 = new Box(395,250,30,30);
b11 = new Box(425,250,30,30);

//level 3

b1s = new Box(320,200,30,30);
b2s = new Box(350,200,30,30);
b3s = new Box(380,200,30,30);
b4s = new Box(410,200,30,30);

//level 4

b5s = new Box(335,150,30,30);
b6s = new Box(365,150,30,30);
b7s = new Box(395,150,30,30);

//level 5

b8s = new Box(350,100,30,30);
b9s = new Box(380,100,30,30);

//level 6
b10s = new Box(365,50,30,30);

//level 1.0
b1a = new Box(600,100,30,30);
b2a = new Box(630,100,30,30);
b3a = new Box(660,100,30,30);
b4a = new Box(690,100,30,30);

//level 1.2

b5a = new Box(615,50,30,30);
b6a = new Box(645,50,30,30);
b7a = new Box(675,50,30,30);

//level 1.3

b8a = new Box(630,30,30,30);
b9a = new Box(660,30,30,30);

//level 1.4
b10a = new Box(645,10,30,30);
 Engine.run(engine);
}

function draw() {
  background(0); 
   
  g1.display();
  g2.display();
  fill ("blue");
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  fill("red");
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 b11.display();
 fill("green");
 b1s.display();
 b2s.display();
 b3s.display();
 b4s.display();
 fill("purple");
 b5s.display();
 b6s.display();
 b7s.display();
 fill("yellow");
 b8s.display();
 b9s.display();
 fill("white");
 b10s.display();
fill("pink");
 b1a.display();
 b2a.display();
 b3a.display();
 b4a.display();
fill("white");
 b5a.display();
 b6a.display();
 b7a.display();
fill("brown");
 b8a.display();
 b9a.display();
fill("yellow");
 b10a.display();

 launcher.display();

 chain.display();
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(launcher.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}