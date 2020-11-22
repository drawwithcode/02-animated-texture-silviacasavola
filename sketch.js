let x;
let y;
let margin_x;
let margin_y;
let slider;

function preload() {
  myFont = loadFont("assets/Whyte-Book.ttf")
}

function setup() {
    let cnv = createCanvas(windowWidth,windowHeight);
    cnv.style("display", "block")
    frameRate(200);

//MARGIN-LEFT CONTROL SLIDER
    slider1 = createSlider(50, 200);
    slider1.position(windowWidth/5, (windowHeight/8)*7);
    slider1.size(110);

//MARGIN-RIGHT CONTROL SLIDER
    slider2 = createSlider(50, 200);
    slider2.position((windowWidth/5)*4, (windowHeight/8)*7);
    slider2.size(110);

//MARGIN-TOP CONTROL SLIDER
    slider3 = createSlider(50, 200);
    slider3.position((windowWidth/5)*2, (windowHeight/8)*7);
    slider3.size(110);

//MARGIN-BOTTOM CONTROL SLIDER
    slider4 = createSlider(50, 200);
    slider4.position((windowWidth/5)*3, (windowHeight/8)*7);
    slider4.size(110);

//NUMBER OF COLUMNS CONTROL SLIDER
    slider5 = createSlider(0, 20);
    slider5.position((windowWidth/5)*2, (windowHeight/4)*3);
    slider5.size(110);

//NUMBER OF ROWS CONTROL SLIDER
    slider6 = createSlider(0, 10);
    slider6.position((windowWidth/5)*3, (windowHeight/4)*3);
    slider6.size(110);
}

function draw() {
 background("white");

 stroke("#80fefe");
 strokeWeight(2);


let margin_left = slider1.value();
let margin_right = slider2.value();
// let number_x = map(mouseX, 0, windowWidth, 0, 20)
let number_x = slider5.value();
let myWidth = windowWidth-margin_left-margin_right;


for(var x = 0; x < myWidth; x += myWidth / number_x) {
    line(margin_left + x, 0, margin_left + x, windowHeight)
  }

let margin_top = slider3.value();
let margin_bottom = slider4.value();
// let number_y = map(mouseY, 0, windowHeight, 0, 10);
let number_y = slider6.value();
let myHeight = windowHeight-margin_top-margin_bottom;


for(var y = 0; y < myHeight; y += myHeight/number_y) {
    line(0, margin_top+y, windowWidth, margin_top+y)
  }

textFont(myFont)

  push()
  stroke("#ffb7ff");
  strokeWeight(3)
  noFill();
  rect(margin_left, margin_top, myWidth, myHeight)
  // textFont(roboto);
  pop();

  push()
  noStroke();
  textSize(50);
  text("Grids are fun-damental.", margin_left, margin_top)
  pop();

  push()
  textSize(18)
  noStroke();
  text("Margin-left", windowWidth/5, (windowHeight/8)*7-10)
  text("Margin-top", (windowWidth/5)*2, (windowHeight/8)*7-10)
  text("Margin-bottom", (windowWidth/5)*3, (windowHeight/8)*7-10)
  text("Margin-right", (windowWidth/5)*4, (windowHeight/8)*7-10)

  text("Columns", (windowWidth/5)*2, (windowHeight/4)*3-10)
  text("Rows", (windowWidth/5)*3, (windowHeight/4)*3-10)
  pop()
}
