class Star{
	constructor(name, x, y, z){
		this.name = name;
		this.pos = [x, y, z];
		this.mass = 0;
		this.type;

		r = random(0, 100);
		if(r >= 76.45){
			//m
			this.type = "M";
			this.mass = random(0.08,0.45)+" M☉";
		}else if(r >= 12.1){
			//k
			this.type = "K";
			this.mass = random(0.45,0.8)+" M☉";
		}else if(r >= 7.6){
			//g
			this.type = "G";
			this.mass = random(0.8,1.04)+" M☉";
		}else if(r <= 3){
			//f
			this.type = "F";
			this.mass = random(1.04, 1.4)+" M☉";
		}else if(r <= 0.6){
			//a
			this.type = "A";
			this.mass = random(1.4, 2.1)+" M☉";
		}else if(r <= 0.13){
			//b
			this.type = "B";
			this.mass = random(2.1, 16)+" M☉";
		}else{
			//o
			this.type = "O";
			this.mass = random(16, 100)+" M☉";
		}
	}

	render(){
		chart.ellipse(map(this.pos[0], -zoom, zoom, -chart.width/2, chart.width/2), map(this.pos[1], -zoom, zoom, -chart.height/2, chart.height/2), 2, 2);
	}

}

let zoom = 150000;
let stars = [];
let numOfStars = 50000;

function setup(){
	randomSeed(99);
	angleMode(DEGREES);
	function polarToCart(r, a){
		return [r*cos(a), r*sin(a)];
	}

	function randomStar(name="undifined Object"){
		r = abs(randomGaussian(3000, 30000));
		twirlfactor = 200;
		coreradius = 25000;
		strictness = 5;
		if (r <= coreradius && random(0, 10)<3){
			coords = polarToCart(r, random(0, 360));
		}else if (random(0, 100000)<50000){
			coords = polarToCart(r, 0+r/83000*twirlfactor-twirlfactor+randomGaussian(0, strictness)*83000/r);
		}else{
			coords = polarToCart(r, 180+r/83000*twirlfactor-twirlfactor+randomGaussian(0, strictness)*83000/r);
		}
		x = coords[0];
		y = coords[1];
		z = random(-2000,2000);
		return new Star(name, x, y, z);
	}

	for (let i = 0; i < numOfStars; i++){
		newstar = randomStar("star #"+i);
		stars.push(newstar);
	}

	chart = createGraphics(700, 700);
	chart.fill(255);
	chart.translate(chart.width/2, chart.height/2);
	chart.background(0, 0, 0);
	
	for (s in stars){
		stars[s].render();
	}

	chart.text("AMP 0.3", -chart.width/2+20, -chart.height/2+20);
	setStar(0);
	createCanvas(chart.width, chart.height)

	strokeWeight(5);
	stroke(255, 0, 0);
	noFill()
}

function draw(){
	noLoop()
	image(chart, 0, 0);
	ellipse(map(star.pos[0], -zoom, zoom, 0, width), map(star.pos[1], -zoom, zoom, 0, width), 20, 20)
}