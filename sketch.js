var fixedRect, movingRect;
var obj1,obj2,obj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200, 100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX= -5;
  fixedRect.velocityX= +5;

  obj1 = createSprite(200,200,30,30);
  obj2 = createSprite(300,200,30,30);
  obj3 = createSprite(100,200,30,30);

  obj2.y = World.mouseY;
  obj2.x = World.mouseX;
}

function draw() {
  background(0,0,0);  
  
  if(isTouching(obj2,obj1)){
    obj1.shapeColor = "red";
  }
  
//bounceOff(movingRect,fixedRect);

  drawSprites();
}


