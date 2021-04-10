
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,250,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;
  
ground = createSprite(450,300,900,10);
ground.velocityX = -4;
ground.x = ground.width/2;
console.log(ground.x)

FoodGroup = new Group ();
obstacleGroup = new Group();
  
  score = 0
  
}


function draw() {
background(225);
background("white"); 
text("Score: "+ score, 100,50);  

  
if(ground.x>0){
 ground.x = ground.width/2;
 }

  
if(keyDown("space")&& monkey.y >= 159){
  monkey.velocityY = -12
}
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
  
  spawnFruits();
  spawnObstacles();

drawSprites();
  
  if(obstacleGroup.isTouching(monkey)){
ground.velocityX = 0;
monkey.velocityY = 0;
 obstacleGroup.setVelocityXEach(0);
 FoodGroup.setVelocityXEach(0);
 obstacleGroup.setLifetimeEach(-1);
 FoodGroup.setLifetimeEach(-1);
  } 
  
  
if(FoodGroup.isTouching(monkey)){
  score = score + 1
}
  
}

function spawnFruits(){
if(World.frameCount%80===0){
 fruit = createSprite(400,185,20,20)
 fruit.y = Math.round(random(120,200))
 fruit.addImage(bananaImage);
 fruit.scale = 0.1;
 fruit.velocityX = -6;
 fruit.lifetime = 100
 FoodGroup.add(fruit);
  
}
  
}


function spawnObstacles(){
if(World.frameCount%120===0){
 Obstacles = createSprite(150,270,20,20)
 Obstacles.x = Math.round(random(175,120))
 Obstacles.addImage(obstacleImage);
 Obstacles.scale = 0.2;
 Obstacles.velocityX = -4;
 Obstacles.lifetime = 100
 obstacleGroup.add(Obstacles);
  
  
  
}
  
}



