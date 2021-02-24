var car, wall
var speed, weight
var deformation

function setup() {
  createCanvas(1600,400);

  speed = random(55,90)
  weight = random(400,1500)
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2)
}

function draw() {
  background(0,0,0);  

  car.velocityX = speed;
  deformation = (weight*speed*speed)/45000
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0
    car.x = 1445
    if(deformation < 100){
      car.shapeColor = rgb(0,255,0)
    } else if (deformation >= 100 && deformation <= 180){
      car.shapeColor = rgb(230,230,0)
    } else {
      car.shapeColor = rgb(255,0,0)
    }
  }
  
  drawSprites();
}