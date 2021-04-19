var invisibleground;
var background, backgroundimg;
var pancakes;
var obstacle;

function preload(){
  backgroundimg = loadImage("backgroundimg.png")
}
function setup() {
  createCanvas(windowWidth+1000,windowHeight-20);
  
  // invisibleground = createSprite(400,500,800,20)
  // invisibleground.visibility = "false"

  bg = createSprite(windowWidth,0,windowWidth*8,windowHeight)
  bg.addImage(backgroundimg)
//  // bg.x = bg.width
bg.scale =4
//background.velocityX = -2;

}

function draw() {
  // if(backgroundimg)
  // background(backgroundimg)

   
 background(255)
 bg.velocityX = -2;
  if(bg.x<0 ){
    bg.x = bg.width/2
  }


  drawSprites();
}