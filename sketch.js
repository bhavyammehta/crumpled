
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground ;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	//Create the Bodies Here.
//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

boxPosition=width/2-100
boxY=610;

paper=createSprite(10,10)


boxleftSprite=createSprite(boxPosition, boxY, 20,100);
boxleftSprite.shapeColor=color(255,0,0);

boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
World.add(world, boxLeftBody);

boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
boxBase.shapeColor=color(255,0,0);

boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
World.add(world, boxBottomBody);

boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
boxleftSprite.shapeColor=color(255,0,0);

boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
World.add(world, boxRightBody);



}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  drawSprites();
 
}



