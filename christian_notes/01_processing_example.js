//Processing example

function setup() {
  createCanvas(400, 400);
}

var position_x = 150;
var position_y = 150;

function draw() {
  // background(220);

	fill('magenta');

	// ellipse(200, 200, 200, 200);
	noStroke();

	position_x += cos(millis() * 0.001);
	position_y += sin(millis() * 0.001);


	for(var i = 0; i < 20; i++) {
		fill(random(0, 255), random(0, 255), random(0, 255));
		var new_position_x = position_x + (100 * cos(millis() * i * 0.005));
		var new_position_y = position_y + (100 * sin(millis() * i * 0.01));
		ellipse(new_position_x, new_position_y, 10, 10);
	}
}

//
