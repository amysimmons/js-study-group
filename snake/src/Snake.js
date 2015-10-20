import React from 'react/addons';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';
import GameStatus from './GameStatus';

var Snake = React.createClass({
  getInitialState (){
    var grid,
      food = [Math.floor(Math.random() * 39) + 1, Math.floor(Math.random() * 39) + 1],
    	snake = {
			direction: 'u',
			currentSnake: [[20, 20], [20, 21], [20, 22], [20, 23], [20, 24], [20, 25]]
		};

    return{
		grid: this.createGridData(snake.currentSnake, food),
    food: food,
		snake: snake
    };
  },
  componentDidMount() {
  	this.startGame();
    window.addEventListener('keydown', this.handleKeyDown);
  },
  startGame () {
  	this.setState(this.state);

  	var timer = setInterval(() => {
      var food = this.state.food;
      var grid = this.state.grid;
      var currentSnake = this.state.snake.currentSnake;
      var currentSnakeHead = this.state.snake.currentSnake[0].slice();
  		var nextSnakePositions = this.state.snake.currentSnake.slice();
  		var nextHead = nextSnakePositions[0].slice();

  		switch(this.state.snake.direction){
  			case 'r':
  				nextHead[0]++;
  			break;
  			case 'l':
  				nextHead[0]--;
  			break;
  			case 'd':
  				nextHead[1]++;
  			break;
  			case 'u':
  				nextHead[1]--;
  			break;
  		}

      //dont pop the tail off if the snake has eaten food
      if (currentSnake[0][0] == food[0] && currentSnake[0][1] == food[1]) {
        console.log('snake ate food');
        grid[food[0],food[1]][food[0]] = 'snake';
        food = [Math.floor(Math.random() * 39) + 1, Math.floor(Math.random() * 39) + 1];
        nextSnakePositions.unshift(nextHead);
      }
      else {
        nextSnakePositions.unshift(nextHead);
        nextSnakePositions.pop();
      }

      this.setState({
        grid : this.createGridData(nextSnakePositions, this.state.food),
        food: food,
        snake : {
          direction: this.state.snake.direction,
          currentSnake: nextSnakePositions
        }
      });

      //end game if snake leaves the board
      switch(true){
        case nextHead[0] <= 0:
          clearInterval(timer);
          this.endGame();
        break;
        case nextHead[0] >= 39:
        clearInterval(timer);
         this.endGame();
        break;
        case nextHead[1] >= 39:
        clearInterval(timer);
          this.endGame();
        break;
        case nextHead[1] <= 0:
        clearInterval(timer);
         this.endGame();
        break;
      }

      //end game if head touches body
      var body = nextSnakePositions.slice(1, nextSnakePositions.length);

      for (var i = 0; i < body.length; i++) {
       var bodyPart = body[i];
       if ((bodyPart[0] == nextHead[0]) && (bodyPart[1] == nextHead[1])) {
        this.endGame();
       }
      }
  	}, 300);
  },
  endGame() {
    console.log('game over');
    this.replaceState(this.getInitialState());
    this.startGame();
  },
  handleKeyDown (e) {
      console.log(e.type, e.which, e.timeStamp);
      switch(e.which){
        case 39:
          this.state.snake.direction = 'r';
        break;
        case 37:
          this.state.snake.direction = 'l';
        break;
        case 40:
          this.state.snake.direction = 'd';
        break;
        case 38:
          this.state.snake.direction = 'u';
        break;
      }

      this.setState({
        snake : {
          direction: this.state.snake.direction,
          currentSnake: nextSnakePositions
        }
      });
  },
  createGridData(currentSnakePositions = [], food) {
    var grid = [];
    for(var i = 0; i < 40; i++){
    	grid.push([]);
    	for(var j = 0; j < 40; j++){
        grid[i].push('empty');
    	}
    }

    var currentSnakePositions = currentSnakePositions;

    currentSnakePositions.forEach(([x, y]) => {
    	grid[y][x] = 'snake';
    });

    let [x,y] = [food[0],food[1]]
    grid[y][x] = 'food';

    return grid;
  },
  render (){
    var grid = this.state.grid;
    var snake = this.state.snake;
    var food = this.state.food;

    return (
      <div className="game">
          <Score/>
          <Grid
          grid={grid}
          snake={snake}
          food={food}
          rowCount="40"
          squareCount="40"/>
          <GameStatus/>
      </div>
    )
  }
});

module.exports = Snake;