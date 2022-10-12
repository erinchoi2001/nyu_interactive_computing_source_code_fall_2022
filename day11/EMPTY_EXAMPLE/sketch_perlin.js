let noiseLocation = 0;

function setup() {
	createCanvas(500,500);
	background(0);
	noStroke();
	frameRate(30);
}

function draw() {
	background(0);
	fill(0,255,0,40);
	let rSize = random(50,200);
	ellipse(150,250,rSize,rSize);

	noiseLocation += 0.01;
	let v = noise(noiseLocation);
	// number between 0 and 1
	let pSize = map(v,0,1,50,200);
	fill(0,0,255);
	ellipse(350,250,pSize,pSize);
}