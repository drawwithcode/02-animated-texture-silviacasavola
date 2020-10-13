// Color palette array
const colorList = ['#9381FF',
             	'#B8B8FF',
             	'#6FD08C',
             	'#FF595E',
              '#FFCA3A',
              '#F8F7FF'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
frameRate(10);
background(color('#F8F7FF'));
}

  function draw() {
// The variable "angle" is declared
  let angle;

  // The variable "angle" is initialized
  let radius=random(10+(mouseX/100),10+(mouseX/100));

// Nested "for" cycle
  for(let x = 0; x <= windowWidth; x+=angle/100)
//  for(let x = 0; x <= 500; x+=25)
  {
//    	for(let y = 0; y <= windowHeight; y+=angle/10)
      for(let y = 0; y <= windowHeight; y+=80)

      	{let colorFill = random(colorList);
          fill(color(colorFill));
          noStroke();

// The variable "angle" is initialized
angle=(x+y)/2;


// Unit of the pattern
  	arc(x+(frameCount), y, radius, radius,  0, angle);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}
}
}
