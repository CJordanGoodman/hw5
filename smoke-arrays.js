var xArr = [];
var xSpeedArr = [];
var yArr = [];
var ySpeedArr = [];
var rArr = [];
var rSpeedArr = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 100; i++) {
    xArr[i] = 210;
    yArr[i] = 290;
    rArr[i] = 0;
    xSpeedArr[i] = random(-1, 1);
    ySpeedArr[i] = random(2, 4);
    rSpeedArr[i] = random(-0.05, 0.05);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw smokestack
  fill(255);
  rect(195, height, 30, -100);

  
  // darker as it gets closer to 0
  for (var i = 0; i < 100; i++) {
    // save graphics state
  	push();
    fill(yArr[i]);
    // rotate r around (x,y)
    translate(xArr[i], yArr[i]);
    rotate(rArr[i]);
    // draw rectangle
    rect(-10, -10, 20, 20);
    // reset rotation and translation
    pop();

    // up 3 pixels
    yArr[i] -= ySpeedArr[i];
    xArr[i] += xSpeedArr[i];

    // rotate 0.05 radians ~= 2.8 degrees per frame
    rArr[i] += rSpeedArr[i]

    // if reach past the top a bunch
    if (yArr[i] < -150) {
      xArr[i] = 210;
      yArr[i] = 290;
    }
  }
}
