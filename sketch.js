var webCamera;
var act;
var open;
var openL;
var koFont;
var openM;

function preload(){
  openM = loadSound("holiday.mp3");
  open = loadImage("haha.png");
  openL = loadImage("logo.png");
  koFont =loadFont('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff');
}

function setup() {
  webCamera=createCapture(VIDEO);
  createCanvas(windowWidth, windowHeight);
  webCamera.hide();
  act=0;
  openM.loop();
  userStartAudio();

  initialize();
  animate();

}

function draw() {
  act=act+1;
  console.log(act);
  if(act<1000){
  image(open, 0, 0, windowWidth, windowHeight);
  image(openL,windowWidth/4.5, windowHeight/10, windowWidth/1.6, windowHeight/3);
  textFont(koFont);
  text("화면을 클릭해서 동물들을 만나보세요.",windowWidth/3.3,windowHeight/1.2,1000,100);
  fill(255,255,255 )
  textSize(25)
  stroke(0,0,0)
  strokeWeight(3);}

  
  if(act>1000){
  image(webCamera,0,0, windowWidth,windowHeight);
  }
  }


function windowResized(){
resizeCanvas(windowWidth,windowHeight);
}

function mousePressed(){
act=1000;

}