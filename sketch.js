var car1, car2, car3, car4;
var line1, line2, line3, line4, line5;
var wall1, wall2, wall3, wall4;
var road1, road2, road3, road4;
var speed;
var speed2;
var speed3;
var speed4;
var weight;
var weight2;
var weight3;
var weight4;

function setup() {

  speed = random(55, 90);
  speed2 = random(55, 90);
  speed3 = random(55, 90);
  speed4 = random(55, 90);

  weight = random(400, 1500);
  weight2 = random(400, 1500);
  weight3 = random(400, 1500);
  weight4 = random(400, 1500);


  createCanvas(1600, 500);
  line1 = createSprite(800, 50, 1600, 5);
  line2 = createSprite(800, 150, 1600, 5);
  line3 = createSprite(800, 250, 1600, 5);
  line4 = createSprite(800, 350, 1600, 5);
  line5 = createSprite(800, 450, 1600, 5);

  line1.shapeColor = "white";
  line2.shapeColor = "white";
  line3.shapeColor = "white";
  line4.shapeColor = "white";
  line5.shapeColor = "white";

  car1 = createSprite(100, 100, 50, 20);
  car2 = createSprite(100, 200, 50, 20);
  car3 = createSprite(100, 300, 50, 20);
  car4 = createSprite(100, 400, 50, 20);

  let c2 = color(128, 128, 0);

  car1.shapeColor = "white";
  car2.shapeColor = "white";
  car3.shapeColor = "white";
  car4.shapeColor = "white";

  wall1 = createSprite(1500, 100, 20, 50);
  wall2 = createSprite(1500, 200, 20, 50);
  wall3 = createSprite(1500, 300, 20, 50);
  wall4 = createSprite(1500, 400, 20, 50);

  let c = color(50, 120, 255);

  wall1.shapeColor = c;
  wall2.shapeColor = c;
  wall3.shapeColor = c;
  wall4.shapeColor = c;

  car1.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  car4.velocityX = speed4;


}

function draw() {
  background(0, 0, 0);

  // car1.debug = true;

  if (wall1.x - car1.x < wall1.width / 2 + car1.width / 2 && car1.x - wall1.x < car1.width / 2 + wall1.width / 2) {
    car1.velocityX = 0;
    var deformation1 = 0.5 * weight * speed * speed / 22500
    if (deformation1 > 180) {
      car1.shapeColor = "red";
    }
    if (deformation1 < 180&&deformation1>100) {
      car1.shapeColor = "yellow";
    }
    if (deformation1 < 100) {
      car1.shapeColor = "green";
    }
  }

  if (wall2.x - car2.x < wall2.width / 2 + car2.width / 2 && car2.x - wall2.x < car2.width / 2 + wall2.width / 2) {
    car2.velocityX = 0;
    var deformation2 = 0.5 * weight2 * speed2 * speed2 / 22500
    if (deformation2 > 180) {
      car2.shapeColor = "red";
    }
    if (deformation2 < 180&&deformation2>100) {
      car2.shapeColor = "yellow";
    }
    if (deformation2 < 100) {
      car2.shapeColor = "green";
    }
  }

  if (wall3.x - car3.x < wall3.width / 2 + car3.width / 2 && car3.x - wall3.x < car3.width / 2 + wall3.width / 2) {
    car3.velocityX = 0;
    var deformation3 = 0.5 * weight3 * speed3 * speed3 / 22500
    if (deformation3 > 180 ) {
      car3.shapeColor = "red";
    }
    if (deformation3 < 180&&deformation3>100) {
      car3.shapeColor = "yellow";
    }
    if (deformation3 < 100) {
      car3.shapeColor = "green";
    }
  }

  if (wall4.x - car4.x < wall4.width / 2 + car4.width / 2 && car4.x - wall4.x < car4.width / 2 + wall4.width / 2) {
    car4.velocityX = 0;
    var deformation4 = 0.5 * weight4 * speed4 * speed4 / 22500
    if (deformation4 > 180) {
      car4.shapeColor = "red";
    }
    if (deformation4 < 180&&deformation4>100) {
      car4.shapeColor = "yellow";
    }
    if (deformation4 < 100) {
      car4.shapeColor = "green";
    }
  }

  drawSprites();
}