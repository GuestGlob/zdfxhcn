var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d0d7eadd-7ff8-40ed-abe3-186b73fef8cc","ff15e86b-3881-4b0f-b096-979c1133c30c","43cca378-6de4-4e55-8fa0-43c8505a158e","f86ace74-0f1f-49a4-a525-b4f9b762ec54","844d4307-419d-4a6f-800c-1be806e7c5be","f1a63587-ab91-4f34-bdb1-fa75ee4520b4","17df0851-e03c-442b-a98b-d50e5d188870"],"propsByKey":{"d0d7eadd-7ff8-40ed-abe3-186b73fef8cc":{"name":"floppa.jpg_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"7M1MK3YYuh4V4XvSSZAe8wzDtOnjnISe","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/d0d7eadd-7ff8-40ed-abe3-186b73fef8cc.png"},"ff15e86b-3881-4b0f-b096-979c1133c30c":{"name":"animalhead_bear_1","sourceUrl":"assets/api/v1/animation-library/gamelab/.zFt2JOuUYSg1YVJw79yHXZlGqEvwKor/category_animals/animalhead_bear.png","frameSize":{"x":398,"y":292},"frameCount":1,"looping":true,"frameDelay":2,"version":".zFt2JOuUYSg1YVJw79yHXZlGqEvwKor","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":292},"rootRelativePath":"assets/api/v1/animation-library/gamelab/.zFt2JOuUYSg1YVJw79yHXZlGqEvwKor/category_animals/animalhead_bear.png"},"43cca378-6de4-4e55-8fa0-43c8505a158e":{"name":"flopa","sourceUrl":"assets/v3/animations/1IX5vDJh-001jTgQv39AYRep6iIPxcrQ-2yZPQTJe5c/43cca378-6de4-4e55-8fa0-43c8505a158e.png","frameSize":{"x":225,"y":225},"frameCount":1,"looping":true,"frameDelay":4,"version":"pi29wTtU8PzZFB.IF2duHYcmCLJ.T.nZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":225,"y":225},"rootRelativePath":"assets/v3/animations/1IX5vDJh-001jTgQv39AYRep6iIPxcrQ-2yZPQTJe5c/43cca378-6de4-4e55-8fa0-43c8505a158e.png"},"f86ace74-0f1f-49a4-a525-b4f9b762ec54":{"name":"Shop","sourceUrl":null,"frameSize":{"x":136,"y":129},"frameCount":1,"looping":true,"frameDelay":12,"version":"nqYlbanc8im86kJZCHuNC0LTLmhEm4lX","categories":["school_objects"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":129},"rootRelativePath":"assets/f86ace74-0f1f-49a4-a525-b4f9b762ec54.png"},"844d4307-419d-4a6f-800c-1be806e7c5be":{"name":"CoolHat","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":2,"looping":true,"frameDelay":12,"version":"x4JSK.WwD.ratF0a4S_JjgUdMmXJScSA","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":200},"rootRelativePath":"assets/844d4307-419d-4a6f-800c-1be806e7c5be.png"},"f1a63587-ab91-4f34-bdb1-fa75ee4520b4":{"name":"Shop_Outline","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"29mmI7ZHB7tDT_S1xep6N2bVvkr4WvL0","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/f1a63587-ab91-4f34-bdb1-fa75ee4520b4.png"},"17df0851-e03c-442b-a98b-d50e5d188870":{"name":"CoolHatShop","sourceUrl":null,"frameSize":{"x":1000,"y":1000},"frameCount":1,"looping":true,"frameDelay":12,"version":"38MSuYonpnURxN2Dlj2GH7IaL30nqoni","loadedFromSource":true,"saved":true,"sourceSize":{"x":1000,"y":1000},"rootRelativePath":"assets/17df0851-e03c-442b-a98b-d50e5d188870.png"}}};
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

var Cash = 0
var secondlist = [1,2,3,4,5,6,7,8,9,10]
var Cash_Amount = 1
var flag = 0
var daytime = false
var CanBuyHat = false
var a = 5
var Roomate = createSprite(200, 200);
var Bed = createSprite(200, 200);
var Computor = createSprite(68, 64);
Computor.setAnimation("Shop");
Computor.scale = 0.7
var Shop = createSprite(200, 200);
Shop.visible = false
Shop.setAnimation("Shop_Outline");
Shop.scale = 4
var Floppa = createSprite(60, 360, 10,10);
Floppa.setAnimation("flopa");
Floppa.scale = 0.45;
Floppa.velocityX = 0;
var Hat = createSprite(Floppa.x, Floppa.y - 100);
Hat.setAnimation("CoolHat");
Hat.visible = false
createEdgeSprites();
var ShopIcon1 = createSprite(85,175)
ShopIcon1.visible = false
ShopIcon1.setAnimation("CoolHatShop");
ShopIcon1.scale = 0.095
function draw() {
  background("lightBlue");
 fill("Black");
textSize(20);
  Hat.x = Floppa.x
 text("Cash:" + Cash, 264, 20);
  random=randomNumber(1,5)
  if(World.frameCount%5===0){
     Floppa.velocityX = -3.5 * random;
  }
  random=randomNumber(1,5)
  if(World.frameCount%10===0){
  Floppa.velocityX = 0.1 * random;
  }
  if (keyDown("UP_ARROW")) {
    Shop.visible = true
ShopIcon1.visible = true
  }
  if (keyDown("down")) {
    Shop.visible = false
    ShopIcon1.visible = false
  }
  if (keyWentDown("space")){
    Cash = Cash + Cash_Amount
    console.log(Cash)
  }
if (Cash >= 250) {
  CanBuyHat = true
  if (Shop.visible == true) {
 if (CanBuyHat == true && keyWentDown("E")){
  Hat.visible = true
  Cash_Amount = Cash_Amount + 4
  CanBuyHat = 0
  }
}
}
if (daytime == false) {
  background("black")
    var count = World.seconds
                                                          ;if (count % secondlist== 0) {
  
       daytime = true
      background("lightBlue")
     
    }
    daytime = false
}
// var count = World.seconds

// if (count >= 5) {
//   background("black")
//   if (count >= 10) {
//     count = 0
//     background("lightBlue")
//     console.log("works")
    
//   }
// }
// if (count == 0) {
//       count = World.seconds
//     }
console.log(count);

  Floppa.bounceOff(edges);
  drawSprites();
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
