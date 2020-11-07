var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a160e707-f4d3-4162-a2dd-72bae09c8665"],"propsByKey":{"a160e707-f4d3-4162-a2dd-72bae09c8665":{"name":"striker","sourceUrl":"assets/api/v1/animation-library/gamelab/5XAXMbPGItEMsE55D0cNi0E52.gFrxB6/category_gameplay/pieceBlack_multi10.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"5XAXMbPGItEMsE55D0cNi0E52.gFrxB6","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/5XAXMbPGItEMsE55D0cNi0E52.gFrxB6/category_gameplay/pieceBlack_multi10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var striker = createSprite(200, 200,10,10);
var computerMallet = createSprite(200, 50,50,10);
var playerMallet = createSprite(200, 350,50,10);
var goal1 = createSprite(200, 28,100,20);
var goal2 = createSprite(200, 372,100,20);
var outerboundary1  = createSprite(200,3,400,5);
var outerboundary2  = createSprite(200,397,400,5);
var outerboundary3  = createSprite(3,200,5,400);
var outerboundary4  = createSprite(397,200,5,400);
var innerboundary1  = createSprite(200,15,400,5);
var innerboundary2  = createSprite(200,385,400,5);
var innerboundary3  = createSprite(15,200,5,400);
var innerboundary4  = createSprite(385,200,5,400);
var innerboundary5  = createSprite(200,150,400,5);
var innerboundary6  = createSprite(200,250,400,5);

striker.setAnimation("striker");
goal1.shapeColor=("yellow");
goal2.shapeColor=("yellow");
playerMallet.shapeColor=("black");
computerMallet.shapeColor=("black");
outerboundary1.shapeColor=("white");
outerboundary2.shapeColor=("white");
outerboundary3.shapeColor=("white");
outerboundary4.shapeColor=("white");
innerboundary1.shapeColor=("white");
innerboundary2.shapeColor=("white");
innerboundary3.shapeColor=("white");
innerboundary4.shapeColor=("white");
innerboundary5.shapeColor=("white");
innerboundary6.shapeColor=("white");



var computerScore=0;
var playerScore=0;

var gameState = "serve";

function draw() {
background("green");
if (keyDown("left")) {
  playerMallet.x=playerMallet.x-10;
}
if (keyDown("right")) {
  playerMallet.x=playerMallet.x+10;
}
if (keyDown("up")) {
if (playerMallet.y>25) {
  playerMallet.y=playerMallet.y-10;
}
}
if (keyDown("down")) {
 playerMallet.y=playerMallet.y+10;
}
if (striker.isTouching(goal1)||striker.isTouching(goal2)) {
  if (striker.isTouching(goal1)) {
    playerScore = playerScore+1;
  }
  if (striker.isTouching(goal2)) {
    computerScore=computerScore+1;
  }
  reset();
  gameState="serve";
}
if (gameState === "serve") {
    fill("white");
    text("Press Space to Serve",150,180);
}



createEdgeSprites();

striker.bounceOff(goal1);
striker.bounceOff(goal2);

striker.bounceOff(computerMallet);
striker.bounceOff(playerMallet);
playerMallet.bounceOff(rightEdge);
playerMallet.bounceOff(leftEdge);
playerMallet.bounceOff(topEdge);
playerMallet.bounceOff(bottomEdge);
playerMallet.bounceOff(goal1);
playerMallet.bounceOff(goal2);

striker.bounceOff(outerboundary1);
striker.bounceOff(outerboundary2);
striker.bounceOff(outerboundary3);
striker.bounceOff(outerboundary4);
striker.bounceOff(innerboundary1);
striker.bounceOff(innerboundary2);
striker.bounceOff(innerboundary3);
striker.bounceOff(innerboundary4);

for (var i = 0; i < 400; i=i+20) {
  line(i,200,i+10,200);
}

 if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
fill("white");
textSize(30);
text(computerScore,30,180);

fill("white");
textSize(30);
text(playerScore,30,220);

computerMallet.x=striker.x;
 if (computerScore===5 || playerScore===5) {
   fill("white");
   text("gameover",170,130);
    fill("white");
    text("press R to restart",150,160);
    gameState="over";
    reset();
  }
if (keyDown("R")) {
    gameState="serve";
    computerScore=0;
    playerScore=0;
   }
 drawSprites(); 
}
function serve() {
  striker.velocityX = 3;
  striker.velocityY = 4;
}

function reset() {
  striker.x = 200;
  striker.y = 200;
  striker.velocityX = 0;
  striker.velocityY = 0;
  playerMallet.x = 200;
  playerMallet.y = 350;
  playerMallet.velocityX = 0;
  playerMallet.velocityY = 0;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
