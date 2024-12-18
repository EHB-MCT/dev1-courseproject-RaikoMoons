"use strict";
import context from "./scripts/context.js";
import * as Utils from "./scripts/utils.js";

let width = context.canvas.width;
let lineWidth = 4;
let circlesWidth = 8;
let frame = 0;

animate();

function animate() {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	drawTshirtDesign();
	blackCircles();
	frame++;
	requestAnimationFrame(animate);
}

function getRandomHue() {
	return Utils.randomNumber(120, 360);
}

function drawTshirtDesign() {
	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 40);
	Utils.strokeCircle(width / 2, 350, 100, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 50);
	Utils.strokeCircle(width / 2, 350, 120, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 40);
	Utils.strokeCircle(width / 2, 350, 70, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 60);
	Utils.strokeCircle(width / 2 + 100, 140, 40, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 20);
	Utils.strokeCircle(width / 2 - 100, 180, 20, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 20);
	Utils.strokeCircle(width / 2 + 100, 555, 40, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 40);
	Utils.strokeCircle(width / 2 - 100, 500, 30, 100);

	context.lineWidth = lineWidth;
	context.strokeStyle = Utils.hsl(getRandomHue(), 180, 40);
	for (let i = 1; i < 4; i++) {
		Utils.strokeCircle(width / 2, 630, 30 + i * 10);
	}
}

function blackCircles() {
	context.lineWidth = circlesWidth;
	context.strokeStyle = "black";
	Utils.strokeCircle(width / 2, 450, 75, 100);

	context.lineWidth = circlesWidth;
	context.strokeStyle = "black";
	Utils.strokeCircle(width / 2, 250, 40, 100);

	context.lineWidth = circlesWidth;
	context.strokeStyle = "black";
	Utils.strokeCircle(width / 1.75, 600, 80, 100);

	context.lineWidth = circlesWidth;
	context.strokeStyle = "black";
	Utils.strokeCircle(width / 1.75, 165, 30, 100);
}
