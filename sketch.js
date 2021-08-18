
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var bob1, bob2, bob3, bob4, bob5
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	roof = new Roof(100,100,700,30);
	
	rope1= new Rope(bob1.body,roof.body,-bobDiameter*2,0)
	rope2= new Rope(bob2.body,roof.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  rope1.display();
  rope2.display();

  drawSprites();
 
}



