   function setup() {
     // https://p5js.org/reference/#/p5/createCanvas
     // (width, height) of canvas
      createCanvas(400, 400);
   }

   function draw() {
      // https://p5js.org/reference/#/p5/background
      background(220);
      strokeWeight(1);
      stroke(51);
      fill('red');
      rect(165, 0, 55, 55);
      strokeWeight(0);
      stroke(51);
      fill('blue');
      rect(0, 165, 55, 55);
      strokeWeight(4);
      stroke('black');
      line(165, 25, 55, 190);
   }