let screenDiv = document.getElementById("screen");
let screenHeight = screenDiv.clientHeight;
let screenWidth = screenDiv.clientWidth;
let player = new Player(screenWidth / 2, screenHeight / 2);
let player_velocity = 3;
let keyStack;
let mouse_cnt = 0;

let imgs_ballCursor = [];
let imgs_pokemon = [];

let graduate_data = [
  {
    name: "은진수",
    img_num: 149,
  },
];

let graduate_students = [];

function preload() {
  imgs_ballCursor[0] = loadImage("image/ball1s.png");
  imgs_ballCursor[1] = loadImage("image/ball2s.png");
  imgs_ballCursor[2] = loadImage("image/ball3s.png");

  imgs_pokemon[149] = loadImage("image/149s.png");
}

function setup() {
  let cnv = createCanvas(screenWidth, screenHeight);
  cnv.parent("screen");
  keyStack = new Set();

  for (let d of graduate_data) {
    graduate_students.push(new Graduate(d, 100, 100));
  }
}

function draw() {
  drawMap();

  movePlayerByKey();
  player.display();

  for (let g of graduate_students) {
    g.display();
  }

  //   drawBallCursor();
}

function drawMap() {
  background(200);
  let gridWidth = screenWidth / 60;
  let gridHeight = screenHeight / 40;
  stroke(0);
  for (let i = 0; i <= 60; i++) {
    line(gridWidth * i, 0, gridWidth * i, screenHeight);
  }
  for (let i = 0; i <= 40; i++) {
    line(0, gridHeight * i, screenWidth, gridHeight * i);
  }
}

function drawBallCursor() {
  if (mouse_cnt > 0) {
    mouse_cnt -= 4;
  }
  imageMode(CENTER);
  if (mouse_cnt > 30) {
    image(imgs_ballCursor[2], mouseX, mouseY, 30, 40);
  } else if (mouse_cnt > 0) {
    image(imgs_ballCursor[1], mouseX, mouseY, 30, 40);
  } else {
    image(imgs_ballCursor[0], mouseX, mouseY, 30, 40);
  }
}

function keyPressed() {
  keyStack.add(key);
}

function keyReleased() {
  keyStack.delete(key);
}

function mousePressed() {
  mouse_cnt = 60;
}

function mouseClicked() {
  for (let g of graduate_students) {
    g.mouseClicked();
  }
}

function movePlayerByKey() {
  let vx = 0;
  let vy = 0;
  for (let k of keyStack) {
    if (k == "ArrowLeft") {
      vx -= player_velocity;
    } else if (k == "ArrowRight") {
      vx += player_velocity;
    } else if (k == "ArrowUp") {
      vy -= player_velocity;
    } else if (k == "ArrowDown") {
      vy += player_velocity;
    }
    if (vx != 0 && vy != 0) {
      vx /= sqrt(2);
      vy /= sqrt(2);
    }
  }
  //   console.log(vx, vy);
  player.move(vx, vy);
}
