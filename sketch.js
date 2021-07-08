const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);	

var ball_options={
	restitution: 0.8

}  

	ball= Bodies.circle(310,370,20,ball_options);
    World.add(world,ball);	

	ball1= Bodies.circle(360,370,20,ball_options);
    World.add(world,ball1);	

	ball2= Bodies.circle(410,370,20,ball_options);
    World.add(world,ball2);	

	ball3= Bodies.circle(460,370,20,ball_options);
    World.add(world,ball3);	

	ball4= Bodies.circle(510,370,20,ball_options);
    World.add(world,ball4);


	
	rope=new Rope({x:310,y:100},ball)
	rope1=new Rope({x:360,y:100},ball1)
	rope3=new Rope({x:410,y:100},ball2)
	rope2=new Rope({x:460,y:100},ball3)
	rope4=new Rope({x:510,y:100},ball4)
	


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  ellipse(ball3.position.x,ball3.position.y,20);
  ellipse(ball4.position.x,ball4.position.y,20);
 
rope.show();
rope1.show();
rope2.show();
rope3.show();
rope4.show();

 
}


  //call display() to show ropes here
  function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:-0.05,y:-0.05})
		console.log("up");
	}
}

