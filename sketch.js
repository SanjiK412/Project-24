const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, dustbinObj2, dustbinObj3, paperObject,groundObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj1=new Dustbin(1000,650,180,20);
	dustbinObj2=new Dustbin(900,620,20,100);
	dustbinObj3=new Dustbin(1090,620,20,100);
	paperObject=new Paper(200,450,50);
	groundObject=new Ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbinObj1.display();
  dustbinObj2.display();
  dustbinObj3.display();
  paperObject.display();
  groundObject.display();

  

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-40});
    
  	}
}