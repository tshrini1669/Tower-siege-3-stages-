
var hexagon;
var img,slide,slide2;
function preload(){
img=loadImage("Picture1.png")
}

function setup() {
  createCanvas(1000,400);
  //level two 
block8= createSprite(330,235,30,40);
block8.shapeColor="orange"
block9= createSprite(360,235,30,40);
block9.shapeColor="blue"
block10= createSprite(390,235,30,40);
block10.shapeColor="red"
block11= createSprite(420,235,30,40);
block11.shapeColor="green"
block12= createSprite(450,235,30,40);
block12.shapeColor="pink"
//level three
block13= createSprite(360,195,30,40);
block13.shapeColor="lavender"
block14= createSprite(390,195,30,40);
block14.shapeColor="brown"
block15= createSprite(420,195,30,40);
block15.shapeColor="purple"
//top
block16= createSprite(390,155,30,40);
block16.shapeColor="aquamarine"
hexagon= createSprite(500,500,20,20);
hexagon.shapeColor="cyan"
hexagon.addImage(img)
hexagon.scale=0.05;

block17= createSprite(530,235,30,40);
block17.shapeColor="orange"
block18= createSprite(560,235,30,40);
block18.shapeColor="blue"
block19= createSprite(590,235,30,40);
block19.shapeColor="red"
block20= createSprite(620,235,30,40);
block20.shapeColor="green"
block21= createSprite(650,235,30,40);
block21.shapeColor="pink"
//level three
block22= createSprite(560,195,30,40);
block22.shapeColor="lavender"
block23= createSprite(590,195,30,40);
block23.shapeColor="brown"
block24= createSprite(620,195,30,40);
block24.shapeColor="purple"
//top
block25= createSprite(590,155,30,40);
block25.shapeColor="aquamarine"
//reset=createSprite(700,100);
slide=createSprite(595,266,180,20)
slide.shapeColor="yellow"
slide2=createSprite(390,266,180,20)
slide2.shapeColor="yellow"
} 
  
  
  
  
function draw(){

background("black")
hexagon.position.x = mouseX;
    hexagon.position.y = mouseY;

if(hexagon.isTouching(block8)){
  block8.visible=0;
}
if(hexagon.isTouching(block9)){
  block9.visible=0;
}
if(hexagon.isTouching(block10)){
  block10.visible=0;
}
if(hexagon.isTouching(block11)){
  block11.visible=0;
}
if(hexagon.isTouching(block12)){
  block12.visible=0;
}
if(hexagon.isTouching(block13)){
  block13.visible=0;
}
if(hexagon.isTouching(block14)){
  block14.visible=0;
}
if(hexagon.isTouching(block15)){
  block15.visible=0;
}
if(hexagon.isTouching(block16)){
  block16.visible=0;
}
if(hexagon.isTouching(block17)){
  block17.visible=0;
}
if(hexagon.isTouching(block18)){
  block18.visible=0;
}
if(hexagon.isTouching(block19)){
  block19.visible=0;
}
if(hexagon.isTouching(block20)){
  block20.visible=0;
}
if(hexagon.isTouching(block21)){
  block21.visible=0;
}
if(hexagon.isTouching(block22)){
  block22.visible=0;
}
if(hexagon.isTouching(block23)){
  block23.visible=0;
}
if(hexagon.isTouching(block24)){
  block24.visible=0;
}
if(hexagon.isTouching(block25)){
  block25.visible=0;
}



    drawSprites();
}  
  

