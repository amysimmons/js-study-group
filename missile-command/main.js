getRandomPoint = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startPosX = getRandomPoint(0, 500);
var startPosY = 0;
var nextPosX = startPosX++;
var nextPosY = startPosY++;
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

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineCap = "round";

// variable to hold how many frames have elapsed in the animation
var t = 1;

// define the path to plot
var vertices = [];
vertices.push({
    x: startPosX,
    y: startPosY
});
vertices.push({
    x: endPosX,
    y: endPosY
});

var points = calcWaypoints(vertices);
// extend the line from start to finish with animation
animate(points);

// calc waypoints traveling along vertices
function calcWaypoints(vertices) {
    var waypoints = [];
    for (var i = 1; i < vertices.length; i++) {
        var pt0 = vertices[i - 1];
        var pt1 = vertices[i];
        var dx = pt1.x - pt0.x;
        var dy = pt1.y - pt0.y;
        for (var j = 0; j < 100; j++) {
            var x = pt0.x + dx * j / 100;
            var y = pt0.y + dy * j / 100;
            waypoints.push({
                x: x,
                y: y
            });
        }
    }
    return (waypoints);
}

function animate() {
    if (t < points.length - 1) {
        requestAnimationFrame(animate);
    }
    // draw a line segment from the last waypoint
    // to the current waypoint
    ctx.beginPath();
    ctx.moveTo(points[t - 1].x, points[t - 1].y);
    ctx.lineTo(points[t].x, points[t].y);
    ctx.stroke();
    // increment "t" to get the next waypoint
    t++;
}

