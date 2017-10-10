canvas = document.getElementById('myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function storeGuess(event) {
	var x = event.offsetX;
	var y = event.offsetY;
	guessX = x;
	guessY = y;
	console.log("x coords: " + guessX + ", y coords: " + guessY);
}


// var canvasW = 650;

var ctx = canvas.getContext('2d');



// ctx.rect(400, 500, 400, 400);
// ctx.fillStyle="#FF0000";
// ctx.fillRect(400,500,400,400);
// ctx.stroke();

// ctx.moveTo(400,500);
// ctx.lineTo(600,300);
// ctx.lineTo(800,500);
// ctx.stroke();


// ctx.moveTo(540,900);
// ctx.lineTo(540,700);
// ctx.lineTo(540,700);
// ctx.lineTo(660,700);
// ctx.lineTo(660,900);
// ctx.stroke();

// ctx.moveTo(728,428);
// ctx.lineTo(728,328);
// ctx.lineTo(680,328);
// ctx.lineTo(680,379);

// ctx.rect(460, 560, 60, 60);
// ctx.fillStyle="#fff";
// ctx.fillRect(460,560,60,60);
// ctx.stroke();

// ctx.rect(680, 560, 60, 60);
// ctx.fillStyle="#fff";
// ctx.fillRect(680,560,60,60);
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(900,150,40,0,2*Math.PI);
// ctx.stroke();
// var coorX = Math.random() * window.innerWidth;
// var coorY = Math.random() * window.innerHeight;



// ctx.fillStyle = 'rgb(' + rRed +', ' + rBlue + ', ' + rGreen + ')';

// for (var i = 0; i < 1; i++) {

// 	var circleSize = Math.random() * 90+10;
// 	var coorX = Math.random() * window.innerWidth;
// 	var coorY = Math.random() * window.innerHeight;


// 	ctx.beginPath();
// 	ctx.arc(coorX, coorY, circleSize, 0, 2*Math.PI);
// 	rRed = Math.ceil(Math.random() * 255);
// 	rBlue = Math.ceil(Math.random() * 255);
// 	rGreen = Math.ceil(Math.random() * 255);

// 	
// 	ctx.fill();

// }



d_x = 0;
d_y = 0;


document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 37: //left
			d_x -= 20;
			break;
		case 38: //up
			d_y -= 20;
			break;
		case 39: //right
			d_x += 20;
			break;
		case 40: //down
			d_y += 20;
			break;

	}
}

function Box(x, y, w, h) {

	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.update = function(dx, dy) {
		if (this.x+dx <= 0) {
			dx = 0;
			this.x = 0;
			
		}
		if (this.y+dy <= 0) {
			dy = 0;
			this.y = 0;
		}
		if (this.x+dx >= innerWidth-this.w) {
			dx = 0;
			this.x = innerWidth-this.w;
			
		}
		if (this.y+dy >= innerHeight - this.h) {
			dy = 0;
			this.y = innerHeight - this.h;
		}

		this.x += dx;
		this.y += dy;

		this.draw();

	}


	this.draw = function () {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.w, this.h);
		ctx.fillStyle = "black";
		ctx.fill();

		// if (this.x + this.circleSize >= this.innerWidth || this.x - this.circleSize <= 0) {
		// 	this.dx = -this.dx;
		// }

		// if ( this.y + this.circleSize > this.innerHeight || this.y - this.circleSize < 0) {
		// 	this.dy = -this.dy;
		// }

		// this.x += this.dx;
		// this.y += this.dy;

		
	}

	this.draw();
}


var box = new Box(200, 200, 200, 200);


function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	// for(var i = )
	box.update(d_x, d_y);
	d_x = 0;
	d_y = 0;

}

animate();


// var grd = ctx.createLinearGradient(400,500,400,400);
// grd.addColorStop(0,"red");
// grd.addColorStop(1,"white");

// ctx.fillStyle = grd;
// ctx.fillRect(400,500,400,400);

