canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context = canvas.getContext("2d");

d_x = 0;
d_y = 0;

var guessX;
var guessY;
function storeGuess(event) {

	var x = event.offsetX;
	var y = event.offsetY;
	guessX = x;
	guessY = y;

}
console.log(guessX);
// var centerX = canvas.width / 2;
// var centerY = canvas.height / 2;
// var radius = 70;

// context.beginPath();
// context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
// context.fillStyle = 'green';
// context.fill();


// document.onkeydown = function(e) {
// 	switch (e.keyCode) {
//         case 37: // left
//         d_x -= 20; 
//         break;
//         case 38: // up
//         d_y -= 20; 
//         break;
//         case 39: // right
//         d_x += 20; 
//         break;
//         case 40: //down
//         d_y += 20;
//         break;
//     }
// };


// function touching(dimension, x, y, radius) {

// 	// from top-bottom
// 	if (
// 		dimension == "y" && ((y+radius) > box.y) &&
// 		((y-radius) < (box.y + box.h)) &&
// 		x > box.x && x <box.x + box.w
// 		){
// 		return true;
// 	}

// 	// from left-right
// 	if (
// 		dimension == "x" && ((x+radius) > box.x) &&
// 		((x-radius) < (box.x + box.h)) &&
// 		y > box.h && y <box.y + box.h
// 		){
// 		return true;
// 	}

// 	return false;

// }

function Circle(x, y, dx, dy, r) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.r = r;
	this.update = function() {
		if (this.x + this.r >= innerWidth || this.x - this.r <= 0) {
			this.dx = -this.dx;
		}

		if (this.y + this.r >= innerHeight || this.y - this.r <= 0) {
			this.dy = -this.dy;
		} 

		// if (touching("x",this.x, this.y, this.r)) {
		// 	this.dx = -this.dx;
		// }

		// if (touching("y",this.x, this.y, this.r)) {
		// 	this.dy = -this.dy;
		// }

		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}

	this.hover = function() {
		if (this.x - guessX < 0) {
			console.log(guessX);

		}

	}
	this.draw = function() {
		context.beginPath();
		context.arc(this.x, this.y, this.r, 0,2*Math.PI);
		context.fillStyle = "violet";
		context.fill();
	}
}

// function Box(x, y, w, h) {
// 	this.x = x;
// 	this.y = y;
// 	this.w = w;
// 	this.h = h;

// 	this.update = function(dx, dy) {
// 		this.x += dx;
// 		this.y += dy;
// 		this.draw();
// 	}
// 	this.draw = function() {
// 		c.beginPath();
// 		c.rect(this.x, this.y, this.w, this.h);
// 		c.fillStyle = "black";
// 		c.fill();
// 	}
// }


var circleArray = [];

for (var i = 0; i < 1; i++) {
	var x = Math.floor(Math.random() * (window.innerWidth - 50) + 50);
	var y = Math.floor(Math.random() * (window.innerHeight - 50) + 50);
	var dx = (Math.random() - 0.5) * 2;
	var dy = (Math.random() - 0.5) * 2;

	circleArray.push(new Circle(x,y,dx,dy,10));
}

// var box = new Box(200,200,100,100);

function animate() {
	requestAnimationFrame(animate);
	context.clearRect(0,0,innerWidth,innerHeight);

	for (var i = circleArray.length - 1; i >= 0; i--) {
		circleArray[i].update();
	}
	// box.update(d_x, d_y);
	// d_x = 0;
	// d_y = 0;
}

animate();


