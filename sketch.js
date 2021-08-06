
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var world;
var rect1, rect2,rect3,rect4,rect5,rect6,rect7,rect8;
var rect9,rect10,rect11;
var  gall1;
var score;
function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
rect1=new Rect (400,590,10,800);
rect2=new  Re (720,300,30,70)
rect3=new Rect (782,300,30,70);
rect4=new Rect (720,330,30,70);
rect5=new Rect (659,360,30,70);
rect6=new Rect (599,391,30,70);
rect7=new Rect (555,420,30,70);
rect8=new Rect (522,450,30,70);
rect9=new Rect (477,480,30,70);
rect10=new Rect (444,510,30,70);
rect11=new Rect (400,540,30,70);
gall1=new Goll (400,540,399,70)
score=new Rect ();
	Engine.run(engine);
	
	
}

function draw() {
  rectMode(CENTER);
  background(230);
   text ("score:",80,80)
   
  rect1.display ();
  rect2.display ();
rect3.display ();
	rect4.display ();
	rect5.display ();
    rect6.display ();
	rect7.display ();
	rect8.display ();
	rect9.display();
	rect10.display();
	rect11.display();
	gall1.display();
	score.display();
	
	}
	function keyPressed() {
		if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(rect2.body,rect2.body.position,{x:-50,y:-45});
		
		}
		}
		

