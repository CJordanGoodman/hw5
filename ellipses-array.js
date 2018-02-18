var xVals = [];
var yVals = [];
var dVals = [];
var cVals = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 5; j++) {
      xVals[5 * i + j] = (i + 1) * width/11;
      yVals[5 * i + j] = (j + 1) * height/6;
      dVals[5 * i + j] = random(10, 35);
      cVals[5 * i + j] = color(random(360), random(360), random(360));
    }
  }
}
  
function draw() {
  background(255);
  noStroke();

  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 5; j++) {
      fill(cVals[5 * i + j]);
      ellipse(xVals[5 * i + j], yVals[5 * i + j], dVals[5 * i + j]);
    	if (random() < 0.005) {
        dVals[5*i + j] = Math.max(10, dVals[5 * i + j] * 2 * random());
      }
      if (random() < 0.01) {
        newD = dVals[5 * i + j];
        n = 1;
        if (5 * i + j - 1 > 0) {
          newD += dVals[5 * i + j - 1];
          n += 1;
        } 
        if(5 * i + j + 1 < 50) {
          newD += dVals[5 * i + j + 1];
          n += 1;
        }
        if(5 * (i - 1) + j > 0) {
          newD += dVals[5 * (i - 1) + j];
          n += 1;
        }
        if(5 * (i + 1) + j < 50) {
          newD += dVals[5 * (i + 1) + j];
          n += 1;
        }
        dVals[5 * i + j] = newD/n;
      }
    }
  }
//   // draw two ellipses
//   fill(120, 60, 100);
//   ellipse(x1, y1, d1);
  
//   fill(240, 60, 100);
//   ellipse(x2, y2, d2);
  
//   // 1% of the time
//   if (random() < 0.01) {
//     // random diameter between 10 and 400
//     d1 = random(10, 400);
//   }
  
//   // 2% of the time…
//   if (random() < 0.02) {
//     // random diameter between 10 and 400
//     d2 = random(10, 400);
//   }
}
