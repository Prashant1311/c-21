var fixedRect, movingRect,ball,ball1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ball = createSprite(300,200,50,50);
  ball.shapeColor = "green";
  ball.debug = true;

  ball1 = createSprite(200,200,50,50);
  ball1.shapeColor = "green";
  ball1.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,ball1)){

    movingRect.shapeColor = "red";
    ball1.shapeColor = "red";
  
  }else{
    movingRect.shapeColor = "green";
    ball1.shapeColor = "green";
  }



  drawSprites();
}



