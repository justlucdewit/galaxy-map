let currentStar = 0;

function setStar(i){
	star = stars[i];
	let mass = star.mass;
	let x = star.pos[0];
	let y = star.pos[1];
	let z = star.pos[2];
	let name = star.name;
	let type = star.type;

	document.getElementById("mass").innerHTML = mass;
	document.getElementById("x").innerHTML = x;
	document.getElementById("y").innerHTML = y;
	document.getElementById("z").innerHTML = z;
	document.getElementById("name").innerHTML = name;
	document.getElementById("type").innerHTML = type;
	console.log(star)
}

function nextStar(){
	if (currentStar < stars.length-1){
		currentStar++;
		setStar(currentStar);
	}
}

function prevStar(){
	if (currentStar > 0){
		currentStar--;
		setStar(currentStar);
	}
}

function goToStar(){
	let value = parseInt(document.getElementById("inputbox").value);
	if (!isNaN(value)){
		//find for star
		currentStar = value
		setStar(value);
	}else if(value < stars.length-1){
		alert("the star you are trying to find is not available, try to search for stars with a index under"+stars.length-1);
	}else{
		//no numbers where found in input
		alert("value submitted is invalid (" + document.getElementById("inputbox").value + ")");
	}
}

/*
//search largest star
record=0;
for (i in stars){
	if (parseFloat(stars[i].mass) > record){
		record=parseFloat(stars[i].mass);
		console.log(stars[i].name);
	}
}

//search furthes star
record=0;
for (i in stars){
	if (dist(stars[i].pos[0], stars[i].pos[1], 0, 0) > record){
		record = dist(stars[i].pos[0], stars[i].pos[1], 0, 0);
		console.log(stars[i].name)
	}
}

*/