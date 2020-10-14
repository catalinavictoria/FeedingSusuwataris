const WIDTH = 600;
const HEIGHT = 400;
const NUMSUZU = 20;

//array for susuwataris
groupOfSusus = [];

//totoro object
let myTotoro = {
  x: WIDTH / 2,
  y: HEIGHT - 50,
  w: 80,
  h: 90,
  color: "gray",
  vx: 0,
};

//laser object
let myLaser = {
  x : WIDTH / 2,
  y: HEIGHT - 50,
  w: 5,
  h: 5,
  color: "pink",
  vy: 0,
  active: false,
};

//create function for erasing laser
function eraseLaser(laser) {
  fill('lightBlue');
  noStroke();
  rect(laser.x, laser.y, laser.w, laser.h);
};

//create function for updating laser
function updateLaser(laser) {
  if (laser.y >= -5) {
    laser.y += laser.vy;
  } else {
    laser.active = false;
  }
};

//create function for drawing laser
function drawLaser(laser, totoro) {
  fill(laser.color);
  rect(laser.x, laser.y, laser.w, laser.h);
};

//create function for erasing totoro
function eraseTotoro(totoro) {
  fill("lightBlue");
  stroke("lightBlue");

  //totoro's body
  ellipse(totoro.x, totoro.y, totoro.w, totoro.h);
  //orejitas
  fill("lightBlue");
  ellipse(totoro.x - 15, totoro.y - 40, totoro.w - 60, totoro.h - 50);
  ellipse(totoro.x + 15, totoro.y - 40, totoro.w - 60, totoro.h - 50);
  //guatita
  fill("white");
  ellipse(totoro.x, totoro.y + 20, totoro.w - 20, totoro.h - 40);
  //eyes
  ellipse(totoro.x - 15, totoro.y - 20, totoro.w - 65, totoro.h - 75);
  ellipse(totoro.x + 15, totoro.y - 20, totoro.w - 65, totoro.h - 75);
  fill("black");
  ellipse(totoro.x - 15, totoro.y - 22, totoro.w - 70, totoro.h - 80);
  ellipse(totoro.x + 15, totoro.y - 22, totoro.w - 70, totoro.h - 80);
  //marks
  rect(totoro.x - 20, totoro.y + 10, totoro.w - 68, totoro.h - 88);
  rect(totoro.x - 5, totoro.y + 10, totoro.w - 68, totoro.h - 88);
  rect(totoro.x + 10, totoro.y + 10, totoro.w - 68, totoro.h - 88);
  rect(totoro.x + 5, totoro.y + 15, totoro.w - 68, totoro.h - 88);
  rect(totoro.x - 15, totoro.y + 15, totoro.w - 68, totoro.h - 88);
  //nose
  rect(totoro.x - 3, totoro.y - 16, totoro.w - 75, totoro.h - 85);

};

//create function for updating totoro
function updateTotoro(totoro) {
  //making totoro move
  totoro.x += totoro.vx;
  //making it bounce when it gets to right edge
  if (totoro.x > (WIDTH - totoro.w)) {
    totoro.vx = -(totoro.vx);
    //making it bounce when it gets to left edge
  } else if (totoro.x < (0 + totoro.w)) {
    totoro.vx = -(totoro.vx);
  }
};

//create function for drawing totoro
function drawTotoro(totoro) {
  fill(totoro.color);
  noStroke();

  //totoro's body
  ellipse(totoro.x, totoro.y, totoro.w, totoro.h);
  //orejitas
  fill(totoro.color);
  ellipse(totoro.x - 15, totoro.y - 40, totoro.w - 60, totoro.h - 50);
  ellipse(totoro.x + 15, totoro.y - 40, totoro.w - 60, totoro.h - 50);
  //guatita
  fill("white");
  ellipse(totoro.x, totoro.y + 20, totoro.w - 20, totoro.h - 40);
  //eyes
  ellipse(totoro.x - 15, totoro.y - 20, totoro.w - 65, totoro.h - 75);
  ellipse(totoro.x + 15, totoro.y - 20, totoro.w - 65, totoro.h - 75);
  fill("black");
  ellipse(totoro.x - 15, totoro.y - 22, totoro.w - 70, totoro.h - 80);
  ellipse(totoro.x + 15, totoro.y - 22, totoro.w - 70, totoro.h - 80);
  //marks
  rect(totoro.x - 20, totoro.y + 10, totoro.w - 68, totoro.h - 88);
  rect(totoro.x - 5, totoro.y + 10, totoro.w - 68, totoro.h - 88);
  rect(totoro.x + 10, totoro.y + 10, totoro.w - 68, totoro.h - 88);
  rect(totoro.x + 5, totoro.y + 15, totoro.w - 68, totoro.h - 88);
  rect(totoro.x - 15, totoro.y + 15, totoro.w - 68, totoro.h - 88);
  //nose
  rect(totoro.x - 3, totoro.y - 16, totoro.w - 75, totoro.h - 85);
};

//create function for erasing susuwatari
function eraseSusu(susuwatari) {
  fill("lightBlue");
  stroke("lightBlue");

  //body of the susuwatari
  ellipse(susuwatari.x, susuwatari.y, susuwatari.d + 10);

  //eyes
  fill("white");
  ellipse(susuwatari.x - 10, susuwatari.y, susuwatari.d - 35)
  ellipse(susuwatari.x + 10, susuwatari.y, susuwatari.d - 35)
  fill("black");
  ellipse(susuwatari.x - 10, susuwatari.y, susuwatari.d - 42)
  ellipse(susuwatari.x + 10, susuwatari.y, susuwatari.d - 42)
};

//create function for updating susu
function updateSusu(susuwatari) {
  //making the susuwataris move
  susuwatari.x += susuwatari.vx;
  //making them bounce on right edge
  if (susuwatari.x > (WIDTH - 25)) {
    susuwatari.vx = -(susuwatari.vx);
    //making them bounce on left edge
  } else if (susuwatari.x < (0 + 25)) {
    susuwatari.vx = -(susuwatari.vx);
  };
};

//create function for drawing susuwatari
function drawSusu(susuwatari) {
  fill(susuwatari.color);
  noStroke();

  //body of the susuwatari
  ellipse(susuwatari.x, susuwatari.y, susuwatari.d);
  //eyes
  fill("white");
  ellipse(susuwatari.x - 10, susuwatari.y, susuwatari.d - 35)
  ellipse(susuwatari.x + 10, susuwatari.y, susuwatari.d - 35)
  fill("black");
  ellipse(susuwatari.x - 10, susuwatari.y, susuwatari.d - 42)
  ellipse(susuwatari.x + 10, susuwatari.y, susuwatari.d - 42)
};

//function for generating random numbers
function randomInt(low, high) {
  return Math.floor(Math.random()*(high - low + 1)) + low;
};

//function for creating all susuwataris
function setupAllSusu() {
  //set for loop for susuwataris
  for (let i = 0; i < NUMSUZU; i++) {
    nextSusu = {
      x: randomInt(25, WIDTH - 25),
      y: randomInt(25, HEIGHT - 200),
      d: 50,
      color: 'black',
      vx: randomInt(-5, 5),
    };
    groupOfSusus.push(nextSusu);
  }
};

function setup() {
  // === *** Leave the next line alone. *** ====
  createCanvas(WIDTH, HEIGHT).parent('container');

  // === Commands to run ONCE when the page loads ===
  background('lightBlue');

  setupAllSusu();

};

function draw() {
  // === Commands to run REPEATEDLY ====

   //laser drawing
  if (myLaser.active === true) {
    eraseLaser(myLaser);
    updateLaser(myLaser);
    drawLaser(myLaser);
  };

  //for loop for updating and erasing susuwataris
  for (let i = 0; i < groupOfSusus.length; i++) {
    eraseSusu(groupOfSusus[i]);
    updateSusu(groupOfSusus[i]);
  };

  //for loop for drawing suzuwataris
  for (let i = 0; i < groupOfSusus.length; i++) {
    drawSusu(groupOfSusus[i]);
  };

  //totoro drawing
  eraseTotoro(myTotoro);
  updateTotoro(myTotoro);
  drawTotoro(myTotoro);

};

function keyPressed() {
  //logic for arrow keys
  if (keyCode === LEFT_ARROW) {
    myTotoro.vx = -2;
  } else if (keyCode === RIGHT_ARROW) {
    myTotoro.vx = 2;
  };

  //logic for spacebar
  if (keyCode === 32) {
    //if spacebar is hit and the laser is not active
    if (myLaser.active != true) {
      myLaser.x = myTotoro.x;
      myLaser.y = myTotoro.x;
      myLaser.active = true;
      myLaser.vy = -5;
    };
  };

};
// === *** Leave the code below here alone. *** ===

$(document).ready(() => {
  $('#container').css({ 'width': WIDTH, 'height': HEIGHT });
});
