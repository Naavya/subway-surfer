var trainimg,policeimg,barrier1img,barrier2img,coinimg,keyimg,openimg,savemeimg,traintrackimg
var Score=0
var coin,player,track1,track2,track3,coin2,coin3,barrier1
var coinGroup
var coin2Group
var coin3Group
var barrierGroup,barrierGroup2,barrierGroup3
var PLAY=1
var END=0
var gameState=PLAY


function preload(){
   
    policeimg=loadImage("subway surfers game/Motu-1.png")
    barrier1img=loadImage("subway surfers game/barrier2.png")
    gameoverimg=loadImage("subway surfers game/gameover.jpg")
    coinimg=loadImage("subway surfers game/coin.png")
    
   
}
function setup(){
    createCanvas(1000,800);
    track1=createSprite(500,400,200,800)
    track1.shapeColor=rgb(48,22,8)
    track1.y=track1.height/2
    track3=createSprite(750,400,200,800)
    track3.shapeColor=rgb(48,22,8)
    track2=createSprite(250,400,200,800)
    track2.shapeColor=rgb(48,22,8)
    player=createSprite(500,750,20,30)
    player.addImage("playerimg",policeimg)
    player.scale=0.5
    gameover=createSprite(500,400,50,20)
    gameover.addImage(gameoverimg)
    gameover.visible=false
    coinGroup=new Group()
    coin2Group=new Group()
    coin3Group=new Group()
    barrierGroup=new Group()
    barrierGroup2=new Group()
    barrierGroup3=new Group()


}
function draw(){
    background("white") 
    console.log(gameState)
    if(gameState===PLAY){
    track1.velocityY=3
    track2.velocityY=3
    track3.velocityY=3
    edges=createEdgeSprites()
    player.bounceOff(edges)
    if(keyWentDown(UP_ARROW)){
        player.velocityY=-5
        }
        if(keyWentUp(UP_ARROW)){
            player.velocityY=0
        }
    if(keyDown(DOWN_ARROW)){
        player.x=500
    }
    if(keyDown(RIGHT_ARROW)){
        player.x=750
    }
    if(keyDown(LEFT_ARROW)){
        player.x=250
    }
    if(track1.y>800){
        track1.y=track1.height/2
    }
    if(track2.y>800){
        track2.y=track2.height/2
    }
    if(track3.y>800){
        track3.y=track3.height/2
    }
    
   spawncoins()
   spawncoins2()
   spawncoins3()
   spawnbarrier()
   spawnbarrier2()
   spawnbarrier3()
    if(coinGroup.isTouching(player)){
        Score=Score+1
        coinGroup.destroyEach()
    }
    if(coin2Group.isTouching(player)){
        Score=Score+1
        coin2Group.destroyEach()
    }
    if(coin3Group.isTouching(player)){
        Score=Score+1
        coin3Group.destroyEach()
    }
    if(barrierGroup.collide(player)||barrierGroup2.collide(player)||barrierGroup3.collide(player)){
        gameState=END
}
}
    
      else if(gameState===END){
        gameover.visible=true
        track1.visible=false
        track2.visble=false
        track3.visible=false
        player.visible=false
        player.velocityY=0
        coinGroup.setVelocityYEach(0)
        coin2Group.setVelocityYEach(0)
        coin3Group.setVelocityYEach(0)
        barrierGroup.setVelocityYEach(0)
        barrierGroup2.setVelocityYEach(0)
        barrierGroup3.setVelocityYEach(0)
        barrierGroup.setVisibleEach(false)
        barrierGroup2.setVisibleEach(false)
        barrierGroup3.setVisibleEach(false)
        coinGroup.setVisibleEach(false)
        coin2Group.setVisibleEach(false)
        coin3Group.setVisibleEach(false)
       
    }


drawSprites()
text ("SCORE:"+Score,900,100)

}
function spawncoins(){
    if(frameCount%50===0){
        coin=createSprite(500,random(100,200),10,10)
    coin.addImage("coin",coinimg)
    coin.scale=0.5
    coinGroup.add(coin)
       }
    }
function spawncoins2(){
    if(frameCount%50===0){
    coin2=createSprite(750,random(100,200),10,10)
    coin2.addImage("coin",coinimg)
    coin2.scale=0.5
    coin2Group.add(coin2)
    }
}
function spawncoins3(){
    if(frameCount%50===0){
        coin3=createSprite(250,random(100,200),10,10)
        coin3.addImage("coin",coinimg)
        coin3.scale=0.5
        coin3Group.add(coin3)
    }
}
function spawnbarrier(){
    if(frameCount%100===0){
        barrier1=createSprite(500,random(100,300),30,10)
        barrier1.addImage(barrier1img)
        barrier1.lifetime=12
        barrierGroup.add(barrier1)
    }
}
function spawnbarrier2(){
    if(frameCount%150===0){
        barrier2=createSprite(250,random(100,300),30,10)
        barrier2.addImage(barrier1img)
        barrier2.lifetime=12
        barrierGroup2.add(barrier2)
    }
}
function spawnbarrier3(){
    if(frameCount%200===0){
        barrier3=createSprite(750,random(100,300),30,10)
        barrier3.addImage(barrier1img)
        barrier3.lifetime=12
        barrierGroup3.add(barrier3)
        
    }
}



