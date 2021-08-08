const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
var bob_options={
	restitution:0.8
}
bob1= Bodies.circle(200,250,10,bob_options);
World.add(world,bob1);
bob2= Bodies.circle(200,250,10,bob_options);
World.add(world,bob2);
bob3= Bodies.circle(200,250,10,bob_options);
World.add(world,bob3);
bob4= Bodies.circle(200,250,10,bob_options);
World.add(world,bob4);
bob5= Bodies.circle(200,250,10,bob_options);
World.add(world,bob5);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	con=Matter.Constraint.create({
		pointA:{x:300,y:200},
		bodyB:bob1,
		pointB:{x:10,y:0},
		length:100,
		stiffness:0.1
	});
	World.add(world,con);
	con=Matter.Constraint.create({
		pointA:{x:350,y:200},
		bodyB:bob2,
		pointB:{x:10,y:0},
		length:100,
		stiffness:0.1
	});
	World.add(world,con);
	con=Matter.Constraint.create({
		pointA:{x:400,y:200},
		bodyB:bob3,
		pointB:{x:10,y:0},
		length:100,
		stiffness:0.1
	});
	World.add(world,con);
	con=Matter.Constraint.create({
		pointA:{x:450,y:200},
		bodyB:bob4,
		pointB:{x:10,y:0},
		length:100,
		stiffness:0.1
	});
	World.add(world,con);
	con=Matter.Constraint.create({
		pointA:{x:500,y:200},
		bodyB:bob5,
		pointB:{x:10,y:0},
		length:100,
		stiffness:0.1
	});
	World.add(world,con);
	
	Engine.run(engine);
	
  
  ellipseMode(RADIUS);
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  
  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(bob1.position.x,bob1.position.y,25)
  ellipse(bob2.position.x,bob2.position.y,25)
  ellipse(bob3.position.x,bob3.position.y,25)
  ellipse(bob4.position.x,bob4.position.y,25)
  ellipse(bob5.position.x,bob5.position.y,25)

 push();
 strokeWeight(2);
 stroke(225);
 line(con.pointA.x,con.pointA.y,bob1.position.x,bob1.position.y,bob2.position.x,bob2.position.y,bob3.position.x,bob3.position.y,bob4.position.x,bob4.position.y,bob5.position.x,bob5.position.y)
 pop();
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
