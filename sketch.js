var car, wall, speed, weight;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  speed = random(55, 90)
  weight = random(400, 1500)

  car.velocityX = speed
  car.shapoeColor = "white"

  wall = createSprite(1200, 200, 60, height)

  wall.shapeColor = color(80,80,80)
}

function draw() {
  background(0);  
  
  if(wall.x - car.x < wall.width/2 + car.width/2){

   car.velocityX = 0
  
   var b = 0.5*weight*speed*speed/22500

   if(b>180){

    car.shapeColor = "red";
   }

   if(b<180&&b>100){

    car.shapeColor = "green"

   }

   if(b<100){

    car.shapeColor = "blue"

   }

  }
  
  drawSprites();
}