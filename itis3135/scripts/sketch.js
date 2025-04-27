function setup() {
    createCanvas(710, 400, WEBGL);
    angleMode(DEGREES);
    strokeWeight(2);
    noFill();
    stroke(32, 11, 233);
    describe(
      'Users can click on the screen and drag to adjust their perspective in 3D space. The space contains a sphere of dark purple cubes on a light pink background.'
    );
  }
  
  function draw() {
    background(250, 180, 200);
  
    orbitControl();
  
    for (let zAngle = 0; zAngle < 180; zAngle += 30) {
      for (let xAngle = 0; xAngle < 360; xAngle += 30) {
        push();
  
        rotateZ(zAngle);
        rotateX(xAngle);
  
        translate(0, 400, 0);
        box();
        pop();
      }
    }
  }