App = {
	enemyMissile: function() {
		this.startPosX = Math.floor(Math.random() * (500 - 0 + 1)) + 0,
		this.startPosY = 0,
		this.endPosX = Math.floor(Math.random() * (500 - 0 + 1)) + 0,
		this.endPosY = 500,
		this.active = true,
		this.color = 'red',
		this.explosionZone= {}
	},

	playerMissile: function() {
		this.startPosX = 250,
		this.startPosY = 500,
		this.endPosX = null,
		this.endPosY = null,
		this.active = true,
		this.color = 'blue',
		this.explosionZone = {}
	},

	generateEnemyMissile: function(){
		var enemyMissile = new App.enemyMissile();
		App.launchEnemyMissile(enemyMissile);
	},

	launchEnemyMissile: function(enemyMissile){
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
		console.log(points)
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
		    ctx.stroke();
		    // increment "t" to get the next waypoint
		    t++;
		}
	},

	generatePlayerMissile: function(event){
		var playerMissile = new App.playerMissile();
		playerMissile.endPosX = event.clientX;
		playerMissile.endPosY = event.clientY;
		App.launchPlayerMissile(playerMissile);
	},

	launchPlayerMissile: function(playerMissile){
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
		    ctx.stroke();
		    // increment "t" to get the next waypoint
		    t++;
		}
	},

	initEvents: function(){

		//$('body').on('click', 'submit', Minesweeper.sizeOfBoard);

	    $('body').on('mousedown', '#canvas', function(event) {
	      App.generatePlayerMissile(event);
	    });
	}
}

App.initEvents();
App.generateEnemyMissile();

