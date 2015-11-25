getRandomPoint = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startPosX = getRandomPoint(0, 500);
var startPosY = 0;
var endPosX = getRandomPoint(0, 500);
var endPosY = 500;

var missile = {
	startPosX: startPosX,
	startPosY: startPosY,
	currentPosX: startPosX,
	currentPosY: startPosY,
	endPosX: endPosX,
	endPosY: endPosY,
	active: true,
	color: 'red',
}

function draw() {
	var svg = d3.select('svg');

	var line = svg.append("line")
		.attr("x1",startPosX)
		.attr("y1",startPosY)
		.attr("x2",startPosX)
		.attr("y2",startPosY)
		.attr("stroke-width", 2)
		.attr("stroke", "black");

	line
	  .transition()
	.duration(3000)
	  .attr("x2",endPosX)
	.attr("y2",endPosY)

	.each(function(){
		console.log(this);
		//debugger
	});
	
}

draw()



