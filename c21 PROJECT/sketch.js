
var bullet,wall,thickness;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);

  bullet  = createSprite(50,200,60,30);

  wall = createSprite(1200,200,thickness,height/2);
  //wall.shapeColor = (80,80,80);

  thickness = random(22,83);
  
 
  bullet.velocityX = speed;
  

}

function draw() {
  background("powderblue");  
  drawSprites();
  
 if(hasCollided(bullet,wall)){
   bullet.velocityX = 0;
  var  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
wall.shapeColor = "red";
  }
  if(damage<10){
    wall.shapeColor = "green";
  }
 }
  

}
function hasCollided(bullet,wall)
{
bulletRightEdge = bullet.x+bullet.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}

  else{
    return false;
  }

}