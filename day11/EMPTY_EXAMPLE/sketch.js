let worms = []

function setup() {
	createCanvas(500,500);
	background(0);
	

	for (let i=0; i<100; i++) {
		let temp = new Worm();
		worms.push(temp);
	}
}

function draw() {
	background(0,10);

	for (let i=0; i<worms.length; i++) {
		worms[i].moveAndDisplay();
	}
}

class Worm {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = 3;
		this.color = random(50,100);
		this.pickDirection();

		this.timeInState = 0;
		this.timeToBeInState = int(random(100,200));
	}

	moveAndDisplay() {
		noStroke();

		let d = dist(this.x,this.y,mouseX,mouseY);
		this.size = map(d,0,300,10,2);

		rect(this.x, this.y, this.size, this.size);
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		this.timeInState++;
		if (this.timeInState >= this.timeToBeInState) {
			this.pickDirection();
			this.timeInState = 0;
			this.timeToBeInState = int(random(100,200));
		}

		if (this.x>height) {
			this.x = 0;
		}
		if (this.x<0) {
			this.x = height;
		}
		if (this.y>height) {
			this.y = 0;
		}
		if (this.y<0) {
			this.y = height;
		}
	}

	pickDirection() {
		let chance = int(random(4));
		if (chance==0) { // left
			this.xSpeed = -5;
			this.ySpeed = 0;
		} else if (chance==1) { // right
			this.xSpeed = 5;
			this.ySpeed = 0;
		} else if (chance==2) { // up
			this.xSpeed = 0;
			this.ySpeed = -5;
		} else { // down
			this.xSpeed = 0;
			this.ySpeed = 5;
		}
	}
}