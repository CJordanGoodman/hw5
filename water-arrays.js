var xArr = [];
var yArr = [];
var speedXArr = [];
var speedYArr = [];

var a = 0.1;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 5; i++) {
    xArr[i] = 230;
    yArr[i] = 220 - 60 * i;
    speedXArr[i] = random(2);
    speedYArr[i] = random(2);
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, 230, 20);
  
  // draw drip
  for (var i = 0; i < 5; i++) {
    if (yArr[i] >= 220) {
  		ellipse(xArr[i], yArr[i], 10);
      xArr[i] += speedXArr[i];
    	speedYArr[i] += a;
    }
    yArr[i] += speedYArr[i];
  
  	// down 3 pixels each frame, but maybe should be accelerating?
    
  
    // if invisible for a full “height” amount…
    if (yArr[i] > height*2) {
      // reset
      xArr[i] = 230;
      yArr[i] = 220 - 60 * i;
      speedXArr[i] = random(2);
      speedYArr[i] = random(2);
    }
  }
}
