var bgimg
var cat,catimg1,catimg2,catimg3
var housemouse,mouseimg1,mouseimg2,mouseimg3

function preload() 
{
    //load the images here
    bgimg = loadImage("images/garden.png")
    catimg1 = loadAnimation("images/cat1.png")
    mouseimg1 = loadAnimation("images/mouse1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    catimg3 = loadAnimation("images/cat4.png")
    mouseimg3 = loadAnimation("images/mouse4.png")
}

function setup()
{
    createCanvas(1000,800);
    
    cat = createSprite(800,600,10,10)
    cat.scale = .3
    cat.addAnimation("catsitting",catimg1)
    cat.addAnimation("catrunning",catimg2)
    cat.addAnimation("catstanding",catimg3)
    
    housemouse = createSprite(200,600,10,10)
    housemouse.scale = .3
    housemouse.addAnimation("mousestanding",mouseimg1)
    housemouse.addAnimation("mouseteasing",mouseimg2)
    housemouse.addAnimation("mousedetecting",mouseimg3)
}

function draw()
{

    background(bgimg);
        
    //cat.debug = true
    //cat.setCollider("rectangle",0,0,cat.width,cat.height)
    //housemouse.setCollider("rectangle",0,0,housemouse.width,housemouse.height)
    //housemouse.debug = true

    

    //Write condition here to evalute if tom and jerry collide
     if (cat.x - housemouse.x < 100)
     
      {
        cat.velocityX = 0
        console.log(cat.velocityX)
      cat.changeAnimation("catstanding",catimg3)
      housemouse.changeAnimation("mousedetecting",mouseimg3)
      
      
      }
  else {
    
  }

    drawSprites();
    
    keyPressed()
}


function keyPressed()
{

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW)
  {
    housemouse.changeAnimation("mouseteasing",mouseimg2)
    
  }

  if(keyCode === LEFT_ARROW)
{
    cat.changeAnimation("catrunning",catimg2)
    cat.velocityX = -4
     
}

}
