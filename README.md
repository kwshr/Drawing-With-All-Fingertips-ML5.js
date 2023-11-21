# Handpose: Drawing with All Fingertips

## Overview

This project utilizes the ml5 library for Handpose to detect and track hand landmarks in a live video feed. The fingertips' positions are then used to draw lines on a WebGL canvas.

## Setup

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Ensure your device has a working camera.

## Dependencies

- [ml5.js](https://learn.ml5js.org/docs/#/reference/handpose)

## Usage

1. Upon loading the page, the camera feed will be displayed.
2. As the Handpose model detects your hand, it will draw lines connecting the fingertips on the canvas.
3. Adjust the `maxPoints` variable to control the number of historical fingertip points considered for smoothing.

## Code Structure

- `setup()`: Initializes the canvas, video capture, and Handpose model.
- `modelReady()`: Callback function when the Handpose model is ready.
- `draw()`: Continuously draws the camera feed and fingertip lines.
- `drawLineswithFingerTips()`: Draws lines connecting fingertip points.
- `smoothPoints()`: Smoothes a set of points by averaging.
- `drawLines()`: Draws lines connecting smoothed points.

## Notes

- Make sure to run this code on a server or localhost due to camera access restrictions in some browsers.
- Adjust the canvas size in the `createCanvas()` function as needed.

Feel free to explore and modify the code for your specific use case!
