let rball, pnball;
let ry, pny;
let rad = 50;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  ry = height/4;
  pny = height/2 + ry;
  rball = new RandomBall(width,ry,rad);
  pnball = new PerlinNoiseBall(width,pny,rad);
}

function draw() {
  // put drawing code here
  background(220);
  rball.createBall();
  pnball.createBall();
  rball.moveBall();
  pnball.moveBall();
}
