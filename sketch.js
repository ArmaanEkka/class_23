var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundSprite,backgroundImg;
var skySprite,skyImg;

function preload() {
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
	backgroundImg = loadImage("Back.jpg");
	//skyImg = loadImage("sky.jpg");
}

function setup() {
	createCanvas(800, 500);
	rectMode(CENTER);
	
	//skySprite = createSprite(width / 2,height / 2,10,10);
	//skySprite.addImage(skyImg);
	
	backgroundSprite = createSprite(width / 2,height / 2,10,10);
	backgroundSprite.addImage(backgroundImg);
	backgroundSprite.scale = 2.6;

	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2
	
	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6
	
	groundSprite = createSprite(width / 2, 10, width, 10);
	groundSprite.visible = false;
	//groundSprite.shapeColor = color(255)
	
	
	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 0.4, isStatic: true });
	World.add(world, packageBody);

	//skyBody = Bodies.rectangle(width / 2, 350, 200, 5, {restitution: 0.4, isStatic: true});
	//World.add(world, skyBody);
	
	backgroundBody = Bodies.rectangle(width / 2, 350, 200, 5, {restitution: 0.4, isStatic: true});
	World.add(world, backgroundBody);
	
	//Create a Ground
	ground = Bodies.rectangle(width / 2, 490, width, 10, { isStatic: true });
	World.add(world, ground);
	
	boxPosition = width / 2 - 100
	boxY = 610;
	
	
	/*boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
	boxleftSprite.shapeColor = color(255, 0, 0);
	
	boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxLeftBody);
	
	boxBase = createSprite(boxPosition + 100, boxY + 40, 200, 20);
	boxBase.shapeColor = color(255, 0, 0);
	
	boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, { isStatic: true });
	World.add(world, boxBottomBody);
	
	boxleftSprite = createSprite(boxPosition + 200, boxY, 20, 100);
	boxleftSprite.shapeColor = color(255, 0, 0);
	
	boxRightBody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, { isStatic: true });
	World.add(world, boxRightBody);*/
	
	
	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER); 
	background(0); 
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;
	//skySprite.display();
	backgroundSprite.display();
	drawSprites();
	/*rectMode(CENTER);
	background(0);
	
	packageSprite.x = helicopterSprite.x
	// packageSprite.y= packageBody.position.y 
	
	
	helicopterSprite.display();
	//packageSprite.display();
	Matter.Body.translate(packageBody, { x: helicopterSprite, y: helicopterSprite })
	
	if (keyCode === LEFT_ARROW) {
		helicopterSprite.x = helicopterSprite.x - 2;
	}
	
	if (keyCode === RIGHT_ARROW) {
		helicopterSprite.x = helicopterSprite.x + 2;
	}
	
	if (keyCode === DOWN_ARROW) {
		packageSprite.y = packageSprite.y + 10;
	}
	
	drawSprites();*/

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) { 
		helicopterSprite.x = helicopterSprite.x - 20;
		 translation = { x: -20, y: 0 }
	Matter.Body.translate(packageBody, translation) 
} 
	else if (keyCode === RIGHT_ARROW) { 
		helicopterSprite.x = helicopterSprite.x + 20;
		 translation = { x: 20, y: 0 } 
		 Matter.Body.translate(packageBody, translation) 
	}else if (keyCode === UP_ARROW) { 
		helicopterSprite.y = helicopterSprite.y - 20;
		translation = { x: 0, y: -20 } 
		Matter.Body.translate(packageBody, translation) 
	}else if (keyCode === DOWN_ARROW) { 
		helicopterSprite.y = helicopterSprite.y + 20;
		 translation = { x: 0, y: 20 } 
		 Matter.Body.translate(packageBody, translation) 
	}else if (keyCode === 32) {	 
		Matter.Body.setStatic(packageBody, false); 
		//Matter.Body.setStatic(packageBody, true);

	}
}
