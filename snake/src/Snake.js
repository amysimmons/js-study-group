import React from 'react/addons';
import Grid from './Grid';
import GridSquare from './GridSquare';
import Score from './Score';
import GameStatus from './GameStatus';

var Snake = React.createClass({
  getInitialState (){
    var grid,
      food = [Math.floor(Math.random() * 40) + 1, Math.floor(Math.random() * 40) + 1],
    	snake = {
			direction: 'd',
			currentSnake: [[20, 20], [20, 21], [20, 22], [20, 23], [20, 24]]
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
  	setInterval(() => {
      var food = this.state.food;
      var currentSnake = this.state.snake.currentSnake;
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
  		nextSnakePositions.unshift(nextHead);
  		nextSnakePositions.pop();

      //if the head crosses the body at any point, end game
      //not working yet
      /*
      debugger
      var body = currentSnake.slice(1, currentSnake.length);
      if (body.indexOf(nextHead) != -1) {
        this.endGame();
      }
      */
   
      if (currentSnake[0][0] == food[0] && currentSnake[0][1] == food[1]) {
        console.log('snake ate food');
        this.eatFood();
      }

  		this.setState({
  			grid : this.createGridData(nextSnakePositions, this.state.food),
  			snake : {
  				direction: this.state.snake.direction,
  				currentSnake: nextSnakePositions
  			}
  		});
  	}, 1000);
  },
  endGame() {
    console.log('game over')
    this.replaceState(this.getInitialState());
  },
  placeFood () {

  },
  eatFood () {
    var food = this.state.food
    this.replaceState(this.getInitialState({food: food}))
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