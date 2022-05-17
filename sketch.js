function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  let hr = hour();
  let min = minute();
  let sec = second();

  // AM or PM
  let mer;

  if (hr < 12) {
    mer = "am";
  } else {
    mer = "pm";
  }

  // numerical time
  fill(255);
  noStroke();
  textSize(14);
  textAlign(CENTER);

  if (sec < 10) {
    if (min < 10) {
      text((hr % 12) + ":0" + min + ":0" + sec + " " + mer, -150, -170);
    } else {
      text((hr % 12) + ":" + min + ":0" + sec + " " + mer, -150, -170);
    }
  } else if (min < 10) {
    text((hr % 12) + ":0" + min + ":" + sec + " " + mer, -150, -170);
  } else {
    text((hr % 12) + ":" + min + ":" + sec + " " + mer, -150, -170);
  }

  // arcs and hands
  push();
  rotate(-90);
  noFill();
  strokeWeight(8);
  strokeCap(ROUND);

  stroke(115, 39, 245);
  let secAngle = map(sec, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  stroke(20, 250, 116);
  let minAngle = map(min, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(250, 20, 81);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  push();
  rotate(secAngle);
  stroke(255);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(minAngle);
  stroke(200);
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(145);
  line(0, 0, 60, 0);
  pop();

  pop();
}
