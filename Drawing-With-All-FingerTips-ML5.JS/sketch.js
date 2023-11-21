

let handpose;
let video;
let predictions = [];
let fingerNames = ['thumb', 'indexFinger', 'middleFinger', 'ringFinger', 'pinky'];

function setup() {
  createCanvas(640, 480, WEBGL);

  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);
  
  handpose.on("predict", (results) => {
    predictions = results;
  });
  
  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function draw() {
  background(0);
  translate(-width / 2, -height / 2);
  
  image(video, 0, 0, width, height);

  drawLineswithFingerTips();
}

let fingerTipPoints =Array.from({ length: 5 }, () => []);
let maxPoints = 10;
function drawLineswithFingerTips() {
  if (predictions.length > 0) {
    const prediction = predictions[0];
    for (let i = 0; i < 5; i++) {
      fill(255, 0, 0, 50);
      let finger = prediction.annotations[fingerNames[i]];
        let x = finger[3][0];
        let y = finger[3][1];

        ellipse(x, y, 10, 10);

        fingerTipPoints[i].push([x, y]);

        if (fingerTipPoints[i].length > maxPoints) {
          fingerTipPoints[i].shift();
        }
    }
        for (let i = 0; i < 5; i++) {
      stroke(255, 0, 0);
      smoothPoints(fingerTipPoints[i])
      drawLines(fingerTipPoints[i]);
    }
  }
}
function smoothPoints(points) {
  let sumX = 0;
  let sumY = 0;
  for (let p of points) {
    sumX += p[0];
    sumY += p[1];
  }

  let avgX = sumX / points.length;
  let avgY = sumY / points.length;
  return [avgX, avgY];
}

function drawLines(points) {
  for (let i = 1; i < points.length; i++) {
    let start = points[i - 1]; 
    let end = points[i];
    line(start[0], start[1], end[0], end[1]);
  } 
}
