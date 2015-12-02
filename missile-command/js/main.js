function Game () {
	this.level = 1;
	this.score = 0;
	this.enemyMissiles = [];
	this.running = true;

	var game = this;

	$('body').on('mousedown', '#canvas', function(event) {
      game.generatePlayerMissile(event);
    });

	_.times(this.level * 4, this.generateEnemyMissile, this);
}

Game.prototype.generatePlayerMissile = function(event) {
	var playerMissile = new PlayerMissile();
	var game = this;
	playerMissile.endPosX = event.clientX;
	playerMissile.endPosY = event.clientY;
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	// variable to hold how many frames have elapsed in the animation
	var t = 1;

	// define the path to plot
	var vertices = [];
	vertices.push({
	    x: playerMissile.startPosX,
	    y: playerMissile.startPosY
	});
	vertices.push({
	    x: playerMissile.endPosX,
	    y: playerMissile.endPosY
	});

	var points = calcWaypoints(vertices);
	console.log(points)
	// extend the line from start to finish with animation
	animate(points);

	function animate() {
		if (!game.running) return;
	    if (t < points.length - 1) {
	    	//slows down the animation 
	    	var framesPerSecond = 1000;
		   	setTimeout(function(){
	    		requestAnimationFrame(animate);
	    	}, 1000 / framesPerSecond);
	    }else {
	    	var explosionZonePoints = calculateExplosionZone(playerMissile);
			animateExplosion(explosionZonePoints);
			game.checkExplosion(playerMissile);   	
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

	function animateExplosion(explosionZonePoints) {
    	ctx.beginPath();
		ctx.moveTo(explosionZonePoints[0].x,explosionZonePoints[0].y);
		for(var i=1;i<explosionZonePoints.length;i++){
		    ctx.lineTo(explosionZonePoints[i].x,explosionZonePoints[i].y);
		}

		ctx.closePath();
		ctx.fillStyle="gold";
		ctx.fill();
		ctx.strokeStyle="orangered";
		ctx.lineWidth=3;
		ctx.stroke()
	}
};

Game.prototype.generateEnemyMissile = function () {
	var game = this;
	var enemyMissile = new EnemyMissile();
	this.enemyMissiles.push(enemyMissile);
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	// variable to hold how many frames have elapsed in the animation
	var t = 1;

	// define the path to plot
	var vertices = [];
	vertices.push({
	    x: enemyMissile.startPosX,
	    y: enemyMissile.startPosY
	});
	vertices.push({
	    x: enemyMissile.endPosX,
	    y: enemyMissile.endPosY
	});

	var points = calcWaypoints(vertices);
	console.log(points);
	// extend the line from start to finish with animation
	animate();

	function animate() {
		if (!game.running) return;
	    if (t < points.length - 1) {
	    	//slows down the animation 
	    	var framesPerSecond = 10;
		   	setTimeout(function(){
	    		requestAnimationFrame(animate);
	    	}, 1000 / framesPerSecond);
	    }
	    // draw a line segment from the last waypoint
	    // to the current waypoint
	    ctx.beginPath();
	    ctx.moveTo(points[t - 1].x, points[t - 1].y);
	    ctx.lineTo(points[t].x, points[t].y);
	    enemyMissile.currentPos = points[t];
	    ctx.stroke();
	    // increment "t" to get the next waypoint
	    t++;
	}
}

Game.prototype.checkExplosion = function(playerMissile) {
		
	// var centerX = missile.endPosX;
	// var centerY = missile.endPosY;
	// var radius = 40;

	//get the missiles and the current end point
	//see if it lies wihin the end point of the 

	//loop through an array of missiels and get their end points
	//get the distanc ebetwen that missile and the current explosion point (centre)
	//calc the distance between the missile end point and the explosion centrre 
	// is the ditance less than the radius
	

	var enemyMissiles = this.enemyMissiles;
	for (var i = 0; i < enemyMissiles.length; i++) {
		var missile = enemyMissiles[i];
		var distanceBetween = distanceBetweenTwoPoints(missile.currentPos, {x:playerMissile.endPosX, y:playerMissile.endPosY})
		var radius = 40;
			console.log(distanceBetween, radius)

		if (distanceBetween < radius) {
			this.running = false;
			$('#canvas').css('background-color', 'red');
			console.log('missile gone!!!!!!!!!');
		}
	};

};

function EnemyMissile () {
	this.startPosX = Math.floor(Math.random() * (500 - 0 + 1)) + 0
	this.startPosY = 0
	this.endPosX = Math.floor(Math.random() * (500 - 0 + 1)) + 0
	this.endPosY = 500
	this.active = true
	this.color = 'red'
	this.explosionZone= {}
	this.currentPos = null
}

function PlayerMissile () {
	this.startPosX = 250,
	this.startPosY = 500,
	this.endPosX = null,
	this.endPosY = null,
	this.active = true,
	this.color = 'blue',
	this.explosionZone = {}
}

function calculateExplosionZone (missile) {
	var centerX = missile.endPosX;
	var centerY = missile.endPosY;
	var radius = 40;

	var explosionZonePoints = [];

	for(var degree=0;degree<360;degree++){
	    var radians = degree * Math.PI/180;
	    var x = centerX + radius * Math.cos(radians);
	    var y = centerY + radius * Math.sin(radians);
	    explosionZonePoints.push({x:x,y:y});
	}
	console.log('explosion points', explosionZonePoints);
	return explosionZonePoints;
}

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

function distanceBetweenTwoPoints (a, b) {
	var x = a.x - b.x;
	var y = a.y - b.y;
	return Math.sqrt( x*x + y*y );
};

var theGame = new Game();

