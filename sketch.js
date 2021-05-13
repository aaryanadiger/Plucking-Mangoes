
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, treeImg, stone, stoneImg, ground, boy, boyImg;



function setup() {
	createCanvas(1250, 680);


	engine = Engine.create();
	world = engine.world;

	stone = new Stone(130,490,20);
	mango1 = new Mango(1100,300,30);
	mango2 = new Mango(900,250,30);
	mango3 = new Mango(1000,200,30);
	mango4 = new Mango(1200,300,30);
	mango5 = new Mango(1100,220,30);
	mango6 = new Mango(980,300,30);
  mango7 = new Mango(865,330,30);
  mango8 = new Mango(1050,145,30);
  tree = new Tree(1000,680);
  ground = new Ground(width/2,670,1500,20);
	boy = new Boy(220,580);
	chain = new Chain(stone.body,{x:130, y:490});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#57D7F7")

  fill('white');
  textSize(24);
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 200,200);
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  chain.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    chain.fly();
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
