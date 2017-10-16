
var wid = 0;
var hei = 0;

canvas = document.getElementById('canvas');

c = canvas.getContext("2d");

let box = new Box(0,0);

function Box(w, h) {
	this.x = canvas.width/2;
	this.y = canvas.height/2;

	this.w = w;
	this.h = h;

	this.update = function(w, h) {
		let ratio = w/h;
		if (w > canvas.width && h > canvas.height) {
			alert("plotas ir ilgis per dideli");
		}

		if (w > canvas.width) {
			
			w = canvas.width* 0.9;;
			h = w * ratio;
		}		

		if (h > canvas.height) {
			
			h = canvas.height* 0.9;
			w = h * ratio;
		}


		this.w = w;
		this.h = h;
		this.draw();
	}

	this.draw = function() {

		c.beginPath();
		c.rect(this.x-(this.w)/2, this.y-(this.h)/2, this.w, this.h);
		c.fillStyle = "black";
		c.fill();
	}
}


function animate() {

	c.clearRect(0,0,innerWidth,innerHeight);
	box.draw();

}


function rectangleWidthFun(val) {
	wid = parseInt(val);

	box.update(parseInt(val), hei);
	animate();
}

function rectangleHeightFun(val) {
	hei = parseInt(val);

	box.update(wid, parseInt(val));
	animate();
}